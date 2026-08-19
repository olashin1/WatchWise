<div align="center">

# WatchWise

**A personalized movie discovery and tracking platform powered by AI recommendations.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=fff)](#)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff)](#)
[![FastAPI](https://img.shields.io/badge/FastAPI-009485.svg?logo=fastapi&logoColor=white)](#)

</div>

## Highlights

- AI-driven movie recommendations tailored to unique user taste profiles.
- Seamless movie discovery and metadata integration via the TMDB API.
- Secure user authentication and session management powered by Supabase.
- Unified dashboard for managing active watchlists and logging viewing history.
- Automated scripts for movie seeding and vector-based embedding generation.

## Overview

WatchWise is a full-stack application designed to help users manage their cinema-watching journey. By integrating with The Movie Database (TMDB) for extensive metadata and leveraging Google Gemini for intelligent recommendation logic, the platform allows users to build personal taste profiles, maintain watchlists, and log their viewing history. It serves as a centralized hub for discovering new content tailored specifically to individual user preferences.

## Usage

Users interact with the platform via a React-based web interface to search for titles, manage their movie lists, and view AI-generated suggestions. The system requires a running FastAPI backend to handle data persistence and external API communication. Developers typically start the frontend using Vite and initialize the backend database using provided Python seeding scripts.

## Architecture

The project uses a decoupled client-server architecture consisting of a React SPA and a FastAPI backend. The frontend utilizes React Router for navigation and Axios for API requests, with Supabase managing authentication. The Python backend is organized into domain-specific routers for recommendations and lists, supported by a service layer that interacts with the TMDB and Gemini APIs and a database layer using SQLAlchemy for SQLite persistence.

## Tech Stack

| Category      | Technologies                   |
| ------------- | ------------------------------ |
| **Languages** | TypeScript, Python, JavaScript |

## Project Structure

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
