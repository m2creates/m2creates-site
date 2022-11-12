---
title: Using Airtable as an Analytics Hub
tldr: >-
  How I built my analytics dashboard with Airtable for Twitter, LinkedIn, and more.
slug: airtable-analytics-hub
date: Last Modified
datePublish: 2021-08-07
blocks:
  - youtube
comments:
  twitter: 1423888996975972356
image:
  url: /images/airtable-hub-reports.jpg
  alt: Airtable Hub reports view
  credit: The Report table aggregates info from all the other tables.
seo:
  title: Using Airtable as an Analytics Hub
  desc: Let's create... an analytics dashboard for Twitter, LinkedIn, etc. with Airtable.
  image:
    url: /images/airtable-hub-reports.jpg
    alt: Analytics overview in Airtable Hub
tags:
  - analytics
uses:
  - airtable
---

Why? I honestly don't know (yet)... but it's cool! And built with Airtable of course.

One table aggregates the various network stats from a series of other tables. I started with tweets and LinkedIn posts.

Twitter is the easy one.

Download 2 (or 4 if you post videos) CSVs from the analytics page in monthly intervals. Upload to the respective table with the CSV Import app. I add a CSV app for each one so that I don't have to remap the columns every time.

{% Image {
  src: '/images/airtable-hub-csvs.jpg',
  alt: 'Airtable Hub and CSVs from Twitter',
  caption: 'Use the CSV app to add your Twitter stat exports.',
  fit: 'contain'
} %}

{% Image {
  src: '/images/airtable-hub-tweets.jpg',
  alt: 'Airtable Hub Tweets',
  caption: 'Use a table for every Tweet.',
  fit: 'contain'
} %}

{% Image {
  src: '/images/airtable-hub-twitter.jpg',
  alt: 'Airtable Hub Twitter aggregation',
  caption: 'Use a table to aggregate daily Twitter stats.',
  fit: 'contain'
} %}

LinkedIn is tricksy. Unless the posts are on a company page you manage, your stats are stuck on the actual post...

Airtable's web clipper can speed this up! When you post, clip the thing so you can pull your stats whenever you remember to go do that.

{% Image {
  src: '/images/airtable-hub-linkedin.jpg',
  alt: 'Airtable Hub web clipper for LinkedIn',
  caption: 'Configure your web clipper to snatch the stats from a LinkedIn post.',
  fit: 'contain'
} %}

See this quick video (it has no audio) of how the web clipper works.

{% YouTube { id: 'ASMutu0ALMc', title: 'Using Airtable as an Analytics Hub: LinkedIn Web Clipper - New Post' } %}

When you do remember, clip it again! And use an automation to update the source record.

Why a source record? Because LinkedIn doesn't list the post date on the post. So we need to use a "Created Time" in Airtable or input the date manually for our record keeping.

Regardless of which post date system you decide is less of a headache, an automation will track down the original record and plug in the new clipped stats.

Tada, you have personal LinkedIn post stats!

Here's a brief video illustrating this process and how I have configured my automation.

{% YouTube { id: 'ULoXTeb3gkQ', title: 'Using Airtable as an Analytics Hub: LinkedIn with Web Clipper & Automations - Update Post Stats' } %}

Put it all together! I wrote a little formula that trims the tweet/post date down to YYYY-MM. This gets calculated for every record automagically.

An automation copies that value and pastes it into a linked record field to the Report table.

{% Image {
  src: '/images/airtable-hub-automation.jpg',
  alt: 'Automate linked records',
  caption: 'Use automations to create linked records between tables so that Rollups can do math for you.',
  fit: 'contain'
} %}

And that's it! Now I have a ridiculous amount of views to see all my nifty numbers to really rub in how infrequently I actually post things on the internet. Perhaps it will serve as inspiration to actually post things... we shall see.

Now I just need my Twitch stats; also, Loom has folder-level stat exports...

{% Image {
  src: '/images/airtable-hub-loom-stats.jpg',
  alt: 'Loom folder-level stats',
  caption: 'Loom folder-level stats are available in CSV format via "Export Insights".',
  fit: 'contain'
} %}
