# Project Guidelines

These instructions are automatically loaded for every Copilot interaction in this workspace.
They are split into two sections: **General Rules** (portable across any project) and
**This Project** (specific to this codebase — replace this section when copying to another repo).

---

## General Rules

### Code Style
- Write clean, readable code. Prefer clarity over cleverness.
- Use consistent naming: `camelCase` for variables/functions, `PascalCase` for classes/components.
- Keep functions short and focused — one function, one job.
- Remove dead code instead of commenting it out.

### Changes & Safety
- Read existing code before modifying it. Understand context first.
- Make the smallest change that solves the problem. Don't refactor unrelated code.
- Prefer editing existing files over creating new ones.
- Never delete files, drop databases, or force-push without explicit confirmation.

### Communication
- Be concise. Skip filler like "Sure!" or "Here's what I'll do."
- When proposing multi-step changes, list the steps first, then implement.
- If something is ambiguous, ask one focused question rather than guessing.

### Testing & Validation
- After editing code, verify it works (run linters, syntax checks, or tests if available).
- Mention any assumptions you made so the user can verify.

---

## This Project

> **Replace everything below this line** when copying to a different repository.

### Overview
Static single-page portfolio site. No build tools, no framework — just HTML, CSS, and vanilla JS.

### Tech Stack
- **HTML**: `index.html` — single page with sections (About, Skills, Projects, Footer)
- **CSS**: `css/vendor.min.css` (builder-generated, do not edit) + `css/index.css` (custom overrides)
- **JS**: `js/refactored.js` — menu toggle, smooth scroll, active link highlight
- **Fonts**: Self-hosted via `g/fonts.css` (Playfair Display + Roboto)

### Key Conventions
- Element IDs like `ed-1770791745` are builder-generated. Target them with ID selectors in `css/index.css`.
- All custom CSS goes in the section starting around line 29500 of `css/index.css` (after the vendor block).
- Never edit `css/vendor.min.css` — it contains builder-generated styles that will break if modified.
- The inline `<style>` block in `index.html` `<head>` contains per-element builder rules. Edit these only to remove conflicts, not to add new styles.

### Responsive Breakpoints
- Mobile: `max-width: 35.9375rem` (~575px)
- Tablet: `max-width: 60.9375rem` (~975px)
- Desktop: `min-width: 61rem`
