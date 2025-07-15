# MERN App Testing & Debugging Documentation

## 🧪 Testing Strategy

### 1. Unit Testing
- **Tools:** Jest (server & client), React Testing Library (client)
- **Coverage:**
  - Utility functions (e.g., `generateToken`)
  - React components (e.g., `Button`, custom hooks like `useCounter`)
  - Express middleware (e.g., `logger`)
- **How to run:**
  - Server: `pnpm test:unit` in `/server`
  - Client: `pnpm test:unit` in `/client`

### 2. Integration Testing
- **Tools:** Jest, Supertest (server), React Testing Library (client)
- **Coverage:**
  - API endpoints (e.g., `/api/posts`)
  - Database operations (using `mongodb-memory-server` for isolated test DB)
  - React components that interact with APIs (e.g., `PostList`)
- **How to run:**
  - Server: `pnpm test:integration` in `/server`
  - Client: `pnpm test:integration` in `/client`

### 3. End-to-End (E2E) Testing
- **Tools:** Cypress
- **Coverage:**
  - Critical user flows (e.g., homepage load, form submission)
  - Navigation and routing
  - Error handling and edge cases
- **How to run:**
  - `pnpm test:e2e` in `/client` (opens Cypress UI)

### 4. Code Coverage
- **How to check:**
  - Run `pnpm test --coverage` in `/server` and `/client`
  - Coverage threshold: ≥70% for statements, functions, lines (see `jest.config.js`)
  - Include screenshots of coverage summary in your submission

---

## 🐞 Debugging Techniques

### 1. Server-Side Logging
- **Tool:** [morgan](https://www.npmjs.com/package/morgan)
- **Usage:** Logs HTTP requests in the Express app (see `server/app.js`).

### 2. Global Error Handler (Express)
- **Usage:** Catches and logs errors, returns JSON error response (see `server/app.js`).

### 3. React Error Boundary
- **File:** `client/src/components/ErrorBoundary.jsx`
- **Usage:** Wraps app/components to catch and display UI errors.

### 4. Browser Developer Tools
- **Usage:** Inspect elements, debug JS, monitor network, and profile performance in Chrome/Edge/Firefox DevTools.

### 5. Performance Monitoring
- **Client:** Use React Profiler, Lighthouse, browser DevTools
- **Server:** Use logging, Node.js profilers, and monitor memory/CPU usage

---

## 📸 Screenshots
- [ ] Add screenshots of your test coverage reports here (after running `pnpm test --coverage`)

---

## ✅ How to Run Tests

### Server
```sh
cd server
pnpm install
pnpm test           # Run all tests
pnpm test:unit      # Run unit tests
pnpm test:integration # Run integration tests
```

### Client
```sh
cd client
pnpm install
pnpm test           # Run all tests
pnpm test:unit      # Run unit tests
pnpm test:integration # Run integration tests
pnpm test:e2e       # Run Cypress E2E tests
```

---

## 📝 Notes
- All tests are self-contained and use in-memory/mock data where possible.
- Debugging tools and error boundaries are implemented for both client and server.
- Update and expand tests as you add more features!