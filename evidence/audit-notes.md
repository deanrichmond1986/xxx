# Audit scope and inherited findings

This correction restores the original UI at fb640b3 and adds cosmetic CSS. The user explicitly rejected replacing its concept. Browser evidence verifies original body structure (ignoring trailing whitespace), taps, persistence, upgrades, four tabs, coin sizes and energy placement at three mobile sizes.

The strict static report is retained without suppression. Its actionless-button findings mostly refer to real external event listeners in the original menu, modal, login and click controllers, exercised by browser tests. The original single shop tab is inert and remains a legacy limitation. The textarea findings come from the third-party jQuery vendor implementation, not product textareas. No dummy handlers or edited vendor code were introduced to hide findings. This is not a full accessibility remediation; original popup focus and network failure behavior are inherited.

Official design lint passes with zero errors and warnings. Standard and WebKit scrollbars, reduced motion and visible focus are supplied by the cosmetic stylesheet. Browser workflow checks pass without JavaScript errors. Public deployment is checked separately after publishing.
