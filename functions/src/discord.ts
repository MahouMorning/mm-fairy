import {REST} from "@discordjs/rest";
import {Routes, RESTPostAPIGuildScheduledEventJSONBody} from "discord-api-types/v10";
import * as config from "./config";
import * as youtube from "./youtube";


// Invite Link: https://discord.com/api/oauth2/authorize?client_id=932915205464281129&permissions=8589954112&scope=bot%20applications.commands
/**
 * testCreateEvent() Test function to create an event
 *
 * @param {string} token: The Discord Bot Token used for auth
 *
 * @return {Promise}
 */
export async function testCreateEvent(token?: string) {
  const curtoken = token ? token :
      process.env.DISCORD_BOT_TOKEN ? process.env.DISCORD_BOT_TOKEN : "";
  const rest = new REST({version: "10"}).setToken(curtoken);
  const startDate = new Date();
  startDate.setHours(startDate.getHours() + 1);
  startDate.setMinutes(0);
  startDate.setSeconds(0);
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 1);
  const options : RESTPostAPIGuildScheduledEventJSONBody = {
    "name": "Test Event",
    "scheduled_start_time": startDate.toISOString(),
    "scheduled_end_time": endDate.toISOString(),
    "privacy_level": 2,
    "entity_type": 3, // External Event
    "entity_metadata": {"location": "TBA"},
  };
  let response;
  try {
    response = await rest.post(Routes.guildScheduledEvents(config.discord.guildID), {
      body: options,
    });
  } catch (error:any) {
    console.error(error);
    throw Error(error.message);
  }
  return response;
}

/**
 * export asynccreateExternalEvent() Create External Discord Event
 *
 * @param {youtube.ytEventData} eventDetails: Event Data from youtube.getScheduledStreamData()
 *
 * @return {Promise}
 */
export async function createExternalEvent(eventDetails: youtube.ytEventData) {
  if (process.env.DISCORD_BOT_TOKEN === undefined) {
    throw Error("Token not available");
  }
  const rest = new REST({version: "10"}).setToken(process.env.DISCORD_BOT_TOKEN);
  const curDate = new Date();
  const startDate = new Date(eventDetails.startTimestamp);
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 2);
  if (Math.abs(curDate.getTime() - startDate.getTime()) < 60) {
    // If start time is within a minute of the current time,
    // add additional buffer to ensure start is in the future.
    startDate.setMinutes(startDate.getMinutes() + 5);
  }
  // TODO: Handle Thumbnail grabbing from URL
  const options : RESTPostAPIGuildScheduledEventJSONBody = {
    "name": eventDetails.title,
    "scheduled_start_time": startDate.toISOString(),
    "scheduled_end_time": endDate.toISOString(),
    "privacy_level": 2,
    "entity_type": 3, // External Event
    "entity_metadata": {"location": eventDetails.url},
  };
  let response;
  try {
    response = await rest.post(Routes.guildScheduledEvents(config.discord.guildID), {
      body: options,
    });
  } catch (error:any) {
    console.error(error);
    throw Error(error.message);
  }
  return response;
}
