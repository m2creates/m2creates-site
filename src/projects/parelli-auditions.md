---
title: Parelli Natural Horsemanship — Audition System
tldr: >-
  Digitized Parelli Natural Horsemanship's paper-based assessment credentialing system — replacing emailed Access database with 7-platform automation; migrated 6,000+ records and 13,500+ assessments into Airtable; designed assessor operations base and purchase-to-credential automation.
slug: parelli-natural-horsemanship-auditions
datePublish: 2019-05-01
status: complete
category: consulting
location: Pagosa Springs, Colorado
industry: Education
tags:
  - Workflow Automation
  - Data Migration
  - Systems Integration
  - Credentialing Systems
  - Legacy Migration
 
impact: >-
  Eliminated the single point of failure for a credentialing system serving thousands of students globally. The migration preserved 13,500+ historical assessments — no student lost their record. The automation removed the manual data routing that made the old system dependent on specific people performing specific tasks in a specific order. Every staff member who no longer had to manually enter an audition application had time returned to higher-value work.

specs:
  - label: Year
    value: 2019
  - label: Migration
    value: 6,000+ student records · 13,500+ assessments
  - label: Platforms
    value: 7-platform automated workflow
  - label: Via
    value: Deytah
 
theory:
  name: Buchanan — Constitutional Rules
  desc: >-
    The Access database wasn't just a technical liability — it was a governance failure. One person's computer held the credentialing records for thousands of students globally. The rule for how records were created, stored, and transferred was informal: whoever needed the file asked for it to be emailed. That is not a system. The Buchanan framing is about designing rules that don't depend on specific people following them correctly. The 7-platform workflow is structured so that no single failure — no crashed computer, no departed employee, no lapsed software license — can take down the whole system. The rules are embedded in the architecture. Student credentials survive regardless of what any one platform, person, or machine does next.

sidebar:
  - label: What this demonstrates
    items:
      - 7-platform automated workflow replacing a paper and emailed-Access-database system with no version control
      - Legacy migration — 6,000+ student records and 13,500+ assessments with full historical data integrity
      - Distributed architecture eliminating single point of failure for an international credentialing system
      - Real-time student dashboard — submission status visible without staff intervention
      - Assessor operations base in Airtable — score entry propagates back to student account automatically
      - Featured on BuiltOnAir podcast Season 3 Episode 8
  - label: Tools
    items:
      - Airtable
      - Shopify
      - Gravity Forms
      - Infusionsoft
      - Memberium
      - Zapier
      - Google Sheets
      - WordPress
      - AWS
 
links:
  - label: Recognition
    desc: BuiltOnAir Podcast, Season 3 Episode 8, October 21, 2019
    url: https://builtonair.com/builtonair-s03e08-melanie-magdalena-digital-consultant/
    type: podcast
 
next_project:
  name: Clear CGI Room Configurator
  slug: clear-cgi-room-configurator

order: 6

---

## The Client

Parelli Natural Horsemanship runs a structured credentialing system for equestrian students worldwide. Each level completed is a legitimate credential — proof that a student and their horse have achieved a specific standard of partnership and skill. The system's integrity depends on accurate record-keeping.

## The Problem

That record-keeping lived on paper and in a Microsoft Access database on one person's computer.

The paper workflow was elaborate: a two-part submission including a signed audition application and a completed self-assessment checklist — a two-page rubric across seven skill categories evaluated at four levels of progression. Students mailed it in. Staff entered it manually. The database got emailed to whoever needed to edit it. Multiple copies accumulated with no version control. If the computer died, the records died with it.

## The System

Seven platforms, one continuous flow.

1. A student purchases their audition slot in **Shopify**.  
2. They fill out a digital intake form in **Gravity Forms** — replacing the paper application entirely.  
3. **Infusionsoft** tags their CRM record.  
4. **Memberium** updates their WordPress account dashboard so they can see their submission status in real time.  
5. **Zapier** routes the data downstream.  
6. **Google Sheets** captures a structured administrative record.  
7. **Airtable** — the assessor opens their base, sees the new student record, completes their review of the video submission, and enters the score directly. The result propagates back through Memberium to the student's account.

What used to require a paper form, a stamped envelope, manual data entry, and a phone call or printed sheet to notify the student now happens end-to-end without anyone manually moving data between systems.

## The Legacy Migration

The harder part wasn't building the new system. It was extracting 6,000+ student records and 13,500+ assessments from the Access database with full historical data integrity — so that every student's credential history was preserved and accessible from day one.

The first obstacle was opening the file. The database arrived as a Microsoft Access file — Windows-only software. Without a Windows machine or Microsoft Office license, the only option was a trip to the public library to open it, export everything as CSVs, and carry the data home to start transforming it. That's the moment the fragility of the old system became fully concrete: an international credentialing system whose records required a specific operating system, a specific software license, and physical presence at a library computer to access.

## The Recognition

The BuiltOnAir podcast (Season 3, Episode 8, October 2019) featured this project as a showcase of creative Airtable implementation. The host described it as "an extremely creative way to get the data she needs in the right spots." The episode framing: scientist, creator, web designer, developer, self-proclaimed unicorn — someone who crossed from archaeology into systems work and brought the same spatial and analytical instincts to both.

## The Systems Lesson

The Access database wasn't the problem. The problem was that one person's computer was the single point of failure for an international credentialing system. Every student who had ever passed a level, every score ever recorded, every assessment ever submitted — all of it dependent on one machine staying alive and one person remembering to email the right version to the right person. The new system didn't just digitize the workflow. It distributed the data so that no single failure could take the whole thing down.
