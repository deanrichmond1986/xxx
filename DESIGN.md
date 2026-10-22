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

# Money Tap Design System

## Overview

A tactile collector's token in a violet-lit display case. This is a Russian mobile game, primarily opened from Telegram or its public browser demo. Its job is to make tapping, energy management and upgrades immediately understandable. Product register: familiar navigation and quiet utility around one expressive object, the original oversized gold coin inside an engraved orbital ring.

Approved context: the user requested vivid violet backgrounds, neutral dark cards, gold coins, white text, enlarged welcome/play coins, and energy below the coin with space above navigation. Keep those decisions. Avoid casino promises, fictitious payout controls, meaningless countdowns and an all-purple monochrome treatment. Japan market/locale/content: not applicable; Russian locale alone does not establish a market or jurisdiction.

Runtime token model B: `front/public/css/main.css` `:root` is canonical. This file mirrors accepted values. `scripts/sync_frontend.py` copies the shared frontend to Pages; no independently edited demo theme. `tests/verify_ui.py` checks token values and exact generated copies. Sources: user session preferences; README.md; demo state model in docs/demo-api.js; existing Go endpoint behavior. No PRD, ADR, business or permission policy was supplied. No payment or authorization rules are changed.

## Colors

Primary is for deliberate actions; glow is reserved for the coin stage and backdrop. The surface remains neutral. All body text is white; secondary hierarchy uses weight, size and white opacity, never low-contrast purple text. Gold belongs to coin artwork and energy. Danger uses an icon and explicit error copy as well as its token. Focus is a 2px focus outline. Dark is the single theme; forced colors use system colors.

Token mapping: colors keys map to `--color-{key}`; body/display families to `--font-body`/`--font-display`; rounded keys to `--radius-card`/`--radius-control`/`--radius-pill`; spacing page/gap/section to `--space-page`/`--space-gap`/`--space-section`. Shared button/card/dialog/navigation consume these variables. Scrollbar thumb/track/hover/active consume explicit `--scrollbar-*` roles in the same root.

## Typography

Tap Sans (local subset of the supplied San Francisco font) carries controls and Russian prose. Tap Rounded (local supplied rounded face) is reserved for balances and large headings. Subsets include Cyrillic, Latin, punctuation, currency and numbers. Use Russian Intl formatting and tabular numerals; never abbreviate essential balances. Long player names wrap. No remote font requests or emoji as navigation icons.

## Layout

One mobile shell, 480px content maximum, centered on desktop with a calm violet ambient background. 24px page inset and 16/28px grouping rhythm. Normal document scrolling owns every screen; sticky bottom navigation reserves its own space including safe-area insets. No fixed-height ancestor clips welcome, profile, upgrade or long-name content. Welcome and game share the same large coin asset. Energy follows the coin rather than clinging to navigation. All controls remain at least 44px in each actionable dimension.

## Elevation & Depth

The coin stage is the one expressive surface: an orbital etched ring, soft violet light and original gold artwork. Cards use tonal layers and hairline borders. A single restrained shadow belongs to the coin and modal. Avoid scattered glowing card outlines and decorative chart panels. Loading and errors occupy reserved feedback slots.

## Shapes

20px cards, 16px buttons, 28px native modal and pills only for compact status or rate badges. Shared icons use rounded 1.7px strokes, 20–24px bounds. Navigation keeps icons and visible Russian labels together.

## Components

Shared buttons own pointer, hover, pressed, focus-visible, disabled and busy styles without changing dimensions. Native buttons implement actions; hash links implement navigation and aria-current. Native dialog owns inertness, focus containment, Escape and restoration; script restores the opener. One live toast announces acknowledged actions. Persistent errors retain a retry action. Never use browser alert/confirm/prompt or raw HTML from profiles.

Use real loading indicators, not skeletons. A pending click batch is marked as saving; failed/uncertain writes are reconciled with the API, never retried automatically. Upgrade confirmation states current and next effect, cost and available balance. Insufficient funds are explained inline. Referral copy failure reveals a selectable link. Empty leaderboard is explained. Demo mode is visibly labeled and never implies real payouts or real participants.

Motion is for press feedback and one short floating +coin response. No perpetual coin animation. Honor reduced motion by removing transforms, animation and smooth scrolling. Global visible scrollbars inherit thumb/track/hover/active tokens; forced colors stay operable.

## Do's and Don'ts

- Do keep white labels and a gold coin against violet light.
- Do preserve progress and clear route/feedback state across navigation.
- Do use the same dialog, toast and error pattern across all screens.
- Don't turn game units into a real money estimate or invent a listing date.
- Don't hide overflow to achieve a screenshot or shrink touch targets to fit.
