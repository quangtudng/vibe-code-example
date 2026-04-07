---
description: "Use when reviewing code quality, refactoring, cleaning up code, or improving readability. Covers naming, structure, error handling, and maintainability."
---

# Code Quality Guidelines

## Naming
- Variables and functions should describe what they hold or do: `getUserName()`, not `fn1()`.
- Booleans should read like questions: `isLoading`, `hasPermission`, `canEdit`.
- Avoid abbreviations unless they're universally understood (`url`, `id`, `html`).

## Structure
- Keep functions under ~30 lines. If it's longer, it probably does too much.
- Avoid deeply nested `if/else` — use early returns to flatten logic.
- Group related code together. Separate concerns into different functions or files.

## Error Handling
- Handle errors at system boundaries (user input, API calls, file reads).
- Don't add try/catch around code that can't realistically fail.
- Show meaningful error messages — not just "Something went wrong."

## Readability
- Code should read top-to-bottom like a story. Avoid jumping around.
- If a block of code needs a comment to explain *what* it does, consider renaming variables or extracting a function instead.
- Comments should explain *why*, not *what*. The code itself should explain *what*.

## Simplicity
- Don't create abstractions for things that happen once.
- Don't add features "just in case." Solve the problem at hand.
- Prefer standard library functions over custom implementations.
