# giangvo.work

Personal portfolio for **Giang Chau Vo**, QA Engineer. A single HTML page — no frameworks, no server, just files a browser can open directly.

---

## Tech Stack

The site is built with the three fundamentals of the web: HTML, CSS, and JavaScript — but deliberately kept lean.

- **HTML** — The page structure uses proper semantic tags (`<nav>`, `<footer>`, correct heading order). This matters for screen readers and search engines, not just appearance.
- **CSS** — Split into two files: a layout engine carried over from the original site builder (`vendor.min.css`), and a custom stylesheet (`index.css`) that handles all the visual decisions made during this project.
- **Fonts** — Playfair Display (headings) and Roboto (body text) are loaded from the project's own files rather than fetched from Google's servers on every visit. Better privacy, faster load.
- **JavaScript** — One small file, `refactored.js`, handles four things: the mobile menu toggle, smooth scrolling when you click a nav link, highlighting the active nav item as you scroll, and keeping the navigation bar pinned to the top. No libraries, no external dependencies.

---

## How GitHub Copilot Assisted This Refactor

The site began as a direct export from a website builder. That kind of export gets the job done visually, but leaves behind a lot of bloat — code the builder needs but a standalone site doesn't. The total download weight was around **3.3 MB**, most of it JavaScript the page didn't actually need.

Copilot (running in agent mode, able to read and edit files autonomously) worked through the cleanup in stages:

**Fixing the basics**  
Several links pointed to the wrong places on the page, and a few skill names had typos baked into the original content. External links were also missing a small but important security attribute that prevents linked pages from accessing your browser session.

**Tidying up the styles**  
The original HTML had visual settings (colours, font sizes) written directly onto individual elements — over 40 of them. Copilot moved these into named, reusable CSS classes. Nothing changed visually; it just became much easier to maintain.

**Replacing the JavaScript**  
The builder had bundled a 772 KB JavaScript file to power basic interactions like smooth scrolling and a sticky header. Copilot rewrote all of it from scratch in 168 lines of standard JavaScript, then deleted the original bundle. That's roughly a **98% reduction** in script size.

**Accessibility improvements**  
Images were missing descriptions, headings were skipping levels (which confuses assistive technology), and the footer was marked up as a generic container. Each of these was corrected.

**Cleaning up leftover files**  
The export included icon fonts and image assets that weren't used anywhere on the page (~144 KB). These were removed, and the folder structure was reorganised so each file type lives somewhere logical.

**UI fixes**  
A few visual bugs surfaced during review: the navigation bar would briefly flicker when scrolling (caused by a CSS animation re-firing unnecessarily), hovering over nav links made them invisible (the hover colour was set to the same shade as the background), and hovering over the About Me text turned it white (a leftover link wrapper from the builder was passing its hover style down to all the text inside it). Each was traced to its root cause and fixed.
