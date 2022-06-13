import {REST} from "@discordjs/rest";
import {Routes, RESTPostAPIGuildScheduledEventJSONBody} from "discord-api-types/v10";
import * as config from "./config";


// Invite Link: https://discord.com/api/oauth2/authorize?client_id=932915205464281129&permissions=8589954112&scope=bot%20applications.commands
/**
 * testCreateEvent() Test function to create an event
 *
 * @param {string} token: The Discord Bot Token used for auth
 *
 * @return {Promise}
 */
export async function testCreateEvent(token: string) {
  const rest = new REST({version: "10"}).setToken(token);
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
  } catch (error) {
    console.error(error);
  }
  return response;
}
