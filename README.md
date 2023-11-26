# Ads.txt Analyzer Web App

This web application allows users to analyze the 'ads.txt' file of a given domain, showing a table with advertiser domains and the frequency of each advertiser in the file.

## Demo

Visit the live demo [here](https://ads-txt-analyzer-3378e576a070.herokuapp.com/)

## Features

- Given a domain, the app displays a table with advertiser domains and their frequency in the 'ads.txt' file.
- Bonus features implemented:
  - Sort and search functionality for the results table.
  - Loader to indicate when the app is fetching results.
  - Option to download results in JSON or CSV format.
  - Server-side caching for improved performance when querying the same domain multiple times.

## Tech Stack

- Frontend: React with JSX
- Backend: Node.js
- Deployment: Heroku

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ads-txt-analyzer.git
   ```
2. Install dependencies for the frontend and backend:

   ```bash
   cd ads-txt-analyzer
   cd client && npm install
   cd ../server && npm install
   ```
3. Start the frontend and backend servers:
   ```bash
   # In the 'client' directory
   npm start

   # In the 'server' directory
   npm start
   ```
4. Open your browser and visit http://localhost:3000 to view the application.
