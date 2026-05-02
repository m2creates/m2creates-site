---
title: MIT Innovation ONE
tldr: >-
  Designed and delivered front-end UI for a three-role MIT student placement platform — connecting students, departments, and alumni startups through Airtable-backed portals with MIT Kerberos SSO integration and a custom bidirectional WordPress↔Airtable sync plugin; served as user flow architect and QA across a 4-week build.
slug: mit-innovation-one
datePublish: 2020-08-15
status: complete
category: consulting
location: Cambridge, Massachusetts
industry: Higher Education
 
impact: >-
  Built the operational infrastructure for MIT's institutional response to a collapsed recruiting market — enabling guaranteed employment outcomes for MIT students during a moment when the normal pathways were unavailable. The Data Backbone design, if fully realized, would have given MIT a longitudinal record of student innovation pathways across four years — the kind of institutional knowledge that typically lives in spreadsheets on individual advisor laptops.

specs:
  - label: Timeline
    value: 4-week build · Fall 2020
  - label: User roles
    value: 3 (student, DLC staff, alumni ventures)
  - label: Data infrastructure
    value: 3 federated Airtable bases · custom bidirectional sync
  - label: Via
    value: Deytah
 
theory:
  name: Hayek — Knowledge Problem
  desc: >-
    The system had to serve three fundamentally different users — students, DLCs, and alumni ventures — without asking any of them to understand how the others worked. Each group had native tools: Airtable for administrators, WordPress for students. The value of the system depended entirely on keeping both in sync without forcing either group to change how they worked. The bidirectional sync plugin is a Hayekian solution: instead of centralizing all knowledge in one interface, it respects that different actors know different things and need different surfaces. The Data Backbone design extends this further — longitudinal knowledge about student I&E pathways is distributed across departments, programs, and years, and the system's job is to make that distributed knowledge legible at the institutional level without requiring any individual actor to hold the whole picture.

sidebar:
  - label: What this demonstrates
    items:
      - Three-role platform architecture (students, DLC staff, alumni ventures) with role-differentiated authenticated portals
      - Bidirectional WordPress↔Airtable sync plugin — user flow design, front-end build, and QA across a custom-built integration
      - MIT Kerberos SSO integration bridging institutional and external authentication in one experience
      - Admin-configurable form builder — program administrators modify the common application without developer involvement
      - Data Backbone design for longitudinal student I&E pathway tracking across a four-year education
      - 4-week build from scoping to launch
  - label: Tools
    items:
      - 11ty
      - Nunjucks
      - TailwindCSS
      - Alpine.js
      - WordPress
      - Airtable
      - Custom PHP bidirectional sync plugin
      - MIT Kerberos SSO
      - Netlify
 
next_project:
  name: Central Texas Food Bank
  slug: ctfb-warehouse-operations

order: 8

---

## The Problem

MIT's Innovation Initiative ran a summer pilot in 2020 to keep students connected to employment opportunities during COVID-19 — when campus recruiting had collapsed and students needed guaranteed pathways to jobs and internships. The pilot worked. MIT greenlit a full institutional rollout for the fall semester.

They needed a platform that could handle the operational complexity of matching hundreds of students to dozens of employers across MIT departments and alumni ventures — and they needed it in four weeks.

The deeper goal extended beyond a single semester. MIT wanted a Data Backbone — a system that would track student innovation pathways across their entire four-year education, accumulating a longitudinal record of every opportunity applied for, every program joined, every startup encounter. The placement portal was version 1.0 of something MIT intended to run for years.

## The Constraint

The matching process had to be staff-controlled. Students shouldn't be able to self-select into any opportunity — the DLC team needed to manage the matching manually, using a tool that fit how they actually worked. Airtable was their native environment. WordPress was the student-facing surface. The problem: existing tools only synced one direction.

The system also needed to connect to MIT's existing identity infrastructure — students authenticating via MIT Kerberos accounts, external ventures through standard logins — bridging institutional and external authentication in a single coherent experience.

## The System

Three distinct portals, one unified platform.

**iHumans (students):** Browsed and applied for opportunities through a real-time filtered interface built in Alpine.js. Tracked application status, managed venture profiles, and viewed their accumulating I\&E transcript — with accepted opportunities auto-populating the record. Student classification, department, and affiliation filtered all available content.

**iObjects (MIT departments / DLCs):** Managed the full applicant pipeline — reviewing candidates, managing opportunities, exporting applicant data as CSV, and maintaining the public-facing resource catalog. Every update a DLC rep made to their profile simultaneously updated the public Innovation & Entrepreneurship Resource Guide, eliminating duplicate content management.

**iVentures (alumni startups):** Posted opportunities through an eight-step hiring pipeline — login, profile, job posting, applicant notification, interview scheduling, offer, acceptance, MIT pipeline connection — with applicant pools visible through a dedicated interface.

A fourth layer served program leadership: reporting and analytics views that gave administrators visibility into placement pipeline data across the full cohort without requiring ad-hoc Airtable queries.

The three Airtable bases weren't interchangeable — each modeled a different entity type. iHumans held student and DLC profiles. iObjects held the resource catalog. iVentures held startup profiles and job listings. Data flowed upward from all three bases into WordPress surfaces appropriate to each audience — some public, some authenticated, some role-restricted.

The two-way sync plugin didn't exist before this project. The developer built it. I designed the UI, defined the user flows for all three roles, built the front-end, and served as QA — locating failure points in the sync layer and communicating them precisely enough for the developer to fix them without me needing to write the code myself.

The form builder requirement added another design constraint: the common application needed to be configurable by program administrators without developer involvement. A system that requires a developer to make routine changes isn't finished. That principle shaped the entire configuration layer.

## The Result

The platform launched for the full MIT fall cohort. Several hundred students moved through the system. The project was COVID-specific and has since been wound down or transformed — but the UI demo remains live as a demonstration of the role architecture and interface design.

## The Systems Lesson

The hardest part of this project wasn't the UI. It was understanding that Airtable and WordPress were solving different problems for different people — and that the value of the system depended entirely on keeping both in sync without asking either group of users to change how they worked. The technology had to adapt to the humans, not the other way around.

The form builder requirement taught a second lesson: designing for the person who maintains the system after launch is as important as designing for the user who experiences it at launch.
