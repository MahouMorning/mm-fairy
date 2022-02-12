import * as functions from "firebase-functions";

type HttpsOnRequestHandler = Parameters<typeof functions.https.onRequest>[0]
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//
export const addMessage = functions.https.onRequest((request, response) => {
  console.log("This is a addmessage call.")
  response.send("Hello from SendMessage.")
})

export const hello = () => 'Hello World!'
