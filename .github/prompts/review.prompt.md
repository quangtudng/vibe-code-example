---
description: "Review code for bugs, security issues, and improvements. Works on the current file or a selection."
agent: "agent"
tools: [read, search]
---

Review the provided code and report:

1. **Bugs**: Anything that would cause incorrect behavior or crashes.
2. **Security**: Input validation gaps, XSS risks, exposed secrets, insecure patterns.
3. **Performance**: Unnecessary loops, repeated DOM queries, missing cleanup.
4. **Readability**: Confusing naming, overly complex logic, missing context.

For each finding:
- State what the issue is (one sentence).
- Show the relevant code snippet.
- Suggest a fix.

If the code looks good, say so — don't invent problems. Keep the review concise and actionable.
