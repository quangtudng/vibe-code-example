# GitHub Copilot Customization — Beginner Guide

This folder teaches Copilot how to work with your project. Each file type has a
different job. Together, they give Copilot context, rules, and reusable workflows.

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

## The 5 Core Concepts

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

## Try It Now

1. **Ask a question** — Copilot already follows `copilot-instructions.md`. Just open a file and chat.
2. **Type `/review`** — runs a code review on your current file.
3. **Type `/explain`** — explains selected code in plain language.
4. **Pick `@reviewer`** — a read-only reviewer that suggests but never edits.
5. **Type `/quick-audit`** — checks a file for accessibility, security, and performance issues.

---

## Adding Your Own

Each type follows the same pattern: create a file in the right folder with the right extension.

| Type | Create in | Extension | Key field |
|------|-----------|-----------|-----------|
| Instruction | `instructions/` | `.instructions.md` | `description` and/or `applyTo` |
| Prompt | `prompts/` | `.prompt.md` | `description`, optional `tools` |
| Agent | `agents/` | `.agent.md` | `description`, `tools` |
| Skill | `skills/<name>/` | `SKILL.md` | `name`, `description` |

Look at the existing files in each folder for working examples you can copy and modify.

---

## Beyond the Basics

These exist but are more advanced — explore them once you're comfortable with the above:

- **Hooks** (`.github/hooks/*.json`): Run scripts at lifecycle events (e.g., auto-lint after edits).
- **MCP Servers**: Connect Copilot to external tools (databases, CI, issue trackers). Configured in VS Code settings.

---

## Tips

- **One concern per file.** Don't mix testing rules with styling rules.
- **Descriptions matter.** The `description` field is how Copilot discovers your files — use keywords.
- **Start small.** Even just `copilot-instructions.md` alone makes a noticeable difference.
- **Commit this folder.** Your team shares the same Copilot behavior through version control.
