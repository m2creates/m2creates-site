---
title: The Ministry of Architecture (formerly Archinia)
tldr: Recovered a Drupal site from the Wayback Machine after it went offline, then used the rebuild as a forcing function to consolidate seven fragmented architecture properties into one static, accessible platform — WCAG AA compliant, no database dependencies, with earthship research and Acoma education materials preserved and publicly available.
slug: archinia
date: Last Modified
datePublish: 2018-01-17
status: complete
category: consulting
tags:
  - HTML
  - CSS
  - JavaScript
  - jQuery
  - PHP
  - GitHub Pages
  - Cloudflare
  - Accessibility
  - Content Strategy
  - Information Architecture
  - Data Migration
 
impact: >-
  Recovered the primary Archinia site from the Wayback Machine after Drupal took it offline, then used the rebuild as a forcing function to consolidate seven separate properties — Archinia, Architecture 4 Everybody, and five Blogspot collections — into a single static site under The Ministry of Architecture umbrella. Eliminated database dependencies by moving to GitHub Pages, removing the infrastructure vulnerability that caused the original failure. Achieved WCAG AA accessibility standards with a design constraint built around macular degeneration. Preserved the Acoma Architecture Education Portal (8-lesson curriculum + teacher's guide, spun off from the award-screened documentary Emergence: Sky City Cultural Center) so its teaching materials remain usable. Published the full site source on GitHub to enable ongoing community contribution toward AAA compliance and complete alt text transcription of the portfolio archive. Continued maintenance and feature development through at least 2021.
 
specs:
  - label: Sites consolidated
    value: "7 → 1 (2 Drupal + 5 Blogger properties)"
  - label: From
    value: Drupal (recovered via Wayback Machine)
  - label: To
    value: GitHub Pages + Cloudflare (static, no database)
  - label: Launched
    value: January 2018
 
theory:
  name: Ostrom — Commons Preservation
  desc: >-
    The Drupal failure made visible something that had been accumulating for years: seven separate platforms, each hosting a piece of Rachel's practice, none of them built to last. The earthship research, Acoma teaching materials, and architectural practice documentation existed in a fragmented informal commons — valuable to the people who knew where to find it, invisible to everyone else, and at genuine risk of disappearing as platforms aged and maintenance lapsed. Five Blogspot properties, one Drupal site, and one standalone education site are not a knowledge management strategy — they are knowledge at risk. The Wayback Machine recovery was the proof of concept for what happens when infrastructure fails and no one is stewarding the whole. The merger and the move to static hosting is an institutional design response: consolidate dispersed knowledge into a single maintained structure, remove the database dependencies that created the vulnerability in the first place, and publish the source publicly so improvement is a shared responsibility rather than a single maintainer's burden.
 
sidebar:
  - label: What this demonstrates
    items:
      - Disaster recovery — primary site rebuilt from Wayback Machine archive after Drupal failure
      - Custom migration pipeline — Blogger XML exports converted to Markdown via blog2md, images downloaded and relinked via custom PHP script, manual formatting pass
      - Content consolidation and information architecture across seven source properties with overlapping but distinct audiences
      - "Pre-production work on a documentary (image permissions for Emergence: Sky City Cultural Center) extending into infrastructure ownership of the resulting educational resource"
      - Accessibility-first design with a named user's specific condition (macular degeneration) as the primary design constraint
      - Long-horizon preservation thinking — open-source publication for community continuation toward AAA
  - label: Tools
    items:
      - HTML5 + CSS + JavaScript + jQuery
      - PHP (custom image migration script)
      - blog2md (Blogger XML → Markdown conversion)
      - GitHub Pages (hosting)
      - Cloudflare (CDN + performance)
      - Pixelarity base templates (Relativity + Cascade / Telemetry / Vortex — licensed)
 
links:
  - label: Website
    desc: See it live
    url: https://theministryofarchitecture.com
    type: website
  - label: GitHub
    desc: Public source repository
    url: https://github.com/Archinia/archinia-com
    type: github

image:
  url: /images/portfolio-archinia.png
  alt: The Ministry of Architecture website displayed across desktop, tablet, and mobile screens, showing the homepage portfolio grid.
  credit:
 
next_project:
  name: Congressional Hunger Center
  slug: work/congressional-hunger-center
---

The project started with a Drupal site going offline.

Archinia — Rachel's architectural practice site — had been running on Drupal. When it went down, the content went with it. The recovery method was the Wayback Machine: pulling cached pages out of the Internet Archive one by one, stripping them back into usable form, and rebuilding the site from what had been preserved.

Once it was back up, the question became obvious: what happens next time? Drupal requires a database, active maintenance, and version management. A site that goes down and has to be recovered from an archive is a site whose infrastructure was working against it.

The answer was to go static — and while rebuilding for that, to do the rest of the work that had been accumulating. Rachel's practice had spread across seven separate properties: Archinia, Architecture 4 Everybody, and five Blogspot collections that had accumulated over years of publishing. Each one was technically alive, but none of them were connected, and none of them were built to outlast the platform hosting them. The Drupal failure had just demonstrated exactly what that risk looked like in practice.

One of those properties was more than a blog. Architecture 4 Everybody housed the Acoma Architecture Education Portal — an 8-lesson curriculum built around *Emergence: Sky City Cultural Center*, a 33-minute documentary Rachel directed on the Haak'ume people of Acoma Pueblo and the design of their Sky City Cultural Center. The film screened at the Pueblo Film Festival, Toronto, the Chickasaw Cultural Center Film Festival, and others; the building it documents was named the Southwest's Best Cultural Attraction. The portal extended the documentary into structured lessons — cultural landscape, village evolution, building materials, passive solar design, ancestral connections to Chaco Canyon — plus a teacher's guide, funded by Archinia and the New Mexico Resiliency Alliance. Teachers were using it. My involvement predated the website work: I handled image permissions for the documentary itself, which meant I already understood what was in the archive and what needed to survive intact when Architecture 4 Everybody was folded into the consolidation.

There was one more constraint that became the organizing principle for the design: Rachel has macular degeneration. A site designed only for how her eyes work today would fail her as her vision changes. High contrast ratios, no reliance on color alone to convey meaning, large text defaults, alt text on every image — not as an afterthought, as the first constraint.

## The Migration Pipeline

Getting five Blogspot properties into the static site wasn't a copy-paste job. Blogger exports XML. The static site needed Markdown. The gap required a pipeline.

The posts ran through `blog2md` to convert Blogger's XML exports to Markdown files. That got the content into the right format, but Blogger's image URLs are external references pointing back to Google's CDN — which meant every image in every converted post was still dependent on Blogger's infrastructure staying alive, defeating the purpose of the migration.

The `images.php` script handled that. It parses a CSV of image links from the Blogger exports, reads Blogger's URL structure (a 9-part path), downloads the full-resolution `s1600` versions via curl into a local `/images/blog/legacy/` directory, and rewrites every image reference across all the converted Markdown files to point to the local copy instead. Broken linked images, stripped linked image syntax. Straightforward, but it had to be written.

Then the manual pass: Markdown formatting that the automated conversion didn't catch, post by post. It was a lot. It was also the part where you actually read everything and make decisions about what's worth keeping.

The whole pipeline — XML export, automated conversion, image download and relink, manual cleanup — is preserved in the repository. Anyone migrating off Blogger to a static site can use it.

The four properties were merged into a single static site under The Ministry of Architecture, built on GitHub Pages with Cloudflare in front of it. No database. No CMS requiring active version maintenance. No single point of failure that takes the content offline if something lapses.

The information architecture surfaces the full scope of the practice in one place: portfolio work in preservation, sustainability, and education; the earthship research; the documentary film projects; and the Acoma Architecture Education Portal as a first-class section of the site — eight lessons, a teacher's guide, and the video curriculum from *Emergence*, all reachable from a single maintained URL. The Acoma content was migrated intact from wherever it had been living and is still findable and usable by educators today.

WCAG AA standards were the minimum target. The site launched meeting AA compliance across contrast, text sizing, and semantic structure. AAA is the ongoing goal, which is why the full site source is public on GitHub: the alt text transcription work for every photograph in the portfolio archive is a project larger than one person, and making it open means anyone who wants to contribute can.

## Operational Impact

What could this organization do after this that it couldn't do before?

Rachel can send one link. One URL that represents the full scope of the practice, readable by people finding it for the first time, findable by search engines indexing a single domain, and maintainable without juggling four separate platforms.

The Acoma education materials are no longer one abandoned blog away from disappearing. They're on GitHub Pages with Cloudflare in front of it — infrastructure that doesn't require active maintenance to stay up.

And the site is designed for the person who built everything in it — including the version of that person who may one day rely entirely on screen readers to navigate her own work. The alt text project is unfinished by design: it's an open invitation on GitHub, not a closed to-do list.

---

*Content strategy, wireframing, information architecture, web design, and accessibility implementation. Client: Rachel Prinz / The Ministry of Architecture, Santa Fe, NM.*
