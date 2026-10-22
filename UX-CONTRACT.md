# Money Tap UX contract

The current change is cosmetic. The original interface at fb640b3 is the product reference, including its text, screen order, navigation and coin/energy geometry. User correction overrides the previous full redesign direction.

## Canonical UI Map

| Capability       | Canonical owner                            | Source of truth | Allowed variants | Verification                                           |
| ---------------- | ------------------------------------------ | --------------- | ---------------- | ------------------------------------------------------ |
| Navigation       | public/js/menu.js openPage                 | Existing source | live / demo      | Original work, perks, rating, balance tabs remain      |
| Popups           | public/js/modal.js                         | Existing source | live / demo      | Original upgrade open/close and purchase               |
| Toast            | public/js/notificatior.js showNotification | Existing source | live / demo      | Existing feedback pattern retained                     |
| Scrollbar        | public/css/polish.css                      | Existing source | live / demo      | Standard, WebKit and forced-colors rules               |
| Taps and energy  | public/js/click.js, Go clicker endpoint    | Existing source | live / demo      | Tap debit, balance and saved demo progress             |
| Demo persistence | docs/demo-api.js                           | Existing source | live / demo      | Original money-tap-demo-v1 key                         |
| Demo variants    | scripts/sync_frontend.py                   | Existing source | live / demo      | Local API, test subscription and browser referral link |

No new permissions, billing, deletion or authorization model. Canonical business evidence remains existing Go handlers and demo adapter. Inherited request/error handling is outside this visual correction; do not claim new retry, concurrency or dialog focus guarantees.
