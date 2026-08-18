# JAAPEE — Javis 0.1

A local AI assistant built from scratch, running fully offline on a personal laptop.

## About

Javis is a personal project exploring how to build an AI assistant step by step — starting from plain keyword matching, then evolving into a real AI-powered chatbot using a locally-hosted language model.

## Features

- **Quick rules** — handles simple math (numbers, symbols, and word operators like "plus", "minus", "divided by") and common keyword-based responses (greetings, time, etc.) instantly without needing the AI model.
- **AI fallback** — for anything the quick rules can't handle, Javis asks a local AI model (Gemma 4, via Ollama) for a real generated response.
- **Web-based chat UI** — runs locally at `http://127.0.0.1:5000` with a simple chat bubble interface.

## Tech stack

- **Backend:** Python + Flask
- **AI model:** Gemma 4 (gemma4:e4b) via [Ollama](https://ollama.com)
- **Frontend:** HTML, CSS, JavaScript

## Project structure

JAAPEE/
app.py # Flask server
javis.py # Core chatbot logic (quick rules + AI fallback)
static/
index.css
index.js
templates/
index.html


## Setup

1. Install dependencies:
2. Make sure [Ollama](https://ollama.com) is installed and running, then pull the model:
3. Run the app:
4. Open `http://127.0.0.1:5000` in your browser.

## Status

🚧 Work in progress — early version (0.1). Currently focused on core chatbot logic before expanding to more features.
