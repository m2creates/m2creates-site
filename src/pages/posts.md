---
title: Posts
slug: posts
date: Last Modified
datePublish: 2022-03-12
image:
  url: https://images.unsplash.com/photo-1500754088824-ce0582cfe45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80
  alt: Dozens of paper lanterns light up the night sky.
  credit: m2creates via Unsplash
seo:
  title: Posts
  desc: Read the latest blog posts
  image:
    url:
    alt:
pagination:
  data: collections.posts
  size: 20
  alias: posts
  addAllPagesToCollections: true
permalink: "posts/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
layout: posts.njk
collection: posts
---