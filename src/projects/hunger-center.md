---
title: The Congressional Hunger Center - Digital Platform Redesign
tldr: Full-service website redesign engagement for a federal hunger policy nonprofit — from discovery interviews through launch. Delivered information architecture, Figma design system, WordPress CMS with custom content types, 4-dimensional publication library, interactive global partner map, and full content migration with 301 redirects and CDN configuration.
slug: congressional-hunger-center
datePublish: 2019-11-01
status: complete
category: consulting
location: Washington, D.C.
industry: Nonprofit
tags:
  - Content Strategy
  - Information Architecture
  - Data Migration

impact: >-
  Built the infrastructure that lets CHC recruit the next generation of hunger leaders and demonstrate 25 years of impact to institutional funders — at a scale that matches the work. The publication library and partner map transformed static content into a searchable, browsable record of the organization's field reach and research output. The CMS design reduced the manual overhead of cohort cycle updates, giving the communications team time back on every program cycle.

specs:
  - label: Timeline
    value: April – October 2019
  - label: Via
    value: Deytah
 
theory:
  name: Ostrom — Commons Preservation
  desc: >-
    Twenty-five years of research, fellows, and organizational relationships existed in a form that made them difficult to find, browse, or demonstrate to outsiders. The information existed but was not a commons. The IA work is institutional design: creating rules that govern how a diverse organization's output becomes legible as a whole. Ostrom's insight is that heterogeneous resources require differentiated governance — the 4-dimensional filtering across Association, Subject, Community Focus, and Year reflects that. A single search box would have flattened the distinctions that make the content meaningful.

sidebar:
  - label: What this demonstrates
    items:
      - Full-service engagement from discovery through launch — stakeholder interviews, IA documentation, design system, development, content migration, CDN configuration
      - Information architecture for three distinct audiences (fellows, institutional funders and partners, alumni) resolved into one coherent navigation structure
      - 4-dimensional publication filtering across 44+ pages of research output
      - Interactive global partner map as institutional infrastructure
      - CMS designed for non-technical maintainers — reducing manual overhead on every cohort cycle
      - SEO preservation through content migration — 301 redirects and Cloudflare CDN
  - label: Tools
    items:
      - WordPress
      - Advanced Custom Fields
      - Custom post types
      - Figma
      - Flowmapp
      - Cloudflare CDN
 
links:
  - label: Website
    desc: See it live
    url: https://hungercenter.org
    type: website
  - label: IA Design
    desc: Mapped in Flowmapp
    url: https://drive.google.com/file/d/1f4MtpCI8bvYE40V89DgKuSsVs37BNHJ2/view?usp=sharing
    type: drive
  - label: Mockup
    desc: Designed in Figma
    url: https://drive.google.com/file/d/1GPGOwUMqRi_gwc19uQpJq2U3ihugumth/view?usp=sharing
    type: figma
 
next_project:
  name: LBJ Liberty & Justice for All Award
  slug: lbj-foundation-award-website

order: 3

---

## The Organization

The Congressional Hunger Center runs two flagship fellowship programs — the Emerson National Hunger Fellows Program and the Mickey Leland International Hunger Fellows Program — placing emerging leaders with food security organizations across the U.S. and globally. Their partners include USAID, Catholic Relief Services, Mercy Corps, and the International Food Policy Research Institute. Over 25 years, they've increased the capacity of more than 350 organizations.

Their website wasn't telling that story effectively.

## The Problem

Three fundamentally different audiences were trying to use the same site: prospective fellows applying to programs, institutional partners and funders evaluating the organization, and alumni looking to stay connected. The existing site couldn't serve all three without confusion — navigation that made sense to one audience created friction for another.

Underneath the navigation problem was a content management problem. The marketing team was maintaining program information, fellow profiles, publications, and event content across a site structure that made updates unnecessarily complex. Every cohort cycle required manual work that a well-designed CMS should have automated.

## The Process

Discovery started with group interviews — understanding how each audience navigated the existing site, what they were looking for, and where they got stuck. The output was a 20+ page information architecture document specifying every page type, content relationship, and dynamic element before any design decision was made.

The sitemap followed — 40+ pages organized across 5 primary sections, with three levels of depth in the fellowship program sections to accommodate the full application, hosting, and field placement flows for two distinct programs.

Figma mockups covered 13 page templates and a complete design system — headings, paragraph styles, color variables, and a component library (called "Puzzle Pieces") the team could reuse without starting from scratch on every new page.

Development used WordPress with Advanced Custom Fields to structure all dynamic content — custom post types for fellow profiles, cohort directories, program pages, and publications. The publication library had 4-dimensional filtering across Association, Subject, Community Focus, and Year. The interactive global partner map visualized fellowship placement locations across the organization's international partner network.

Content migration preserved all existing URLs, configured 301 redirects for changed paths, and deployed Cloudflare as CDN — protecting the organization's search equity while completely rebuilding the underlying architecture.

> *"Their deeply collaborative approach helped our team focus on how to share our story and our work in an effective, dynamic way; the end result is a polished finished product that we're proud to show off to our partners and funders, and which can expand with us as we grow."* ~ Zack Bly, CHC's Communications & Engagement Manager

## The Systems Lesson

Information architecture is spatial thinking applied to digital content. You're mapping which concepts live near each other, which paths lead where, which doors open for which audiences. The CHC sitemap isn't a navigation document — it's a model of how a complex organization's work relates to itself. Getting that model right before designing anything is the same principle as walking the warehouse floor before writing the SOP.
