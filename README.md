# MCDA 5550 – PWA Assignment: Task Planner & Motivator

A Progressive Web App (PWA) that combines task management with motivational content. This application allows users to manage to-do lists with deadlines while providing a random motivational quote on load. It is designed to work reliably offline using Service Workers and IndexedDB.

## 🚀 Features
- **Task Management**: Add, view, and delete tasks with specific deadlines.
- **Motivational Quotes**: Fetches a random quote from the DummyJSON API on load, with a hardcoded fallback for offline resiliency.
- **Visual Deadline Indicators**: Tasks are color-coded based on urgency:
  - 🔴 **Red**: Deadline has passed.
  - 🟠 **Orange**: Deadline is less than 3 days away.
  - 🟡 **Yellow**: Deadline is within a week.
- **PWA Capabilities**: 
  - Installable on mobile and desktop.
  - Works offline via Service Worker caching.
  - Temporary toast notifications for Online/Offline status changes.
- **Data Persistence**: Uses **IndexedDB** (via Dexie.js) to ensure tasks persist across reloads and restarts.

## 🛠️ Technical Stack
- **Framework**: React with Vite.
- **Language**: TypeScript for type-safe development.
- **State Management**: React Hooks (`useState`, `useEffect`).
- **Database**: IndexedDB with **Dexie.js**.
- **PWA Plugin**: `vite-plugin-pwa` for manifest and service worker generation.

## 📦 Setup Instructions
1. **Clone the repository**:
   ```Bash
   git clone git@github.com:jeevandhakal/pwa-assignment.git
   ```

2. Install dependencies:
   ```Bash
   pnpm install
   ```

3. Run in Development mode:
   ```Bash
   pnpm 
   ````

4. Build and Preview (To test PWA functionality):

   ```Bash
   pnpm build
   pnpm preview
   ```

## 📝 Assumptions & External Resources

- API: Used https://dummyjson.com/quotes/random for motivational quotes to ensure better CORS compatibility than other providers.


- Asset Generation: PWA icons (192x192 and 512x512) were generated using favicon.io.


- Offline Logic: Assumed the user needs a clear but non-intrusive indicator; implemented a top-right "Toast" notification that disappears after 4 seconds.


- Logic: Deadline color calculations based on local system time.

## 👨‍💻 Author
- Jeevan Dhakal

- Student ID: #A00494615