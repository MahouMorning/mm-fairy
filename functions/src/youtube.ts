// Youtube.ts
//
// Functions to interact with YouTube-kun

import { XMLParser } from "fast-xml-parser";
import * as ytdl from 'ytdl-core';

// Converts the payloads from the PubSubHubbub into JSON.
export function parsePubSubHubbub(xml: string) {
  const parser = new XMLParser();
  let jsonobj = parser.parse(xml);
  return jsonobj
}

// Retrieves the data object for a given YouTube Video ID.
export function getYTMetadata(vid: string) {
  if (!ytdl.validateID(vid)) {
    throw new Error('Invalid Youtube ID found');
  }
  // getBasicInfo is an async function
  let jsonpromise = ytdl.getBasicInfo('https://youtu.be/'+vid);
  return jsonpromise;
}

// TODO: Resubscribe to pubsubhubbub
