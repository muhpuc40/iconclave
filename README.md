# iConclave 2026

A responsive event portal for six undergraduate competition segments at Premier University.

## Overview

The site includes an animated landing hero, event and competition posters, a single embedded Google registration form, data-driven competition pages, inline PDF rulebooks, organizer logos, representative cards, and a complete contact directory.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel / Netlify Ready (Static Export Capable)

## Features

- **Dynamic Routing:** Statically generated detail pages for all six competition tracks.
- **Global Registration:** One registration page and Google form for every segment.
- **PDF Rulebooks:** Download and in-page viewing for landscape PDF rulebooks.
- **Shared Contacts:** Representative data powers both detail pages and the contact directory.
- **Organizer System:** Association and organizing-club logos are managed in one data file.
- **Custom Design System:** Tailored typography scale, fluid spacing, and custom color tokens using Tailwind CSS v4's CSS variable engine.
- **High Performance:** Heavily optimized for Core Web Vitals with minimal client-side JavaScript.
- **Accessibility:** Reduced-motion preferences respected, semantic HTML, and ARIA attributes integrated.
- **Data-Driven Architecture:** All competition content, FAQs, and schedules are isolated in a robust TypeScript data layer, cleanly separated from UI components.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live site.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will compile the TypeScript, optimize the CSS, and statically generate all necessary routes.

## Project Structure

- `/app` - Next.js App Router pages and global layouts
- `/components` - Modular, reusable React components (UI primitives, layouts, sections)
- `/data` - Centralized data layer containing all site content and configurations
- `/lib` - Shared utilities and helpers
- `/public` - Static assets, SVG graphics, and brand imagery

## Content Updates

- Competition content, poster links, representatives and rulebooks: `data/competitions.ts`
- Committee contacts: `data/contacts.ts`
- Association and organizer logos: `data/organizers.ts`
- Registration, deadline, event and shared rulebook links: `data/site.ts`

The supplied Clash of Projects rulebook is already available at
`public/rulebooks/clash-of-projects.pdf`. Add the remaining landscape PDFs
using these filenames:

- `public/rulebooks/pitch3.pdf`
- `public/rulebooks/hertech-hustle.pdf`
- `public/rulebooks/promptwar.pdf`
- `public/rulebooks/goalbot-challenge.pdf`
- `public/rulebooks/research-exhibition.pdf`

After adding a PDF, set that competition's `rulebookUrl` to its public path.

Event and competition posters use a 4:5 canvas at **1080 × 1350 px**. Replace
the matching files in `public/posters` while keeping the same filenames and
dimensions.

## Favicon and Manifest

The project intentionally uses one App Router icon at `app/icon.svg` and does
not define a web app manifest. If a browser still requests
`/manifest.webmanifest`, clear that site's stored data or unregister an older
service worker; the request is not emitted by this codebase.

## License

All rights reserved. This repository contains proprietary code and design assets for the iConclave event.
