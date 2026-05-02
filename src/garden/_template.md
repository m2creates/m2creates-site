---
title: >-
  Clear, specific title

tldr: >-
  1-line system insight

slug: url-slug

draft: false

datePublish: YYYY-MM-DD

image:
  url:
  alt:
  credit:

seo:
  title: >-
    [SEO title (can match title)]
  desc: >-
    SEO description
  image:
    url:
    alt:

domain: attention-systems | operational-systems | cultural-systems | deep-time-systems

axes:
  signal_model: signal | model]
  stability_drift: stability | drift
  internal_external: internal | external

intended_audience: self | curious-generalist | domain-insider | bridge

growth_stage: soil | seedling | budding | evergreen

category: field-notes | analytical-portfolio | soil

thread: series-or-theme-name

tags:
  - topic-tag-1
  - topic-tag-2

post_type: article

# links:
  # - label:
  #   desc:
  #   url:
  #   type: [breakdown | sheets | looker | reference]

permalink: false
eleventyExcludeFromCollections: true
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
