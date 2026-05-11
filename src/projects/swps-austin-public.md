---
title: SWPS Experience Recording
tldr: Live event production at Austin Public Studio 1 — seven cameras mapped, three recording decks running simultaneously in 4K, one robotic camera operated by hand in real time. First time on Blackmagic hardware. The footage came out clean.
slug: swps-austin-public
datePublish: 2026-04-15
status: complete
category: consulting
location: Austin, Texas
industry: Public Media
tags:
  - Live Event Production
  - Audio Engineering
  - Media Production
  - Civic Infrastructure

impact: >-
  Before this project, the Inventor had no professionally produced video record of the SWPS experience as a live event. After it: 4K multi-camera footage of attendees engaging with the material, clean interview captures of participant responses, and footage presenting the concept to a real audience — all recorded redundantly across three simultaneous output channels.

specs:
  - label: Timeline
    value: February – April 2026
  - label: Venue
    value: Austin Public Studio 1 — Austin Film Society
  - label: Production
    value: 7 cameras · 3 decks · 4K ProRes 422
  - label: Crew
    value: 4 

theory:
  name: Hayek — Tacit Knowledge Transfer
  desc: >-
    The Blackmagic hardware was new. The mental model was not. A decade managing a live Twitch broadcast in OBS — scene switching, multi-source video input, audio mixing, simultaneous recording outputs — is the same architecture as a hardware production suite. Scene switching is switcher operation. Audio source management is a soundboard. Recording to multiple outputs is recording to multiple decks. What changes in hardware is the physical feedback: you feel the faders, you see the tally lights, you hear the room. The mental model transfers. The hands learn the new interface. This is Hayek's point about tacit knowledge — it is not stored in documentation or training manuals. It lives in the practitioner. The labels change. The logic does not.

sidebar:
  - label: What this demonstrates
    items:
      - Studio Crew Certification — Austin Public prerequisite completed February 2026; required before any producer can book studio time
      - Multi-camera live event production — 7-camera map, shot routing plan across three simultaneous recording outputs
      - Live audio mixing — three microphones, active monitoring and fader management on Allen & Heath SQ-7 throughout the event
      - Real-time robocam operation — physical joystick control of Panasonic PTZ camera following a live, moving speaker
      - Adaptation under live conditions — entrance table reframe mid-event, unscripted speaker tracking, audio isolation during interviews
      - Hardware-first operation on unfamiliar equipment — Blackmagic URSA G2, AJA Ki Pro Ultra, Allen & Heath SQ-7, production switcher, DMX lighting grid
  - label: Tools
    items:
      - Blackmagic URSA Broadcast G2 (×5)
      - Panasonic PTZ robocam (×2) · AW-RP controller
      - AJA Ki Pro Ultra 12G recording decks (×3)
      - Allen & Heath SQ-7 audio board
      - ETC Ion Xe DMX lighting console
      - Production switcher

links:
  - label: Austin Public
    desc: The facility worth knowing about
    url: https://www.austinfilm.org/austin-public/about-austin-public/
    type: website

next_project:
  name: Warehouse Operations Program — Central Texas Food Bank
  slug: ctfb-warehouse-operations

order: 2

---

## About Austin Public

Austin Public is a non-exclusive, content-neutral media studio operated by the Austin Film Society. It offers low- and no-cost training, equipment, facilities, and distribution to any Austin resident or nonprofit that wants to make something.

It runs cable channels 10, 11, and 16. Channel 10 is the longest continually running public access station in the country. Productions broadcast and stream simultaneously, with video-on-demand and over-the-top distribution.

Studio 1, where this event was produced, is a 1,200 sq. ft. space with five Blackmagic URSA Broadcast G2 6K cameras on pedestals with teleprompters, two wall-mounted Panasonic PTZ robotic cameras, a fully equipped 4K control room with production switcher, Allen & Heath SQ-7 audio board, AJA Ki Pro Ultra 12G recording decks, DMX-controlled LED lighting grid, a 20×10 ft. green cyclorama wall, and a 4K projector with a 16×9 retractable screen.

This infrastructure is available to the public. That matters.

## Why This Project Exists

The Producer needed a crew-certified operator to produce a live event at Austin Public for her client. Austin Public requires producers to hold a Studio Crew Certification before booking studio time. I got certified. We booked Studio 1.

## What the Event Was

The SWPS (Shared Wisdom Patterns Snapshots) is a thinking tool. Participants work through a structured choose-and-rank activity designed to engage both analytical and intuitive reasoning. The goal is to make habitual patterns of thinking visible so they can be examined.

The event ran from 6:30 to 8:30pm:

| Time | What Was Happening |
| ------ | ------------------- |
| 6:30–7:00 | Producer welcomes attendees; SWPS Series packets distributed from welcome table |
| 7:00 | Producer introduces Inventor to the room |
| 7:05–7:15 | Inventor speaks: origin of SWPS, why he built it, how it has helped people over the years |
| 7:15 | Producer introduces the interview station |
| 7:15–8:00 | Attendees complete activity packets; rotate to interview station for a recorded response |
| 7:30–8:15 | Testimonials collected for additional raffle entries |
| 8:15–8:30 | Raffle, final conversations, wrap |

## Four Days

**February 6 — Certification.** Studio Crew certification earned at Austin Public. The prerequisite for everything else — no certification, no project.

**March 5 — Planning.** Shot plan, camera assignments, and run-of-show drafted. Equipment inventory confirmed. Tasks assigned across crew.

**March 11 — Rehearsal.** Set up the talking head station, positioned cameras, tested mics, tested video playback with and without audio. The flagged unknown: directing Inventor's speech and where he would stand. It stayed a variable.

**April 15 — Live Day.** 4:30pm load-in. Lights set, cameras positioned, control room configured. Mics on by 6:00pm. Doors at 6:30. Equipment return complete by 9:15pm.

## The Camera Map

Seven cameras. Six active. One intentionally left unused.

| Camera | Assignment | Type |
| -------- | ----------- | ------ |
| Cam 1 | Entrance table | Blackmagic URSA Broadcast G2 |
| Cam 2 | N/A — not used | Blackmagic URSA Broadcast G2 |
| Cam 3 | Interview / talking head station | Blackmagic URSA Broadcast G2 |
| Cam 4 | Speaker, wide | Blackmagic URSA Broadcast G2 |
| Cam 5 | Speaker, close | Blackmagic URSA Broadcast G2 |
| Cam 6 | Room wide from back (Robo) | Panasonic PTZ |
| Cam 7 | Room to speaker with participants (Robo) | Panasonic PTZ |

All cameras recorded through three AJA Ki Pro Ultra 12G decks at 3840×2160p (4K) 59.94fps in ProRes 422:

| Deck | Channel | Feed |
| ------ | --------- | ------ |
| DDR 101 | AUX 1 | Switched program — entrance table (first hour), then room wide |
| DDR 102 | AUX 2 | Locked on interview / talking head station |
| DDR 103 | PROGRAM | Main program output |

**AUX 1** carried Cam 1 for the first hour, then switched to Cam 6 for a wide room shot after Will's speech. **AUX 2** was locked on Cam 3 for the duration. Robocam alternated between speaker closeup, audience, and front row.

## Plan vs. Room

**The entrance table camera** was framed for sitting behind the table. After the first two people arrived, I ran from the control room to reframe. The camera was catching walk-ins from the shoulders down. A person standing at a table and a person sitting behind it are not at the same height. Fixed in two minutes. Easy problem once you understand the story you are trying to capture.

**The Inventor moved. So did the audience.** He did not stay in one place — and nobody had rehearsed the attendees either. Once the event was live, I took over the Panasonic PTZ robocam via the AW-RP controller and followed the action manually: panning, tracking, zooming out to pull audience reaction shots when the Inventor stepped toward the room. Physical control over a robotic arm gives smooth, continuous movement. The result was more dynamic than any locked-down frame could have been.

**The audio board** required active monitoring throughout. Three microphones on one combined track, a room full of people talking. During the interview segments, isolating the interviewee meant listening to the room and moving faders on the SQ-7 to push down whatever else was happening around them.

## Hardware First Time, Concepts Never

The Blackmagic URSA Broadcast G2 cameras were new hardware. The Allen & Heath SQ-7, the AJA recording decks, the production switcher — all unfamiliar by brand.

None of it was unfamiliar by function.

A decade managing a live Twitch broadcast in OBS covers scene switching, multi-source video input, audio mixing, and recording to multiple outputs simultaneously. That is the same architecture as a hardware production suite. Scene switching is switcher operation. Audio source management is a soundboard. Recording to multiple output files is recording to multiple decks.

What changes in hardware is the physical feedback — you feel the faders, you see the tally lights, you hear the room. The SQ-7 has the same signal routing logic as OBS's audio mixer; it is physical faders instead of sliders on screen. The AJA Ki Pro decks record to media the same way OBS records to disk. The mental model transfers. The hands learn the new interface.

## About Austin Public (and Why It Should Keep Existing)

Public access media infrastructure is rare. The equipment in Studio 1 alone would cost tens of thousands of dollars to rent commercially. Austin Public makes it available to anyone who completes the training. The certification process is real — it ensures operators know what they are doing before they walk into a professional studio. It is not a barrier. It is a standard.

If you are in Austin and you have a project that could use professional media production, Austin Public is worth knowing about. If you are a nonprofit or community organization, it was built specifically to serve you.
