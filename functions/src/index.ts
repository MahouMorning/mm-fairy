import * as functions from "firebase-functions";
import * as youtube from "./youtube";
import * as discord from "./discord";
import * as config from "./config";

// type HttpsOnRequestHandler = Parameters<typeof functions.https.onRequest>[0]
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//
export const addMessage = functions.https.onRequest(
    (request: functions.Request, response: functions.Response) => {
      console.log("This is a addmessage call.");
      response.send("Hello from SendMessage.");
    });

export const notifications = functions
    .runWith({secrets: ["DISCORD_BOT_TOKEN"]})
    .https.onRequest(
        async (request: functions.Request, response: functions.Response) => {
          console.log("This is the notifications call. v3");
          let responsePayload = "";
          console.log("This is a " + request.method);

          if (request.method == "GET") {
            console.log("Processing GET Request");
            responsePayload = request.query["hub.challenge"] as string ||
                              "No challenge available";
          }

          if (request.method == "POST") {
            console.log("Processing POST Request");
            responsePayload = request.query["hub.challenge"] as string ||
                              "No challenge available";
          }
          console.log("Request Query");
          console.log(request.query);
          console.log("Request Body");
          process.stdout.write(request.body.toString() + "\n");

          if (request.method == "POST") {
            // Parse payload
            const pubsubobj = youtube.parsePubSubHubbub(request.body.toString());
            // Check if this is an addition of a video or a deletion
            if ( pubsubobj["feed"] != undefined && pubsubobj["feed"]["entry"] != undefined && pubsubobj["feed"]["entry"]["yt:videoId"] != undefined) {
              // Grab extra metadata about the video id.
              const vidmetadata = await youtube.getYTMetadata(pubsubobj["feed"]["entry"]["yt:videoId"]);
              // Return relevant data used for event scheduling
              const scheduledEventMetadata = youtube.getScheduledStreamData(vidmetadata);
              // Check if event is less than 24 hours.
              const scheduledDate = scheduledEventMetadata["startTimestamp"] != undefined ? new Date(scheduledEventMetadata["startTimestamp"]) : new Date();
              const currentDate = new Date();
              const timediffhrs = ((scheduledDate.getTime() - currentDate.getTime()) / 36e5);
              if (scheduledDate < currentDate) {
                console.warn("ScheduledDate is in the past!");
                console.warn("ScheduledDate: " + scheduledDate.getTime());
                console.warn("CurrentDate: " + currentDate.getTime());
                console.warn("Time difference: " + (timediffhrs) + " hours");
              }
              if (timediffhrs <= 24 && timediffhrs >= 0) {
                console.log("We should create a Discord Event: " + scheduledEventMetadata["title"]);
                console.log("This event is scheduled for: " + scheduledDate);
                discord.createExternalEvent(scheduledEventMetadata);
              } else if (timediffhrs < 0) {
                console.log("Event in the past, ignoring...");
                // TODO: Implement ask the mods, instead of ignoring
              } else {
                console.log("We should save this event for later: " + scheduledEventMetadata["title"]);
              }
              // if so, create event.
              // if not, save for later.
              // Create event
            }
            if (pubsubobj["feed"] != undefined && pubsubobj["feed"]["at:deleted-entry"] != undefined) {
              // Detected a deleted video payload
              console.log("Video is being deleted: " + pubsubobj["feed"]["at:deleted-entry"]["@_ref"]);
            }
          }
          response.send(responsePayload);
        });

export const testDiscordEvent = functions
    .runWith({secrets: ["DISCORD_BOT_TOKEN"]})
    .https.onRequest(
        async (request: functions.Request, response: functions.Response) => {
          console.log("Running test Discord Event Creation");
          console.log("Request:");
          console.log(request);
          const retval = await discord.testCreateEvent();
          console.log(retval);
          console.log("Done?");
          response.send("Done?");
        }
    );

export const testPubSub = functions.https.onRequest(
        async (request: functions.Request, response: functions.Response) => {
          console.log("Running test pubsub info");
          const retval = await youtube.getPubSubHubBubSubscriptionInfo(config.youtube.channelInfo[0].topic);
          console.log("Response:");
          console.log(retval);
          response.json(retval);
        }
    );


