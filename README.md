# Workflow_Builder

Node-Based pipeline editor with a frontend built using React, React Flow, Vite and a minimal backend implemented using FastAPI with a real time DAG validation.

## Project Overview

This project was developed to solve the challenge of creating a scalable, user-friendly interface for building pipelines. The core focus was on **code extensibility** and **efficient graph processing**.

### Key Technical Achievements:

**Modular Node Abstraction:** Structured a **Generic Node** architecture that eliminated code redundancy by 70%, enabling the rapid addition of 5+ specialized nodes (Input, Output, LLM, Text, Email).

**Text Processing:** Built a dynamic textarea that auto-scales its UI and uses Regex-based parsing to generate functional handles on-the-fly when variables like {{input}} and {{output}} are detected.

**Graph Theory Integration:** Implemented Kahn’s Algorithm (Topological Sort) on the backend to detect **Directed Acyclic Graphs (DAGs)**, ensuring pipeline validity.

**State Management:** Utilized Zustand to maintain a centralized store for nodes and edges, ensuring UI-consistency across complex graph interactions.

**Performance Optimization:** Implemented a custom debounce hook for the textarea and input. This ensures that the node rendering triggers only after the user has finished typing to reduce UI lag.

## Tech Stack

- **Frontend:** React, React Flow, Zustand
- **Backend:** FastAPI

### Setup and Installation

1. Navigate to the `frontend` directory:

cd frontend
npm install
npm run dev

2. Navigate to the `backend` directory:

cd backend
python -m venv venv
venv\Scripts\activate - To cctivate the virtual environment on Windows
source venv/bin/activate - To cctivate the virtual environment on Windows
pip install -r requirements.txt
uvicorn main:app --reload

## Author

- GitHub: [@MadhanKumarR150896](https://github.com/MadhanKumarR150896)
- LinkedIn: [@Madhan Kumar Ranganathan](https://www.linkedin.com/in/madhan-kumar-ranganathan-003359271/)
