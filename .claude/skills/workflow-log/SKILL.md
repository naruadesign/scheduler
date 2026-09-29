---
name: workflow-log
description: How to record development progress in docs/WORKFLOW.md (checklist, dated log entries, decisions, open issues). Use after every completed unit of work and before ending a session.
---

# Keeping docs/WORKFLOW.md current

`docs/WORKFLOW.md` has four parts. Update them in this order after each completed unit of work:

1. **Checklist** - tick `[x]` only for items that passed `verify-build`. Leave `[ ]` for anything unverified or partial.
2. **Log** - add an entry at the TOP of the log (newest first):
   `### YYYY-MM-DD - <short title>` then bullets: what changed (files), how it was verified (commands + result), follow-ups.
3. **Decisions** - append any choice made that is not obvious from the code (why, alternatives rejected).
4. **Open issues / caveats** - things not done, content that could not be fetched, known differences from the original reference site this project was modeled on.

Rules:
- Use the real date, not a placeholder.
- Be factual: if a check failed or was skipped, write that.
- Do not delete old log entries.
