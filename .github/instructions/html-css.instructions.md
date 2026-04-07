---
description: "Use when editing HTML pages or CSS stylesheets. Covers semantic markup, accessibility, responsive design, and CSS organization."
applyTo: ["**/*.html", "**/*.css"]
---

# HTML & CSS Conventions

## HTML
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` — not `<div>` for everything.
- Every `<img>` must have a meaningful `alt` attribute. Decorative images use `alt=""`.
- Interactive elements (`<a>`, `<button>`) need accessible labels. Links should describe their destination.
- Use `<button>` for actions and `<a>` for navigation. Don't use `<a href="#">` as a button.

## CSS
- Prefer classes over IDs for styling. Use IDs only when targeting builder-generated elements.
- Mobile-first: write base styles for small screens, then add `min-width` media queries for larger ones.
- Avoid `!important` unless overriding third-party/builder CSS that you can't change.
- Group related properties: layout (display, flex) → sizing (width, padding) → visual (color, background).

## Responsive Design
- Test at three widths: ~375px (phone), ~768px (tablet), ~1200px (desktop).
- Use relative units (`rem`, `%`, `vh/vw`) over fixed pixels where possible.
- Ensure touch targets are at least 44×44px on mobile.

---

### This Project (project-specific)

> Replace this section when copying to another repository.

- Builder-generated IDs (like `#ed-1770791745`) are targeted in `css/index.css`.
- Never edit `css/vendor.min.css` — add overrides in the custom section of `css/index.css` (after line ~29500).
- The inline `<style>` block in `index.html` `<head>` is builder-generated. Only edit it to remove conflicts.
- Breakpoints: mobile ≤ 575px, tablet ≤ 975px, desktop ≥ 976px.
