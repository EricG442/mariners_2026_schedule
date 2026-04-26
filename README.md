# Mariners 2026 Schedule Tracker

![React](https://img.shields.io/badge/React-TypeScript-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
[![Deployment](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue?logo=github)](https://ericg442.github.io/mariners-2026-schedule/)

A lightweight **Seattle Mariners game tracker** built with React + Typescript that displays upcoming, live and final MLB games in the 2026 Season, with broadcast information and score tracking.

---

---

---

## Features
- 📅 Upcoming, live, and past Mariners games
- 🏟️ Home / away game indicators
- 📺 Broadcast network labels (custom override layer)
- ⚾ Live score tracking
- 🔴 Live game indicator
- 📊 Season record (wins / losses / win %)
- ⏰ Start time display for upcoming games
- 🎯 Clean, responsive card-based UI

---

## Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- MLB Stats API (Public data source)

---

---

## Data Source

This project uses the **MLB Stats API** to fetch:
- Game schedules
- Live game status
- Scores

As well as a custom JSON override data layer with broadcast info keyed to each game

### App Architecture
**Data Flow**
1. Fetch MLB Schedule
2. Normalize API response -> Game type
3. Apply JSON overrides
4. Compute:
    - Game status (upcoming / live / final)
    - Mariners vs opponents mapping

---

## Project Structure
```
src/
├── components/
│   └── GameRow.tsx
├── hooks/
│   └── useGames.ts
├── utils/
│   ├── getGameStatus.ts
│   ├── getTeams.ts
│   └── getGameView.ts
├── types/
│   └── Game.ts
├── data/
│   └── broadcastOverrides.json
```