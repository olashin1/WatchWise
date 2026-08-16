<div align="center">

# WatchWise

**A personalized movie discovery and recommendation platform driven by AI-powered taste profiling.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

</div>

## 🌟 Highlights

- AI-powered recommendations utilizing Gemini for personalized taste profiling
- Seamless authentication and session management integrated with Supabase
- Comprehensive movie data fetching through The Movie Database (TMDB) integration
- Interactive dashboard for managing watchlists, history, and movie discovery
- Modern frontend stack using React 19, TypeScript, and Tailwind CSS for a responsive UI
- Robust FastAPI backend with modular routing for discovery, logging, and recommendations

## ℹ️ Overview

WatchWise is a full-stack application that helps users manage their cinema viewing habits and discover new content. By integrating movie metadata from TMDB and leveraging AI services for taste profiling, the project provides a centralized hub for searching titles, maintaining a personal watchlist, and receiving curated recommendations based on viewing history.

## 🚀 Usage

Users interact with the platform through a React-based web interface, starting with an authentication flow via Supabase. Once logged in, users can use the dashboard to search for films, add titles to their watchlist, or log movies they have recently watched to refine their taste profile and generate new recommendations.

## 🏗️ Architecture

The project uses a decoupled client-server architecture. The frontend is a Vite-powered React application using React Router for navigation and Axios for API communication. The backend is built with FastAPI, organized into functional routers that interface with a database layer and external services for movie metadata and AI-driven analysis.

## 🛠️ Tech Stack

| Category | Technologies |
| --- | --- |
| **Languages** | TypeScript, Python, JavaScript |

## 📁 Project Structure

```text
WatchWise/
├── backend/
│   ├── db/
│   ├── routers/
│   ├── schemas/
│   ├── scripts/
│   └── services/
├── frontend/
│   ├── node_modules/
│   ├── public/
│   └── src/
└── README.md  # Project documentation
```
