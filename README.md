<div align="center">

# WatchWise

**A full-stack movie discovery and tracking platform with AI-powered recommendations.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

</div>

## 🌟 Highlights

- AI-powered movie recommendations using Google's Gemini integration.
- Integrated movie discovery and metadata fetching via TMDB API.
- Personalized taste profile generation based on user watch history and ratings.
- Full-featured watch management including watchlists and detailed watch logs.
- Secure user authentication and session management powered by Supabase.
- Modern, responsive interface built with React 19, Vite, and Tailwind CSS.

## ℹ️ Overview

WatchWise is a comprehensive movie management application that allows users to build personal taste profiles, manage watchlists, and discover new content. By integrating with the TMDB API for metadata and Google's Gemini for personalized suggestions, the project provides a centralized hub for tracking watch history and finding cinema that matches individual preferences.

## 🚀 Usage

To run the project, users typically start the FastAPI backend to handle data processing and AI logic, and the Vite development server for the React frontend. Once authenticated via the Supabase-backed login, users can search for movies, add them to their watchlist, log completed viewings, and request recommendations through the dashboard.

## 🏗️ Architecture

The project follows a decoupled client-server architecture. The frontend is a React SPA using Vite and Axios for API communication. The backend is built with FastAPI, utilizing a modular router system for discovery and recommendations. It employs an SQLite database for local storage, scripts for movie embedding, and external service integrations for authentication and movie metadata.

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
