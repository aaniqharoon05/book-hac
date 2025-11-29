---
id: 0003
title: Explain Constitution
stage: general
date: 2025-11-29
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: unknown
command: /sp.phr
labels: ["constitution", "documentation", "explanation"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - none
tests:
 - none
---

## Prompt

what is constitution

## Response snapshot

In Claude Code, the "constitution" refers to a document that outlines the project's principles, including guidelines for code quality, testing, performance, security, and architecture. It is typically stored in the `.specify/memory/constitution.md` file.\n\nIts purpose is to:\n*   Define the fundamental principles and standards for the project.\n*   Serve as a reference for development guidelines and architectural decisions.\n*   Ensure consistency across the codebase by establishing clear expectations for all team members.\n\nYou can manage the project constitution using the `/sp.constitution` slash command, which allows you to create or update it from interactive inputs or provided principle inputs. Prompt History Records (PHRs) related to the constitution are stored under `history/prompts/constitution/`.

## Outcome

- ✅ Impact: Provided a clear explanation of the "constitution" in Claude Code.
- 🧪 Tests: none
- 📁 Files: none
- 🔁 Next prompts: none
- 🧠 Reflection: Successfully explained a core concept of Claude Code to the user.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
