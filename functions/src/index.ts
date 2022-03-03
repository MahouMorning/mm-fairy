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
export const addMessage = functions.https.onRequest((request, response) => {
  console.log("This is a addmessage call.");
  response.send("Hello from SendMessage.");
});

export const notifications = functions.https.onRequest((request, response) => {
  console.log("This is the notifications call.");
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
  console.log(request.body);

  response.send(responsePayload);
});
