# Money Tap UX contract

## Business-context evidence

| Concern                 | Source                                                     | UI consequence                                                                                       |
| ----------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Game balance and energy | funcs/clicker.go, docs/demo-api.js                         | One energy per accepted tap; tap level determines coins. Refetch after uncertain mutations.          |
| Upgrade cost            | funcs/modifies/buy_toques.go, docs/demo-api.js             | Show next level and exact 1000 × 2.5^(current level − 1) cost. Confirm purchase; no automatic retry. |
| Demo persistence        | README.md, docs/demo-api.js                                | Keep existing localStorage key and progress. Label demo and local saving. No financial claim.        |
| Permission/identity     | Existing Telegram integration and README.md                | Live browser without Telegram gets an explanatory welcome state. No new auth or permission model.    |
| Deletion/billing/legal  | No authoritative policy supplied; no such flow implemented | No deletion, billing or financial action introduced.                                                 |
| Subscription bonus      | funcs/subscribe.go, docs/demo-api.js                       | Demo bonus is explicitly test-only; live only checks server subscription state.                      |

## Canonical UI Map

| Capability | Canonical owner                   | Source of truth               | Allowed variants                        | Verification                                     |
| ---------- | --------------------------------- | ----------------------------- | --------------------------------------- | ------------------------------------------------ |
| Scrollbar  | main.css global scrollbar rules   | DESIGN.md                     | standard and forced-colors              | computed styles in tests/verify_ui.py            |
| Toast      | App.notify in app.js              | this contract                 | success, info, error                    | live region and deduplication test               |
| Navigation | App.navigate and hash links       | this contract                 | play, boosts, leaders, profile, friends | back, hash, focus, title tests                   |
| Dialog     | native dialog with App.openDialog | this contract                 | upgrade, energy, help                   | keyboard, Escape, focus restoration              |
| Mutation   | App api/flush/buy                 | Go endpoints and demo adapter | taps batched, upgrade single-flight     | success, pending, failure and no-duplicate tests |

## Flow ledger

Welcome → Начать игру → load or retry → play. Returning visitors resume after local onboarding flag; this flag contains no identity. Hash navigation preserves browser back and sets a localized document title. All screen headings are programmatically focusable; unchanged action updates never replace focused controls.

Tap → tactile feedback and local pending balance → one serialized batch → confirmed profile. On uncertain failure, block further writes until balance is checked; do not replay a non-idempotent batch. Background reads must not overwrite pending taps. Demo mutations use Web Locks when available and re-read stored state; storage events revalidate other tabs.

Улучшить → shared dialog → cost/effect/available balance → single in-flight purchase → refreshed profile and success message. Insufficient funds: inline amount missing, no active purchase. Unknown outcome: reconcile, do not invite an unsafe repeated purchase.

Rating → reserved loading region → up to ten API rows, contextual demo notice → empty or retry state. Never create fake competitors in the frontend. Real API's legacy synthetic leaderboard remains a backend limitation; do not advertise a verified global competition.

Friends → count and source referral link → Копировать ссылку → acknowledged copy; if clipboard unavailable show a selectable URL and correction instruction. Demo sharing invites to the demo only and never promises a real referral reward.

All views use shared busy/error/toast/dialog patterns. All content and accessible names are Russian; numbers use ru-RU. Dates supplied by Go in DD.MM.YYYY remain date-only; client timestamps use the viewer's locale without inventing a business timezone. No user-sensitive values are added to URLs or storage. Demo stores only game state already present in the original demo.
