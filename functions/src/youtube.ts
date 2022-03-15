// Youtube.ts
//
// Functions to interact with YouTube-kun

import { XMLParser } from "fast-xml-parser";

export function parsePubSubBubHub(xml: string) {
  const parser = new XMLParser();
  let jsonobj = parser.parse(xml);
  return jsonobj
}
