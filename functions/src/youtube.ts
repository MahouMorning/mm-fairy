// Youtube.ts
//
// Functions to interact with YouTube-kun

import {XMLParser} from "fast-xml-parser";
import * as ytdl from "ytdl-core";
import * as config from "./config";
import {ThumbnailElement} from "./yt_vid_metadata";
import fetch from 'node-fetch';

/**
 * export parsePubSubHubbub() Converts the payloads from the PubSubHubBub into JSON.
 *
 * @param {string} xml: The string representation of the XML data
 *
 * @return {any} object: The JS Object containing the converted XML data
 */
export function parsePubSubHubbub(xml: string, html = false) {

  const options = (html == false) ?
  {
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
  } :
  {
    ignoreAttributes: false,
    preserveOrder: true,
    unpairedTags: ["hr", "br", "link", "meta"],
    stopNodes : [ "*.pre", "*.script"],
    processEntities: true,
    htmlEntities: true
  };
  const parser = new XMLParser(options);
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
 * export async resubscribe() Resubscribes to PubSubHubBub
 *
 * @param {string} topicURL?: A string of the topicURL that PubSubHubBub is listening to
 *
 * @return {void}
 */
export async function resubscribe(topicURL?: string) {
  if (topicURL !== undefined && topicURL.length <= 10) {
    // Default behavior. Resubscribe all in config if less than one day.
//    config.youtube.channelInfo.forEach( (channel : {"oshi_mark": string, "first_name": string, "last_name": string, "foreign_name": string, "channel_id": string, "topic": string}) => {
//      if (await isExpiringSoon(channel.topic)) {
//        // PubSubHubbub.subscribe(topicItem, config.youtube.hubURL, config.youtube.callbackURL);
//        console.log("topic [" + channel.channel_id + "] has been resubscribed.");
//      } else {
//        console.log("topic [" + channel.channel_id + "] is not up for resubscription yet.");
//      }
//    });
  } else {
    // Overridden bahavior. Resubscribe this topicURL.
  //  PubSubHubbub.subscribe(topicURL, config.youtube.hubURL, config.youtube.callbackURL);
    console.log("Overriden behavior stub");
  }
}

// TODO: Write function to check if pubsubhubbub subscription is expiring soon
/**
 * export async isExpiringSoon() Determines if PubSubHubBub subscription is expiring soon
 *
 * @param {string} channelId: The ID of the channel
 * @param {number} expireThreshold: The number of hours before "soon" is achieved. Defaults to 24.
 *
 * @return {boolean}
 */
export async function isExpiringSoon(channelId: string, expireThreshold = 24) {
  console.log("Channel ID: " + channelId);
  console.log("Expiration Threshold: " + expireThreshold);
  const filtered = config.youtube.channelInfo.filter(function(item) {
    return item.channel_id === channelId;
  });
  if (filtered.length > 0) {
    const subinfo = await getPubSubHubBubSubscriptionInfo(filtered[0].topic);
    const timeDiff = new Date(subinfo.expirationTime).getTime() - new Date().getTime();
    console.log("TimeDiff between expiration and now: " + timeDiff + "ms");
    if (timeDiff < (expireThreshold * 3600 * 1000)) {
      return true;
    }
  }
  return false;
}

export async function getPubSubHubBubSubscriptionInfo(topicURL: string, secret = "") {
  const endpointURL = new URL(config.youtube.hubURL + "/subscription-details");
  endpointURL.searchParams.append("hub.callback", config.youtube.callbackURL);
  endpointURL.searchParams.append("hub.topic", topicURL);
  endpointURL.searchParams.append("hub.secret", secret);
  const response = await fetch(endpointURL.href);
  const retobj = parsePubSubHubbub(await response.text(), true);
  const parsedobj = {
    "topicURL": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][1]["p"][0]["#text"],
    "callbackURL": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][2]["dl"][1]["dd"][0]["#text"],
    "state": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][2]["dl"][3]["dd"][0]["#text"],
    "lastSuccessfulVerification": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][2]["dl"][5]["dd"][0]["#text"],
    "expirationTime": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][2]["dl"][7]["dd"][0]["#text"],
    "lastSubscribeRequest": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][2]["dl"][9]["dd"][0]["#text"],
    "lastUnsubscribeRequest": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][2]["dl"][11]["dd"][0]["#text"],
    "lastVerificationError": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][2]["dl"][13]["dd"][0]["#text"].replace(/(\r\n|\n|\r|\s\s)/gm, ""),
    "lastDeliveryError": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][2]["dl"][15]["dd"][0]["#text"].replace(/(\r\n|\n|\r|\s\s)/gm, ""),
    "aggregateStatistics": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][2]["dl"][17]["dd"][0]["#text"].replace(/(\r\n|\n|\r|\s\s)/gm, ""),
    "lastContentReceived": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][4]["dl"][1]["dd"][0]["#text"],
    "lastContentDelivered": retobj[0]["html"][0]["head"][3]["body"][0]["div"][0]["div"][0]["div"][4]["dl"][3]["dd"][0]["#text"],
  };
  return parsedobj;
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
  const titleComposition = [getChannelIdentifier(jsonobj["player_response"]["videoDetails"]["channelId"]), "-", jsonobj["player_response"]["videoDetails"]["title"]];
  return {
    "title": titleComposition.join(" "),
    "description": getDescription(jsonobj),
    // eslint-disable-next-line
    "startTimestamp": startDate,
    "url": "https://youtu.be/" + jsonobj["player_response"]["videoDetails"]["videoId"],
    "thumbnail": getBestThumbnailURL(jsonobj),
  };
}

