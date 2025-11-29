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

## Key Standards

### I. Digital Twin Workstation Specifications
Each student workstation must meet demanding computational requirements: NVIDIA RTX 4070 Ti (12GB VRAM) or higher GPU (preferably RTX 3090/4090 with 24GB VRAM), Intel Core i7 (13th Gen+) or AMD Ryzen 9 CPU, 64 GB DDR5 RAM (32GB absolute minimum), and Ubuntu 22.04 LTS as the operating system.

### II. Physical AI Edge Kit Components
Essential edge computing hardware includes: NVIDIA Jetson Orin Nano (8GB) or Orin NX (16GB) for on-device inference, Intel RealSense D435i or D455 for vision (RGB/Depth data), a generic USB IMU for balance, and a ReSpeaker USB Mic Array v2.0 for voice interface.

### III. Sim-to-Real Deployment Protocol
Training of AI models will primarily occur in cloud-based instances (e.g., AWS RoboMaker or NVIDIA Omniverse Cloud). For physical deployment, trained models (weights) must be downloaded and flashed to local Jetson kits to mitigate latency issues and ensure safe control of real robots. Direct physical robot control from cloud instances is prohibited.

### IV. Software Stack Consistency
All development and course content must adhere to a consistent software stack, including ROS 2 (Humble/Iron) native to Linux, NVIDIA Isaac Sim (requiring RTX capabilities), Gazebo for physics simulation, and Unity for high-fidelity rendering and human-robot interaction.

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

### I. Core Deliverables Achievement
Successful completion requires achieving the base functionality: a fully functional AI/Spec-Driven Book deployed to GitHub Pages and an Integrated RAG Chatbot capable of answering book-related questions, including those based on user-selected text. This constitutes 100 points of the total score.

### II. Bonus Feature Implementation
Attainment of bonus points (up to 50 each) through:
- Creation and effective use of reusable intelligence via Claude Code Subagents and Agent Skills.
- Successful implementation of Signup and Signin using Better-Auth, incorporating user background questions for content personalization.
- Functional content personalization in chapters for logged-in users.
- Functional Urdu translation of content in chapters for logged-in users.

### III. Learning Outcomes Validation
Demonstrated mastery of all specified learning outcomes, including understanding Physical AI, proficiency in ROS 2, robot simulation, NVIDIA Isaac development, humanoid robot design, and integration of GPT models for conversational robotics.

### IV. Assessment Completion and Performance
Successful completion of all course assessments: ROS 2 package development project, Gazebo simulation implementation, Isaac-based perception pipeline, and the Capstone project (simulated humanoid robot with conversational AI).

## Governance

This Constitution establishes the foundational principles, standards, and success criteria for the Hackathon I: Physical AI & Humanoid Robotics Textbook project. All development, design, and operational activities must align with these directives.

**Amendment Procedure**: Any amendments to this Constitution require a formal proposal, review, and approval by the core project team. Documentation of proposed changes, rationale, and potential impacts on dependent artifacts is mandatory.

**Versioning Policy**: This Constitution will adhere to Semantic Versioning (MAJOR.MINOR.PATCH).
- **MAJOR**: Backward incompatible governance or principle removals/redefinitions.
- **MINOR**: New principles/sections added or materially expanded guidance.
- **PATCH**: Clarifications, wording, typo fixes, non-semantic refinements.

**Compliance Review**: Regular reviews will be conducted to ensure ongoing compliance with these principles, standards, and criteria. Deviations must be justified and documented.

**Escalation Path**: Unresolved conflicts or non-compliance issues will be escalated to the project leads for mediation and final decision.

**Documentation**: All key decisions, particularly those impacting project architecture or governance, must be documented as Architectural Decision Records (ADRs).

**Version**: 1.0.1 | **Ratified**: 2025-11-29 | **Last Amended**: 2025-11-29
