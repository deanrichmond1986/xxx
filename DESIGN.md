---
version: alpha
name: Money Tap
description: "A tactile gold token inside a violet-lit mobile game"
colors:
  primary: "#9747ef"
  glow: "#7c3aed"
  background: "#100d19"
  surface: "#24212f"
  text: "#ffffff"
  gold: "#ffdb78"
  danger: "#ffb4ab"
  focus: "#d8b4fe"
typography:
  body:
    fontFamily: '"San Francisco", system-ui, sans-serif'
    fontSize: "16px"
    lineHeight: "1.5"
  display:
    fontFamily: '"San Francisco Rounded", system-ui, sans-serif'
    lineHeight: "1.08"
rounded:
  DEFAULT: "20px"
  control: "16px"
  pill: "999px"
spacing:
  page: "24px"
  gap: "16px"
  section: "28px"
components:
  button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    height: "52px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.DEFAULT}"
  dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "28px"
  coin-stage:
    backgroundColor: "{colors.glow}"
  energy:
    backgroundColor: "{colors.gold}"
  error:
    textColor: "{colors.danger}"
  focus:
    textColor: "{colors.focus}"
---

# Money Tap — original structure, premium finish

## Overview

The user explicitly rejected a structural redesign. The approved reference is commit fb640b3: preserve its screens, wording, iconography, gold artwork, navigation, coin dimensions and energy placement. Russian language; no Japan-specific market scope. No new branding, rings, headers or onboarding flow.

## Colors

Keep the existing vivid violet backdrop, neutral dark cards, white labels and gold energy bar. The cosmetic supplement in `front/public/css/polish.css` defines a layered graphite surfaces, lit edges and a more expressive violet button gradient. Do not recolor every surface violet.

## Typography

Keep the supplied San Francisco and San Francisco Rounded faces and original size hierarchy. Retain body and display roles; strengthen heading weights, tighten display tracking, and use tabular balance numerals.

## Layout

`main.css` retains the original geometry. Welcome and gameplay coins retain their enlarged sizes. The energy row retains its approved raised position. Bottom navigation stays full width. No blocks are moved or replaced.

## Elevation & Depth

The signature is the original gold coin suspended in violet light, without added rings or brand graphics. Layer graphite cards with a brighter upper edge and a darker base. Energy gets a translucent surface behind its existing row; active navigation gets an inset violet selection surface. These treatments never change element geometry.

## Shapes

Use 20px cards, 16px primary buttons and 13px navigation selections. Keep existing control dimensions and all screen/block positions.

## Components

Existing controllers own navigation, purchases, popups and notifications. Polish applies across the same shared classes, including visible keyboard focus, hover and pressed states. Disabled controls retain original behavior. Reduced-motion and forced-colors preferences are respected. Scrollbars support both standard and WebKit implementations.

## Verification

Run `npm run check:sync` and `npm run test:ui`. Verify original structure and gameplay, persistence, upgrades, all four tabs and three mobile viewport sizes. Static audit reports legacy external-listener buttons and vendor-source false positives; these are documented in evidence rather than masked with inert handlers. This change does not claim to remediate all inherited accessibility or network-state limitations.

Runtime ownership: `polish.css` is the canonical finishing layer; its `--premium-*` tokens map primary/surface/background/text/gold to the corresponding DESIGN colors and are consumed by shared original classes. `main.css` owns layout. `scripts/sync_frontend.py` generates the identical Pages stylesheet. The latest user correction requires clearly visible refinement, not merely a source restoration.

Navigation repair: remove the redundant delayed hide in the original openPage controller; it could hide a screen that had already been reopened during quick navigation. No routes or layout change.
