import {parsePubSubHubbub, getYTMetadata, getBestThumbnailURL, getScheduledStreamData} from "../src/youtube";
import {assert} from "chai";
import "mocha";
import * as fs from "fs";
import * as path from "path";

const payload = fs.readFileSync(path.join(__dirname, 'yt_xml_example.xml'), { encoding: 'utf8' });
const payloadScheduledStream = JSON.parse(fs.readFileSync(path.join(__dirname, 'yt_metadata_example_scheduled_livestream.json'), { encoding: 'utf8' }));

describe("parsePubSubHubbub", () => {
  it("should return a JSON object", () => {
    let output = parsePubSubHubbub(payload);
    assert.isObject(output);
  }),
  it('returned an object contains title, video id, and channel id', () => {
    let output = parsePubSubHubbub(payload);
    assert.exists(output['feed']['entry']['title'])
    assert.exists(output['feed']['entry']['yt:videoId'])
    assert.exists(output['feed']['entry']['yt:channelId'])
  })
});

describe("getYTMetadata", () => {
  it("should throw an error when an invalid video id is inputted", () => {
    assert.throws(() => { getYTMetadata('asdf') }, Error);
  }),
  it("should return a valid object when video id is valid", () => {
    getYTMetadata('bdYnZyf8pro').then((jsonobj) => {
      assert.isObject(jsonobj);
    });
  }),
  it("returned promise object should contain video details", () => {
    // TODO: Research if casting jsonobj to any is a typescript problem.
    getYTMetadata('u4XQvAwgU0A').then((jsonobj: any) => {
      assert.exists(jsonobj['player_response']['responseContext']['videoDetails']['title']);
    });
  }),
  it("live streamed videos should contain liveBroadcast attributes", () => {
    // TODO: Research if casting jsonobj to any is a typescript problem.
    getYTMetadata('u4XQvAwgU0A').then((jsonobj: any) => {
      assert.exists(jsonobj['player_response']['responseContext']['microformat']['playerMicroformatRenderer']['liveBroadcastDetails']['startTimestamp']);
    });
  })

});

describe("getScheduledStreamData", () => {
  it("returned an object", () => {
    let retdata = getScheduledStreamData(payloadScheduledStream);
    assert.isObject(retdata);
  })
});

describe("getBestThumbnailURL", () => {
  it("returned a string", () => {
    let retdata = getBestThumbnailURL(payloadScheduledStream);
    assert.isString(retdata);
  });

  it("returns a valid URL", () => {
    let retdata = getBestThumbnailURL(payloadScheduledStream);
    let url;
    try {
      url = new URL(retdata)
    } catch {
      console.log("Error: Unable to construct valid URL");
    }
    assert.instanceOf(url,URL, "The thumbnail URL is a valid URL")
  });
});
