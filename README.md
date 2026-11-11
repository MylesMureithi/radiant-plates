# Radiant Plates

A responsive website built for Radiant Plates, a new business offering feeding programmes, family reconciliations, and meal prep through a community kitchen. The goal of the site is to give them a clear, welcoming online home so they can start reaching people and get the business moving.

**Live site:** [radiantplates.org](https://radiantplates.org/)

**Built by:** [Myles Mureithi](https://github.com/MylesMureithi) · [Freelance web development](https://damperweb.vercel.app/)

> 🚧 **Status:** the site is live, and some content (team, stories, FAQ) is placeholder text until the client supplies the real copy.

## Overview

This is a freelance project built for a real client, from a reference site and a running list of requests: where the logo goes, how big the team photos are, what the sections should be, and how people get in touch. The site is a single page with anchor navigation, designed to feel warm and minimal and to work well on a phone, since that's how most visitors will open it.

## Features

- Sticky navbar with the client's logo, animated link underlines, and a mobile hamburger menu that closes on link tap or Escape
- Hero section with an animated logo and room for a main image
- About section covering history, stories, and the team, driven by data arrays so the client's content drops in without touching the markup
- Services section for the three offerings
- FAQ accordion built on native `<details>` elements, so it's keyboard accessible with no extra state
- Support section with M-Pesa Paybill details (Soon to be supplied)
- Contact section with email and click-to-chat WhatsApp cards
- Brand palette defined once as CSS custom properties
- SEO and link-preview tags (title, description, Open Graph) so shared links look right on WhatsApp and LinkedIn

## Tech stack

- **React** with **Vite**
- **CSS** with custom properties for theming, plus Grid and Flexbox for layout
- **react-icons** for icons
- **Poppins** via Google Fonts
- Deployed on **Vercel** with a custom domain

## Getting started

```bash
git clone https://github.com/MylesMureithi/radiant-plates.git
cd radiant-plates
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

To create a production build and preview it:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── assets/          # Logo, team photos, placeholder images
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── Faq/
│   ├── Support/
│   ├── Contact/
│   └── Footer/
├── App.jsx          # Page layout and section order
├── main.jsx         # Entry point
└── index.css        # Palette, shared layout, and section styles
```

## Updating the content

Most text lives in arrays at the top of each component, so changing the content means editing data, not layout:

- `About.jsx`: `history`, `stories`, and `team`
- `Faq.jsx`: `faqs`
- `Services.jsx`: `services`
- `Support.jsx`: payment methods
- `Contact.jsx`: contact methods

## What I learned

The most useful part of this project wasn't a technical skill. It was learning to understand client direction: turning a reference site and a handful of requests into something that matched what the client had in mind, then adjusting as feedback came in. Asking the right questions early saves a lot of rework later.

## Notes

The name, logo, and brand colors belong to Radiant Plates and are used here with their permission. Contact details and payment numbers are intentionally left out of this repository.