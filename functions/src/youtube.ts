// Youtube.ts
//
// Functions to interact with YouTube-kun

import {XMLParser} from "fast-xml-parser";
import * as ytdl from "ytdl-core";
import * as config from "./config";
import {YtVidMetadata, ThumbnailElement} from "./yt_vid_metadata";

/**
 * export parsePubSubHubbub() Converts the payloads from the PubSubHubBub into JSON.
 *
 * @param {string} xml: The string representation of the XML data
 *
 * @return {any} object: The JS Object containing the converted XML data
 */
export function parsePubSubHubbub(xml: string) {
  const parser = new XMLParser();
  const jsonobj = parser.parse(xml);
  return jsonobj;
}

/**
 * export async getYTMetadata() Retrieves the data object for a given Youtube Video ID.
 *
 * @param {string} vid: the video ID for YouTube
 *
 * @return {Promise} jsonpromise: Video metadata
 */
export async function getYTMetadata(vid: string) {
  if (!ytdl.validateID(vid)) {
    throw new Error("Invalid Youtube ID found");
  } else {
    // getBasicInfo is an async function
    // TODO: Test: Figure out how to mock this when unit testing.
    let jsonpromise : YtVidMetadata;
    try {
      jsonpromise = await ytdl.getBasicInfo("https://youtu.be/"+vid);
    } catch (error:Error) {
      console.log("Error being thrown!: " + vid);
      console.error(error);
      throw new Error(error.message);
    }
    return jsonpromise;
  }
}

// TODO: Write function to resubscribe to pubsubhubbub function
/**
 * exportresubscribe() Resubscribes to PubSubHubBub
 *
 * @param {string} topicURL?: A string of the topicURL that PubSubHubBub is listening to
 *
 * @return {void}
 */
export function resubscribe(topicURL?: string) {
  if (topicURL !== undefined && topicURL.length <= 10) {
    // Default behavior. Resubscribe all in config if less than one day.
    config.youtube.topicURLs.forEach( (topicItem : string) => {
      if (isExpiringSoon(topicItem)) {
        // PubSubHubbub.subscribe(topicItem, config.youtube.hubURL, config.youtube.callbackURL);
        console.log("topic [" + topicItem + "] has been resubscribed.");
      } else {
        console.log("topic [" + topicItem + "] is not up for resubscription yet.");
      }
    });
  } else {
    // Overridden bahavior. Resubscribe this topicURL.
  //  PubSubHubbub.subscribe(topicURL, config.youtube.hubURL, config.youtube.callbackURL);
    console.log("Overriden behavior stub");
  }
}

// TODO: Write function to check if pubsubhubbub subscription is expiring soon
/**
 * exportisExpiringSoon() Determines if PubSubHubBub subscription is expiring soon
 *
 * @param {string} channelId: The ID of the channel
 * @param {number} expireThreshold?: The number of hours before soon is achieved
 *
 * @return {boolean}
 */
export function isExpiringSoon(channelId: string, expireThreshold?: number) {
  console.log("Channel ID: " + channelId);
  console.log("Expiration Threshold: " + expireThreshold);
  return false;
}

// Function to get best thumbnail
/**
 * exportgetBestThumbnailURL() Determines highest resolution thumbnail from passed in metadata
 *
 * @param {Object} jsonobj: The returned object from getYTMetadata()
 *
 * @return {string}
 */
export function getBestThumbnailURL(jsonobj: YtVidMetadata) {
  const thumbobj = jsonobj["videoDetails"]["thumbnails"];
  const sizearray = thumbobj.map( (obj : ThumbnailElement) => {
    return obj["height"];
  } );
  const maxresolution = Math.max(...sizearray);
  const maxresobj = sizearray.indexOf(maxresolution);
  return thumbobj[maxresobj]["url"];
}

// Write function to parse out important description
/**
 * exportgetDescription() Retrieves video description for snippet
 *
 * @param {Object} jsonobj: The returned object from getYTMetadata()
 *
 * @return {string}
 */
export function getDescription(jsonobj: YtVidMetadata) {
  return jsonobj["player_response"]["microformat"]["playerMicroformatRenderer"]["description"]["simpleText"]
      .split("\n\n\n\n")[0];
}
// Write function to get video title, description, go-live time.
/**
 * exportgetScheduledStreamData() Return the object used for event generation
 *
 * @param {Object} jsonobj: The returned object from getYTMetadata()
 *
 * @return {Object}
 */
export function getScheduledStreamData(jsonobj: YtVidMetadata) {
  return {
    "title": jsonobj["player_response"]["videoDetails"]["title"],
    "description": getDescription(jsonobj),
    // eslint-disable-next-line
    "startTimestamp": jsonobj["player_response"]["microformat"]["playerMicroformatRenderer"]["liveBroadcastDetails"]["startTimestamp"],
    "url": "https://youtu.be/" + jsonobj["player_response"]["videoDetails"]["videoId"],
    "thumbnail": getBestThumbnailURL(jsonobj),
  };
}

// Discord
// TODO: Write function to create a scheduled event
