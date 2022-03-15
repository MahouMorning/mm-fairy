import {parsePubSubHubbub} from "../src/youtube";
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

