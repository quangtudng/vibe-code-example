# giangvo.work

Personal portfolio for **Giang Chau Vo**, QA Engineer.

## Tech Stack

- HTML, CSS, JavaScript — single static page, intentionally minimal.
- `css/vendor.min.css` (builder-provided layout) + `css/index.css` (custom overrides).
- Self-hosted fonts (Playfair Display for headings, Roboto for body).
- `js/refactored.js` — small vanilla JS for menu, smooth scroll, active link highlighting, and sticky header.

## How GitHub Copilot Assisted This Refactor

The site started as a website-builder export with extra assets and large JS bundles. Copilot helped by:

- Removing unused assets and consolidating vendor CSS.
- Rewriting interactive JS into a small, dependency-free `js/refactored.js` (large bundle removed).
- Improving accessibility (alt text, heading order) and fixing visual bugs (nav flicker, hover colour issues).
- Polishing layout and typography for About, Skills & Certifications sections while keeping the original design intent.

Open `index.html` in a browser to review locally.

See the Copilot customization guide: [.github/COPILOT_GUIDE.md](.github/COPILOT_GUIDE.md)

