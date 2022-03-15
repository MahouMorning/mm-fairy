import {parsePubSubBubHub} from "../src/youtube";
import {assert} from "chai";
import "mocha";
import * as fs from "fs";
import * as path from "path";

const payload = fs.readFileSync(path.join(__dirname, 'yt_xml_example.xml'), { encoding: 'utf8' });

describe("parsePubSubBubHub", () => {
  it("should return a JSON object", () => {
    let output = parsePubSubBubHub(payload);
    assert.isObject(output);
  })
});

