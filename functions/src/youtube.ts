// Youtube.ts
//
// Functions to interact with YouTube-kun

import { XMLParser } from "fast-xml-parser";
import * as ytdl from 'ytdl-core';
import { PubSubHubbub } from "pubsubhubbub";
import * as config from './config';

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
  // TODO: Test: Figure out how to mock this when unit testing.
  let jsonpromise = ytdl.getBasicInfo('https://youtu.be/'+vid);
  return jsonpromise;
}

// TODO: Write function to resubscribe to pubsubhubbub function
export function resubscribe(topicURL?: string) {
  if (topicURL !== undefined && topicURL.length <= 10) {
    // Default behavior. Resubscribe all in config if less than one day.
    config.youtube.topicURLs.forEach( (topicItem : string) => {
      if (isExpiringSoon(topicItem)) {
        PubSubHubbub.subscribe(topicItem, config.youtube.hubURL, config.youtube.callbackURL);
        console.log("topic [" + topicItem + "] has been resubscribed.");
      } else {
        console.log("topic [" + topicItem + "] is not up for resubscription yet.");
      }
    });
  } else {
    // Overridden bahavior. Resubscribe this topicURL.
    PubSubHubbub.subscribe(topicURL, config.youtube.hubURL, config.youtube.callbackURL);
  }
}

// TODO: Write function to check if pubsubhubbub subscription is expiring soon
export function isExpiringSoon(channelId: string, expireThreshold?: number) {
  return false;
}

// Function to get best thumbnail
export function getBestThumbnailURL(jsonobj: any) {
  let thumbobj = jsonobj['videoDetails']['thumbnails'];
  let sizearray = thumbobj.map( (obj : any) => {return obj['height']} );
  let maxresolution = Math.max(...sizearray);
  let maxresobj = sizearray.indexOf(maxresolution);
  return thumbobj[maxresobj]['url'];
}

// Write function to parse out important description
export function getDescription(jsonobj: any) {
  return jsonobj['player_response']['microformat']['playerMicroformatRenderer']['description']['simpleText']?.split('\n\n\n\n')[0];
}
// Write function to get video title, description, go-live time.
export function getScheduledStreamData(jsonobj: any) {
  return {
    "title": jsonobj['player_response']['videoDetails']['title'],
    "description": getDescription(jsonobj),
    "startTimestamp": jsonobj['player_response']['microformat']['playerMicroformatRenderer']['liveBroadcastDetails']['startTimestamp'],
    "url": "https://youtu.be/" + jsonobj['player_response']['videoDetails']['videoId'],
    "thumbnail": getBestThumbnailURL(jsonobj)
  }
}

// Discord
// TODO: Write function to create a scheduled event
