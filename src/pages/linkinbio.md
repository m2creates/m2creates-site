---
title: Link in bio
tldr:
slug: linkinbio
date: Last Modified
datePublish: 2022-03-12
image:
  url:
  alt: 
  credit: 
seo:
  title: Link in bio
  desc: All my links in one spot
  image: 
    url:
    alt:
eleventyExcludeFromCollections: true
---

<ul class="list">
{% for link in linkinbio.linkinbio %}
<li><a href="{{ link.url }}">{{ link.text }}</a>
{% endfor %}
</ul>
