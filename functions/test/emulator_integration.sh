#!/usr/bin/env bash
curl -X POST http://localhost:5001/mm-fairy-20220202/us-central1/notifications -H "Content-Type: application/xml" -d @yt_xml_example.xml
