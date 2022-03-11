import * as functions from "firebase-functions";

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
    (request: functions.Request, response: functions.Response) => {
      console.log("This is the notifications call. v2");
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
      process.stdout.write(request.body.toString());

      response.send(responsePayload);
    });
