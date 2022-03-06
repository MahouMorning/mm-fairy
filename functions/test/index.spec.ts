
// const test = require('firebase-functions-test')();
import {addMessage} from "../src/index";
import {assert} from "chai";
import "mocha";
import * as functions from "firebase-functions";


// type HttpsOnRequestHandler = Parameters<typeof functions.https.onRequest>[0]

//
// describe("Hello Function", () => {
//   it("should return Hello World", () => {
//     const result = hello();
//     expect(result).to.equal("Hello World!");
//   });
// });

describe("addMessage", () => {
  it("should return 200 on an empty payload", () => {
    const req : functions.Request = { } as any;
    const res : functions.Response = {
      send: (message: string) => {
        assert.equal(message, "Hello from SendMessage.");
      },
    } as any;
    addMessage(req, res);
  });
});
// // A fake request object, with req.query.text set to 'input'
// const req = { query: {text: 'input'} };
// // A fake response object, with a stubbed redirect function which asserts
// // that it is called with parameters 303, 'new_ref'.
// const res = {
//  redirect: (code, url) => {
//    assert.equal(code, 303);
//    assert.equal(url, 'new_ref');
//    done();
//  }
// };
//
// // Invoke addMessage with our fake request and response objects. This will
// // cause the assertions in the response object to be evaluated.
// myFunctions.addMessage(req, res);
