import {parsePubSubHubbub, getYTMetadata} from "../src/youtube";
import {assert} from "chai";
import "mocha";
import * as fs from "fs";
import * as path from "path";

const payload = fs.readFileSync(path.join(__dirname, 'yt_xml_example.xml'), { encoding: 'utf8' });

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
    // TODO: Research of casting jsonobj to any is a typescript problem.
    getYTMetadata('bdYnZyf8pro').then((jsonobj: any) => {
      assert.exists(jsonobj['player_response']['responseContext']['videoDetails']['title']);
    });
  })
});
