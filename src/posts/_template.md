---
title: 
tldr:
slug:
draft: true
datePublish:
image:
  url:
  alt: 
  credit: 
# blocks:
#   css: youtube
#   js: youtube
# comments:
#   twitter: 
#   codepen:
#   polywork: 
#   linkedin: 
#   uplabs:
seo:
  title:
  desc:
  image:
    url:
    alt:
# category:
# tags:
# uses:
permalink: false
eleventyExcludeFromCollections: true
post_type: article
---

Image shortcode

{% Image {
  src: 'https://images.unsplash.com/photo-1500754088824-ce0582cfe45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
  alt: 'Latern Fest',
  caption: 'Lift off at Lantern Fest 2015',
  fit: 'contain'
} %}

External link

{%-ExternalLink { url: 'https://google.com', text: 'External Link via shortcode', title: 'external link title text' }-%}
