# Copilot Instructions for carepoint-doctor-booking-system

## Project Overview
- **Monorepo** with `client/` (React + Vite frontend) and `server/` (Node.js backend)
- Purpose: Doctor appointment booking web application
- Key directories: 
  - `client/src/components/` — React UI components
  - `client/src/pages/` — Page-level React components (e.g., Home, Doctors, Appointment)
  - `server/` — Express server, database connection

## Architecture & Data Flow
- **Frontend**: React (with Vite, Tailwind CSS)
  - Entry: `client/src/main.jsx`, root: `App.jsx`
  - Navigation: `Navbar.jsx` in `components/`
  - Pages in `pages/` directory, each for a major route
  - State/context: `context/` (details to be discovered in code)
- **Backend**: Node.js (likely Express)
  - Entry: `server/server.js`
  - Database connection: `server/db.js`
  - API endpoints: defined in `server/server.js` (expand as needed)

## Developer Workflows
- **Frontend**
  - Install deps: `cd client && npm install`
  - Start dev server: `cd client && npm run dev`
  - Build: `cd client && npm run build`
- **Backend**
  - Install deps: `cd server && npm install`
  - Start server: `cd server && node server.js`

## Conventions & Patterns
- **Component structure**: Functional React components, grouped by feature (pages, shared components)
- **Styling**: Tailwind CSS via `index.css` and `tailwind.config.js`
- **Routing**: (Check `App.jsx` for React Router or similar)
- **API calls**: (Look for fetch/axios in components/pages)
- **No TypeScript**: Project is JavaScript-only

## Integration Points
- **Frontend ↔ Backend**: API requests from React to Express endpoints
- **Database**: Connection managed in `server/db.js`

## Examples
- To add a new page: create a file in `client/src/pages/`, import and add route in `App.jsx`
- To add a new API: define route in `server/server.js`, connect to DB via `db.js`

## References
- See `README.md` in root and `client/` for more details
- Key files: `client/src/App.jsx`, `server/server.js`, `server/db.js`

---

*Update this file as project structure or conventions evolve. Focus on actionable, project-specific guidance for AI agents.*
