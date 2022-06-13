// Youtube.ts
//
// Functions to interact with YouTube-kun

import {XMLParser} from "fast-xml-parser";
import * as ytdl from "ytdl-core";
import * as config from "./config";
import {ThumbnailElement} from "./yt_vid_metadata";

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
    let jsonpromise : ytdl.videoInfo;
    try {
      jsonpromise = await ytdl.getBasicInfo("https://youtu.be/"+vid);
      // eslint-disable-next-line
    } catch (error:any) {
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
    config.youtube.channelInfo.forEach( (channel : {"oshi_mark": string, "first_name": string, "last_name": string, "foreign_name": string, "channel_id": string, "topic": string}) => {
      if (isExpiringSoon(channel.topic)) {
        // PubSubHubbub.subscribe(topicItem, config.youtube.hubURL, config.youtube.callbackURL);
        console.log("topic [" + channel.channel_id + "] has been resubscribed.");
      } else {
        console.log("topic [" + channel.channel_id + "] is not up for resubscription yet.");
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
export function getBestThumbnailURL(jsonobj: ytdl.videoInfo) {
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
export function getDescription(jsonobj: ytdl.videoInfo) {
  return jsonobj["player_response"]["microformat"]["playerMicroformatRenderer"]["description"]["simpleText"]
      .split("\n\n\n\n")[0];
}

export interface ytEventData {
  title: string,
  description: string,
  startTimestamp: string,
  url: string
  thumbnail: string
}

/**
 * getChannelIdentifier() Builds channel identifier for event title
 *
 * @param {string} channelID: The channel ID being identified (Not the friendly name)
 *
 * @return {string}
 */
export function getChannelIdentifier(channelID: string) {
  const selectedChannel = config.youtube.channelInfo.filter(function(item) {
    return item.channel_id === channelID;
  });
  if (selectedChannel.length == 0) {
    console.log("getChannelIdentifier: Channel ID not found");
    return "";
  }
  return "["+selectedChannel[0].oshi_mark+" "+selectedChannel[0].first_name+"]";
}
// Write function to get video title, description, go-live time.
/**
 * exportgetScheduledStreamData() Return the object used for event generation
 *
 * @param {Object} jsonobj: The returned object from getYTMetadata()
 *
 * @return {ytEventData}
 */
export function getScheduledStreamData(jsonobj: ytdl.videoInfo): ytEventData {
  const startDate = jsonobj["player_response"]["microformat"]["playerMicroformatRenderer"]["liveBroadcastDetails"] != undefined ? jsonobj["player_response"]["microformat"]["playerMicroformatRenderer"]["liveBroadcastDetails"]?.["startTimestamp"] : "";
  const titleComposition = [getChannelIdentifier(jsonobj["player_response"]["videoDetails"]["channelId"]), jsonobj["player_response"]["videoDetails"]["title"]];
  return {
    "title": titleComposition.join(" "),
    "description": getDescription(jsonobj),
    // eslint-disable-next-line
    "startTimestamp": startDate,
    "url": "https://youtu.be/" + jsonobj["player_response"]["videoDetails"]["videoId"],
    "thumbnail": getBestThumbnailURL(jsonobj),
  };
}

