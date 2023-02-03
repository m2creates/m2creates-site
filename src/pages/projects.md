---
title: Projects
tldr: >-
  Digital design across the spectrum: websites, publications, courseware, and iconography.
slug: projects
date: Last Modified
datePublish: 2022-03-12
image:
  url:
  alt: 
  credit: 
seo:
  title:
  desc:
  image:
    url:
    alt:
---

## Showcase

<iframe class="airtable-embed breakout-medium" src="https://airtable.com/embed/shrxjEnqi3tlE3nSU?backgroundColor=pink&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

## Side Projects

Side projects are my way of testing out new concepts/strategies and bringing to life some of my very own ideas! Some become Ventures of their own. Others get dusty over time. But they all teach me something I can use in the future.

If you want to support my projects, [**buy me a coffee**](https://www.buymeacoffee.com/m2)!

{% for project in collections.projects %}
{% if project.data.catalog.type === "side-project" %}
<section class="my-2 w-full">
<h3 class="mt-0">{{ project.data.title }}</h3>
{{ project.templateContent | safe }}
<figure class="w-full mt-0 pb-2 media border-b border-solid">
  <img src="{{ project.data.image.url }}" alt="{{ project.data.image.alt }}" class="object-contain mb-3 aspect-w-4 aspect-h-3 max-h-128 mx-auto">
  {% if project.data.image.credit %}
  <figcaption>{{ project.data.image.caption }}</figcaption>
  {% endif %}
</figure>
</section>
{% endif %}
{% endfor %}

## From the Portfolio

I started professionally designing websites in 2012. I bounce back and forth from code-intensive to low/no-code solutions.

In 2019, I had the pleasure of launching: a website redesign for the **Congressional Hunger Center**, an award website for the **LBJ Foundation**, a student job-matching platform for **MIT Innovation Initiative**, among others with **[Deytah](https://deytah.io/)**.

Today, I actively work on User Experience and produce the results required for a project via web design, front-end development, automation, photography, database architecture, no code, with code, you name it!

I am a proud unicorn learning everyday so I can create the best solution for the problem at hand. Let's create a web for everyone.

{% for project in collections.projects %}
{% if project.data.catalog.type === "portfolio" %}
<section class="my-2 w-full">
<h3 class="mt-0">{{ project.data.title }}</h3>
{{ project.templateContent | safe }}
<figure class="w-full mt-0 pb-2 media border-b border-solid">
  <img src="{{ project.data.image.url }}" alt="{{ project.data.image.alt }}" class="object-contain mb-3 aspect-w-4 aspect-h-3 max-h-128 mx-auto">
  {% if project.data.image.credit %}
  <figcaption>{{ project.data.image.caption }}</figcaption>
  {% endif %}
</figure>
</section>
{% endif %}
{% endfor %}

And More!

The Sydney Chronicles • Infendo Radio • The Mentor Group • Tiger Prints 3D • Los Alamos High Flyers Gymnastics • Anthropology at University of New Mexico • Get My Kid Fit • Dakota Marketplace • Parelli Natural Horsemanship
