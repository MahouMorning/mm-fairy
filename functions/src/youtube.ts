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

// TODO: Write function to resubscribe to pubsubhubbub function
// TODO: Write function to check if pubsubhubbub subscription is expiring soon
// TODO: Write function to get best thumbnail
// TODO: Write function to parse out important description
// TODO: Write function to get video title, description, go-live time.
export function getScheduledStreamData(jsonobj: any) {
  return {
    "title": jsonobj['player_response']['responseContext']['videoDetails']['title'],
    "description": "",
    "startTimestamp": jsonobj['player_response']['responseContext']['microformat']['playerMicroformatRenderer']['liveBroadcastDetails']['startTimestamp']
    "url": "https://youtu.be/" + jsonobj['player_response']['responseContext']['videoDetails']['videoId']
  }
}

// Discord
// TODO: Write function to create a scheduled event
