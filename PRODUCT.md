# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML, CSS and JavaScript. No build step, no server. Opened by double-clicking index.html. Chosen so the library stays trivial to run and to extend; the user approved this plan.

## Users

One person: a freelance web designer. They browse the library on a desktop to find inspiration when starting a client site, and to pick a reference design to hand to a new Claude Code session. Clients never see the app.

## Product Purpose

A personal library of web designs collected from Dribbble and similar sources. Each entry pairs screenshots with a structured written description (feeling, palette, typography, layout, style details). Success is finding an inspiring direction fast, then handing it to an AI coding session with both the words and the pictures so the session reproduces the feeling accurately.

## Positioning

Unlike a mood board, every entry is written to be handed to an AI builder: the text brief and the images travel together, in one consistent format.

## Operating Context

The user sends screenshots and optional source links to Claude, which writes each entry. Browsing is local and offline. The copied brief is pasted into another Claude Code session together with the image files.

## Capabilities and Constraints

- Entries are inspiration, not working sites. Screenshots plus description only.
- Each entry has: title, one-line summary, source link, images, category, mood tags, descriptor, palette with roles, typography, layout, style details, best-for, notes.
- Hand-off actions: copy brief (text lists image file paths), copy image, download zip.
- Library data lives in data/designs.js and images in images/<id>/.
- Inferred, not confirmed by interview: desktop-first usage, single user, no accounts, no hosting requirement.

## Brand Commitments

Interface look follows two reference screenshots the user supplied: warm paper background, monospace uppercase filter chips with counts, serif card titles, tan tag pills, thin borders, square corners, a detail view with COPY BRIEF and CLOSE buttons.

## Evidence on Hand

No real designs yet. The user will supply Dribbble screenshots. Seed entries are clearly marked placeholders and must not be presented as real sources.

## Product Principles

1. The screenshot leads; the interface recedes.
2. Text and image are always handed off together.
3. Every entry follows one consistent format so briefs are predictable.
4. Adding a design should never require touching the app code.

## Accessibility & Inclusion

Keyboard operable (Esc, arrows, focus states), sufficient contrast on the warm palette, reduced-motion respected.
