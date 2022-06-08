import * as functions from "firebase-functions";
import * as youtube from "./youtube";

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

export const notifications = functions.https.onRequest(
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

      // Parse payload
      const pubsubobj = youtube.parsePubSubHubbub(request.body.toString());
      // Grab extra metadata about the video id.
      const vidmetadata = await youtube.getYTMetadata(pubsubobj["feed"]["entry"]["yt:videoId"]);
      // Return relevant data used for event scheduling
      const scheduledEventMetadata = youtube.getScheduledStreamData(vidmetadata);
      // Check if event is less than 24 hours.
      const scheduledDate = new Date(scheduledEventMetadata["startTimestamp"]);
      const currentDate = new Date();
      const timediffhrs = ((scheduledDate.getTime() - currentDate.getTime()) / 36e5);
      if (scheduledDate < currentDate) {
        console.warn("ScheduledDate is in the past!");
        console.warn("ScheduledDate: " + scheduledDate.getTime());
        console.warn("CurrentDate: " + currentDate.getTime());
        console.warn("Time difference: " + (timediffhrs) + " hours");
      }
      if (Math.abs(timediffhrs) <= 24) {
        console.log("We should create a Discord Event: " + scheduledEventMetadata["title"]);
        console.log("This event is scheduled for" + scheduledDate);
      } else if (timediffhrs < 0) {
        console.log("Event in the past, ignoring...");
      } else {
        console.log("Saving event: " + scheduledEventMetadata["title"]);
      }
      // if so, create event.
      // if not, save for later.
      // Create event
      response.send(responsePayload);
    });
