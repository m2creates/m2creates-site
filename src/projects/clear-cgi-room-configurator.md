---
title: Clear CGI Room Configurator
tldr: >-
  Built a multi-tenant product visualization platform using layered CGI compositing and Airtable as client-managed CMS backend — 4 active product line configurations with real-time image rendering across 3 viewing angles and composite image export with parts list for sales handoff.
slug: clear-cgi-room-configurator
datePublish: 2020-12-15
status: complete
category: consulting
location: West Yorkshire, United Kingdom
industry: Interior Design
tags:
  - Product Visualization
  - Multi-tenant Architecture
  - CGI Compositing
  - Client-Managed CMS
 
impact: >-
  Gave a hardware company's customers spatial knowledge they couldn't get from a catalog — enabling purchase confidence without a showroom visit. The multi-tenant architecture meant the client could extend the platform to new product lines independently, without new development work. The export function collapsed the gap between product selection and purchase order into a single downloadable image.

specs:
  - label: Timeline
    value: 2020
  - label: Configurations
    value: 4 active product lines · client-managed
  - label: Viewing angles
    value: 3 per configuration · real-time layer compositing
  - label: Via
    value: Deytah
 
theory:
  name: Hayek — Separation of Structure and Content
  desc: >-
    The configurator's architecture separates what the developer knows from what the client knows. The application knows how to composite layers, read a product table, and export a result. The client knows their product catalog — what's available, what it looks like, what it's called. Neither needs to understand the other's domain. This is a Hayekian solution to a distributed knowledge problem: instead of requiring the client to learn application code or the developer to maintain product data indefinitely, the system draws a boundary that gives each party ownership of the knowledge they actually hold. Four product lines maintained independently by the client, years after development ended, is the evidence that the boundary was drawn correctly.

sidebar:
  - label: What this demonstrates
    items:
      - Multi-tenant product visualization platform — four independent client configurations from one shared codebase
      - CGI layer compositing across 3 viewing angles with real-time rendering and no re-render cost on selection change
      - Airtable as client-managed CMS backend — product updates, images, and labels managed without developer involvement
      - Composite image export with parts list for direct sales handoff
      - Architecture that separates application structure from product content — extensible to new product lines without new development
  - label: Tools
    items:
      - Airtable
      - CGI layer compositing
      - JavaScript
      - Netlify
      - Multi-tenant architecture
 
links:
  - label: Rothley Curtain Pole Demo
    desc: Build your own curtain pole
    url: https://clearcgi.netlify.app/rothley/configurator/  
    type: website
  - label: Bergen Bathroom Demo
    desc: Build your own bathroom
    url: https://clearcgi.netlify.app/bergen/bathroom/
    type: website
  - label: Clear CGI Kitchen Demo
    desc: Build your kitchen
    url: https://clearcgi.netlify.app/clearcgi/kitchen/
    type: website
 
next_project:
  name: MIT Innovation ONE
  slug: mit-innovation-one

order: 7

---

## The Problem

Selling physical hardware — curtain poles, bathroom fixtures, kitchen fittings — has a visualization problem. The buyer needs to know what a matte black finial looks like with a particular bracket and ring combination before committing to an order. Swatches and catalog photos don't answer that question. A showroom visit answers it, but not every customer goes to a showroom.

The client had professional CGI renders of their products. The question was how to make those renders interactive without rebuilding a custom application for every product line.

## The System

The configurator works by compositing layers. Each selectable option in each category is a perspective-matched CGI image that loads on top of a base scene — so when a customer switches from a round finial to a square one, the image updates instantly without re-rendering anything. The three viewing angles (Side Low, Straight, Side High) each have their own layer set, giving the customer a realistic sense of how the complete installation will look from different positions in the room.

The Airtable backend is what makes it multi-tenant. Each client manages their own product table — images, labels, categories, ordering — without touching the application code. New products get added through Airtable. The application reads the current state of the table and displays accordingly.

The export function closes the loop. A customer finishes configuring, downloads the composite image, and hands it to whoever is ordering the hardware — with the selected parts listed directly on the image. The visualization tool becomes a sales document.

## The Result

Four active client configurations, all still running. The clients are managing their own product data. No developer intervention required for routine updates.

## The Systems Lesson

The most reusable system is one that separates the structure from the content. The configurator's architecture doesn't know anything about curtain poles specifically — it knows how to composite layers, read options from a table, and export a composite. The client fills in the content. That separation is what made it possible to deploy four different product lines from one codebase.
