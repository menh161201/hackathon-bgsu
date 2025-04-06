# FalconHomes

## Members: Huy Vuong, Lam Vu, Minh Nguyen, Jialiang Yu

## Overview:

Website that helps users search for housing near the BGSU area based on their needs, view important information like rent, location, distance from places, and compare listings. It solves the problem by offering an user-friendly and easy-to-navigate platform with information specially designed with international students in mind.

## Tech Stack:

AI: Machine Learning - Clustering for recommending similar houses based on previously viewed houses.
API: openAI - GPT 4o API for summarizing posts into , Google Germini API for chatbot, Google Map API for calculating distances.
Frontend: NextJS, ReactJS, TailwindCSS
Backend: Node.js
Database: Prisma, SQLite
Data crawling
Other tools: Github

## Database Schema

### 'User'

- Email

### House

- House ID
- Address
- Features based on amenities gathered
- Contact information
- Images
- Distance to certain locations

### Prerequisites

- Node.js
- SQLite

## To Get started

- git clone https://github.com/menh161201/hackathon-bgsu.git
- cd to the repo
- install all necessary libraries

### Create .env and .env.local

#### .env:

- DATABASE_URL="database url"
- NEXT_PUBLIC_GEMINI_API_KEY="Gemini API Key"
- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="Google Map API Key"

#### .env.local:

- NEXT_PUBLIC_SUPABASE_URL=SuperBase URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY=SuperBaseAnonKey
- NEXT_PUBLIC_GEMINI_API_KEY=Gemini API Key
- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=Google Map API Key

### To Run

- npm run dev

## Presentation Video

[Presentation Video](https://drive.google.com/file/d/1tuypTQcti064fyCcKEQ8upN0JCTsxGp8/view?usp=sharing)

<video width="640" height="360" controls autoplay loop muted>
<source src="presentation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
