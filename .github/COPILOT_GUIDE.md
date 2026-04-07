# GitHub Copilot Customization — Beginner Guide

This folder teaches Copilot how to work with your project. Each file type has a
different job. Together, they give Copilot context, rules, and reusable workflows.

---

## Table of contents

- [Introduction](#introduction)
- [Core Concepts](#core-concepts)
- [Practice it yourself](#practice-it-yourself)
- [How They Connect](#how-they-connect)
- [Beyond the Basics](#beyond-the-basics)
- [Tips](#tips)

---

## Folder Map

```
.github/
├── copilot-instructions.md          # Always-on rules for every conversation
├── instructions/
│   ├── code-quality.instructions.md # Loaded when Copilot detects a relevant task
│   └── html-css.instructions.md     # Auto-loaded when you edit .html or .css files
├── prompts/
│   ├── review.prompt.md             # Type /review in chat → code review
│   └── explain.prompt.md            # Type /explain in chat → plain-language explanation
├── agents/
│   └── reviewer.agent.md            # Pick @reviewer → read-only code reviewer
└── skills/
    └── quick-audit/
        └── SKILL.md                 # Type /quick-audit → accessibility & security check
```

---

## Core Concepts

### 1. Workspace Instructions (`copilot-instructions.md`)
**Always loaded.** Project rules that apply to every Copilot conversation — coding
standards, architecture notes, team conventions. Think of it as "the house rules."

### 2. File Instructions (`instructions/*.instructions.md`)
**Loaded when needed.** Two modes:
- **On-demand**: Copilot reads the `description` and loads the file when the task matches.
  Example: `code-quality.instructions.md` activates during refactoring or code review tasks.
- **Explicit**: Uses `applyTo` to auto-load for specific file types.
  Example: `html-css.instructions.md` loads whenever you edit `.html` or `.css` files.

### 3. Prompts (`prompts/*.prompt.md`)
**You trigger them.** Type `/` in Copilot Chat, pick a prompt, and it runs a focused task.
Like a recipe — you choose when to cook it. Good for one-shot tasks like reviews or explanations.

### 4. Custom Agents (`agents/*.agent.md`)
**Specialized personas.** Each agent has a role and limited tools. Pick one from the `@` menu.
Example: `@reviewer` can read and search code but **cannot** edit files — safe for reviews.

### 5. Skills (`skills/<name>/SKILL.md`)
**Multi-step workflows.** More structured than prompts — a skill is a mini playbook with
step-by-step procedures. Can include helper scripts and reference docs in its folder.
Also appears as a `/` command in chat.

> **Prompts vs Skills?** Prompt = one focused task. Skill = multi-step procedure with assets.

---

## How They Connect

```
You open a file and chat with Copilot
    │
    ├─ copilot-instructions.md always loads (project rules)
    │
    ├─ Matching .instructions.md files load automatically (applyTo)
    │   or when Copilot detects relevance (description)
    │
    ├─ You type / → pick a prompt or skill → it runs
    │
    └─ You pick @agent → that persona takes over
```

---


## Practice it yourself

Try this short hands-on loop to learn the workflow without getting overwhelmed:

1. Open a file and ask Copilot a question — `copilot-instructions.md` is already in effect.
2. Select a code block and run `/explain` to get a plain-language summary.
3. Make one small, safe change (text, spacing, or color), save, then run `/review` on that file.
4. Fix any high-priority suggestions and run `/quick-audit` to check accessibility and security basics.

Copying this setup to another project:

- Copy the `.github/` folder or only the pieces you need (for example `copilot-instructions.md` and `prompts/`).
- Edit the `This Project` section inside `copilot-instructions.md` to reflect the new project's specifics.
- Use `applyTo` in `instructions/` files to scope rules to file types in the new repo.

Why this is beginner-friendly:

- Everything here is passive and read-only until you intentionally add scripts or hooks.
- Start with `copilot-instructions.md` and one prompt (`/explain`) before adding more files.

---

## Beyond the Basics

These features exist but are more advanced — explore them once you're comfortable with the above:

- **Hooks** (`.github/hooks/*.json`): Run shell scripts at lifecycle events (e.g., auto-lint after edits).
- **MCP Servers**: Connect Copilot to external tools (databases, CI, issue trackers). Configured in VS Code settings.

---

## Tips

- **One concern per file.** Don't mix testing rules with styling rules.
- **Descriptions matter.** The `description` field is how Copilot discovers your files — use keywords.
- **Start small.** Even just `copilot-instructions.md` alone makes a noticeable difference.
- **Commit this folder.** Your team shares the same Copilot behavior through version control.
