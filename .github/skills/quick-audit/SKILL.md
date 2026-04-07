---
name: quick-audit
description: "Audit a file for accessibility, security, and performance issues. Use when checking code quality before deployment, during reviews, or when cleaning up a page."
---

# Quick Audit

Run a focused audit on a file to catch common issues before they reach production.

## When to Use
- Before deploying or pushing changes.
- When reviewing someone else's code.
- When cleaning up legacy or builder-generated code.
- When you want a quick sanity check on a page or component.

## Procedure

### Step 1 — Read the file
Read the target file completely. Understand what it does before looking for problems.

### Step 2 — Check accessibility (HTML files)
- Are images missing `alt` attributes?
- Do interactive elements (links, buttons) have accessible labels?
- Is the heading hierarchy logical (`h1` → `h2` → `h3`, no skipped levels)?
- Are form inputs associated with `<label>` elements?
- Is color contrast sufficient for text readability?

### Step 3 — Check security
- Are there inline event handlers (`onclick`, `onerror`) that could enable XSS?
- Are external resources loaded over HTTPS?
- Are there hardcoded secrets, API keys, or credentials?
- Are user inputs sanitized before use in DOM manipulation?

### Step 4 — Check performance
- Are images optimized (reasonable file sizes, appropriate formats)?
- Are there unnecessary DOM queries inside loops?
- Are event listeners cleaned up or using passive mode where appropriate?
- Is CSS loaded in the `<head>` and JS deferred or at the end of `<body>`?

### Step 5 — Report findings
Present results in a table:

| Priority | Category | Issue | Location | Suggested Fix |
|----------|----------|-------|----------|---------------|
| High     | Security | ...   | Line X   | ...           |
| Medium   | A11y     | ...   | Line Y   | ...           |
| Low      | Perf     | ...   | Line Z   | ...           |

If no issues are found in a category, skip it — don't report "no issues found" for every category.
