---
version: alpha
name: Money Tap
description: "A tactile gold token inside a violet-lit mobile game"
colors:
  primary: "#8b3fe0"
  glow: "#7c3aed"
  background: "#101014"
  surface: "#211f29"
  text: "#ffffff"
  gold: "#e5aa28"
  danger: "#ffb4ab"
  focus: "#d8b4fe"
typography:
  body:
    fontFamily: '"Tap Sans", system-ui, sans-serif'
    fontSize: "16px"
    lineHeight: "1.5"
  display:
    fontFamily: '"Tap Rounded", system-ui, sans-serif'
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

# Money Tap — original interface, restrained polish

## Overview

The user explicitly rejected a structural redesign. The approved reference is commit fb640b3: preserve its screens, wording, iconography, gold artwork, navigation, coin dimensions and energy placement. Russian language; no Japan-specific market scope. No new branding, rings, headers or onboarding flow.

## Colors

Keep the existing vivid violet backdrop, neutral dark cards, white labels and gold energy bar. The cosmetic supplement in `front/public/css/polish.css` defines a subtle neutral surface gradient, hairline edges and a restrained violet button gradient. Do not recolor every surface violet.

## Typography

Keep the supplied San Francisco and San Francisco Rounded faces and original size hierarchy. Add font smoothing and tabular balance numerals only.

## Layout

`main.css` retains the original geometry. Welcome and gameplay coins retain their enlarged sizes. The energy row retains its approved raised position. Bottom navigation stays full width. No blocks are moved or replaced.

## Elevation & Depth

Use inset hairlines and low-opacity shadows to finish existing cards and buttons. The gold artwork gets a small drop shadow. Avoid new decorative objects.

## Shapes

Keep existing radii and control dimensions. Do not introduce a new component system.

## Components

Existing controllers own navigation, purchases, popups and notifications. Polish applies across the same shared classes, including visible keyboard focus, hover and pressed states. Disabled controls retain original behavior. Reduced-motion and forced-colors preferences are respected. Scrollbars support both standard and WebKit implementations.

## Verification

Run `npm run check:sync` and `npm run test:ui`. Verify original structure and gameplay, persistence, upgrades, all four tabs and three mobile viewport sizes. Static audit reports legacy external-listener buttons and vendor-source false positives; these are documented in evidence rather than masked with inert handlers. This change does not claim to remediate all inherited accessibility or network-state limitations.
