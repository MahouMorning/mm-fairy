import {parsePubSubHubbub, getYTMetadata, getBestThumbnailURL, getScheduledStreamData, getDescription} from "../src/youtube";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import "mocha";
import * as fs from "fs";
import * as path from "path";

chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;

const payload = fs.readFileSync(path.join(__dirname, "yt_xml_example_newvideo.xml"), {encoding: "utf8"});
const payloadScheduledStream = JSON.parse(fs.readFileSync(path.join(__dirname, "yt_metadata_example_scheduled_livestream.json"), {encoding: "utf8"}));

describe("parsePubSubHubbub", () => {
  it("should return a JSON object", () => {
    const output = parsePubSubHubbub(payload);
    assert.isObject(output);
  }),
  it("returned an object contains title, video id, and channel id", () => {
    const output = parsePubSubHubbub(payload);
    assert.exists(output["feed"]["entry"]["title"]);
    assert.exists(output["feed"]["entry"]["yt:videoId"]);
    assert.exists(output["feed"]["entry"]["yt:channelId"]);
  });
});

describe("getYTMetadata", () => {
  it("should throw an error when an invalid video id is inputted", async function() {
    const data = getYTMetadata("asdf");
    expect(data).to.eventually.be.rejectedWith("Invalid Youtube ID found");
  }),
  it("should return a valid object when video id is valid", () => {
    getYTMetadata("bdYnZyf8pro").then((jsonobj) => {
      assert.isObject(jsonobj);
    });
  }),
  it("returned promise object should contain video details", () => {
    // TODO: Research if casting jsonobj to any is a typescript problem.
    getYTMetadata("u4XQvAwgU0A").then((jsonobj: any) => {
      assert.exists(jsonobj["player_response"]["responseContext"]["videoDetails"]["title"]);
    });
  }),
  it("live streamed videos should contain liveBroadcast attributes", () => {
    // TODO: Research if casting jsonobj to any is a typescript problem.
    getYTMetadata("u4XQvAwgU0A").then((jsonobj: any) => {
      assert.exists(jsonobj["player_response"]["responseContext"]["microformat"]["playerMicroformatRenderer"]["liveBroadcastDetails"]["startTimestamp"]);
    });
  });
});

describe("getScheduledStreamData", () => {
  it("returned an object", () => {
    const retdata = getScheduledStreamData(payloadScheduledStream);
    console.log(retdata);
    assert.isObject(retdata);
  });
  it("returned object contains a non-empty title string", () => {
    const retdata = getScheduledStreamData(payloadScheduledStream);
    assert.isString(retdata["title"]);
    assert.isNotEmpty(retdata["title"]);
  });
  it("returned object contains a non-empty description string", () => {
    const retdata = getScheduledStreamData(payloadScheduledStream);
    assert.isString(retdata["description"]);
    assert.isNotEmpty(retdata["description"]);
  });
  it("returned object contains a non-empty startTimestamp string", () => {
    const retdata = getScheduledStreamData(payloadScheduledStream);
    assert.isString(retdata["startTimestamp"]);
    assert.isNotEmpty(retdata["startTimestamp"]);
  });
  it("returned object contains a non-empty url string", () => {
    const retdata = getScheduledStreamData(payloadScheduledStream);
    assert.isString(retdata["url"]);
    assert.isNotEmpty(retdata["url"]);
  });
});

describe("getBestThumbnailURL", () => {
  it("returned a string", () => {
    const retdata = getBestThumbnailURL(payloadScheduledStream);
    assert.isString(retdata);
  });

  it("returns a valid URL", () => {
    const retdata = getBestThumbnailURL(payloadScheduledStream);
    let url;
    try {
      url = new URL(retdata);
    } catch {
      console.log("Error: Unable to construct valid URL");
    }
    assert.instanceOf(url, URL, "The thumbnail URL is a valid URL");
  });
});

describe("getDescription", () => {
  it("should return a string", () => {
    const retdata = getDescription(payloadScheduledStream);
    assert.isString(retdata);
  });
});
