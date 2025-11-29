<!--
Sync Impact Report:
Version change: 1.0.0 -> 1.0.1
Modified principles: None
Added sections: ORIGINALITY & PLAGIARISM RULES, AI ETHICAL USE RULES, Content Analysis and Revision, Code Quality & Documentation Standards, Version Control & Collaboration Guidelines
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md: ⚠ pending
- .specify/templates/spec-template.md: ⚠ pending
- .specify/templates/tasks-template.md: ⚠ pending
- .specify/templates/commands/*.md: ⚠ pending
Follow-up TODOs: None
-->
# Hackathon I: Physical AI & Humanoid Robotics Textbook Constitution

## Core Principles

### I. AI/Spec-Driven Book Creation
Every aspect of the book creation process, from content generation to deployment, must leverage AI and adhere to a spec-driven methodology. The book will be developed using Docusaurus and deployed to GitHub Pages, with Claude Code and Spec-Kit Plus as core tools for content generation and management.

### II. Integrated RAG Chatbot Development
A Retrieval-Augmented Generation (RAG) chatbot will be seamlessly embedded within the published book. This chatbot must utilize OpenAI Agents/ChatKit SDKs, FastAPI, Neon Serverless Postgres, and Qdrant Cloud Free Tier. It must be capable of accurately answering user questions based on the book's content, including information derived from user-selected text.

### III. Enhanced User Engagement Features
The platform will support advanced user engagement features, including a secure Signup and Signin system using Better-Auth. This system will collect user background information (software and hardware) to enable personalized content delivery. Additionally, the platform will offer content personalization and Urdu translation capabilities at the chapter level for logged-in users.

### IV. Physical AI & Embodied Intelligence Focus
The project's core focus is to bridge digital AI with physical world application, concentrating on AI systems that operate in reality and comprehend physical laws. This involves designing, simulating, and deploying humanoid robots capable of natural human interactions.

### V. Core Platform Integration
The development and educational content will heavily rely on and integrate ROS 2, Gazebo, and NVIDIA Isaac for robot control, simulation, and advanced AI perception/training respectively.

### VI. Vision-Language-Action (VLA) Convergence
The project will emphasize the convergence of Large Language Models (LLMs) and Robotics, specifically integrating tools like OpenAI Whisper for voice-to-action commands and LLMs for cognitive planning to translate natural language into robotic actions.

### VII. ORIGINALITY & PLAGIARISM RULES
All content created for the textbook must be original. If external sources are used, they must be properly cited according to academic standards. Plagiarism will not be tolerated and will result in immediate removal of content and potential disciplinary action. AI-generated content must be reviewed for originality and accuracy before inclusion, and its generation process transparently documented where relevant.

### VIII. AI ETHICAL USE RULES
The use of AI tools in content creation and development must adhere to ethical guidelines. This includes ensuring fairness, avoiding bias in AI-generated text, maintaining data privacy, and being transparent about the role of AI in generating specific content. AI systems must be used responsibly and not for deceptive or harmful purposes.


## Content Analysis and Revision

### I. Continuous Improvement
The textbook content will undergo continuous review and improvement. Feedback from instructors, students, and subject matter experts will be regularly incorporated to enhance clarity, accuracy, and relevance.

### II. Technical Accuracy & Verifiability
All technical information, code examples, and theoretical explanations must be rigorously verified for accuracy. Complex concepts should be presented in a clear, concise, and verifiable manner.

### III. Peer Review & Editorial Process
Content will be subject to a peer review process to ensure quality, pedagogical effectiveness, and adherence to editorial standards before publication or updates.

## Code Quality & Documentation Standards

### I. Code Readability & Maintainability
All code examples and implementations must follow established coding conventions (e.g., PEP 8 for Python). Code should be clean, well-structured, and easily understandable.

### II. Inline Comments & Docstrings
Complex logic within code examples must be accompanied by clear, concise inline comments. All functions, classes, and modules should include comprehensive docstrings explaining their purpose, arguments, and return values.

### III. Automated Linting & Formatting
Automated tools for linting (e.g., Flake8, ESLint) and code formatting (e.g., Black, Prettier) will be used to maintain consistent code style and identify potential issues.

## Version Control & Collaboration Guidelines

### I. Git Workflow & Branching Strategy
All development will follow a structured Git workflow (e.g., GitFlow or GitHub Flow). A clear branching strategy will be enforced, typically involving feature branches, development branches, and a stable main/master branch.

### II. Pull Request (PR) Review Process
All code contributions must be submitted via Pull Requests and undergo a thorough review by at least one other team member. PRs must include clear descriptions, link to relevant tasks/issues, and pass automated checks (tests, linting).

### III. Commit Message Standards
Commit messages must be clear, concise, and follow a conventional format (e.g., Conventional Commits). Each commit should represent a single logical change.

## Success Criteria

- free from plagiarism 
- no ai content 
- easy to read 
- understand for beginners

## Governance

This Constitution establishes the foundational principles, standards, and success criteria for the Hackathon I: Physical AI & Humanoid Robotics Textbook project. All development, design, and operational activities must align with these directives.

**Amendment Procedure**:
 Any amendments to this Constitution require a formal proposal, review, and approval by the core project team. Documentation of proposed changes, rationale, and potential impacts on dependent artifacts is mandatory.

**Versioning Policy**: This Co
nstitution will adhere to Semantic Versioning (MAJOR.MINOR.PATCH).
- **MAJOR**: Backward incompatible governance or principle removals/redefinitions.
- **MINOR**: New principles/sections added or materially expanded guidance.
- **PATCH**: Clarifications, wording, typo fixes, non-semantic refinements.

**Compliance Review**: Regular reviews will be conducted to ensure ongoing compliance with these principles, standards, and criteria. Deviations must be justified and documented.

**Escalation Path**: Unresolved conflicts or non-compliance issues will be escalated to the project leads for mediation and final decision.

**Documentation**: All key decisions, particularly those impacting project architecture or governance, must be documented as Architectural Decision Records (ADRs).

**Version**: 1.0.1 | **Ratified**: 2025-11-29 | **Last Amended**: 2025-11-29
