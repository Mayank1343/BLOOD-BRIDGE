🩸 Community Blood Donation – Full Stack App
A full‑stack web application that connects voluntary blood donors with people in need of blood requests.
The project consists of a Spring Boot REST API backend and a React frontend deployed with a connected cloud setup (Render + Netlify).
​

🚀 Live Demo
Frontend (Netlify): https://superlative-marshmallow-9c48ab.netlify.app

Backend (Render): https://community-blood-donation-api.onrender.com

Use the frontend URL in resumes/portfolios; it always points to the latest production build.
​

✨ Features
Donor management

Add new donors with name, blood group, city and contact details.

View paginated list of donors with basic filtering options.

Blood request management

Create blood requests with patient, hospital and required units.

View list of open requests to help donors respond quickly.

Clean, single‑page React UI

Simple navigation between Donor List and Register Donor pages.

Axios service layer that talks to the Spring Boot API via environment‑based base URLs.

Cloud deployment

Backend deployed on Render as a Spring Boot service.

Frontend deployed on Netlify, configured with environment variables to talk to the backend.
​

🛠 Tech Stack
Layer	Technology
Backend	Spring Boot, Spring Web, Spring Data JPA
Database	(H2 / MySQL – update according to your project)
Frontend	React (Create React App), React Router, Axios
Build	Maven (backend), npm (frontend)
Hosting	Render (API), Netlify (React app)
📁 Project Structure
text
Community-blood-donation-api/
├── blood-donation-api/            # Spring Boot backend
│   ├── src/main/java/...          # Controllers, services, entities, repositories
│   └── pom.xml                    # Maven configuration
└── blood-donation-frontend/       # React frontend
├── src/
│   ├── pages/                 # Donor list & donor form pages
│   ├── services/api.js        # Axios instance and API functions
│   ├── App.js                 # Routing + navigation
│   └── config.js              # Frontend API base URL helper
├── .env.development           # Local env variables (not committed)
└── package.json
🧩 How to Run Locally
1. Prerequisites
   Java 17+

Maven 3+

Node.js 18+ and npm or yarn

Git

2. Clone the repository
   bash
   git clone https://github.com/Mayank1343/Community-Blood-Donation-API.git
   cd Community-Blood-Donation-API
3. Run the backend (Spring Boot)
   From the blood-donation-api folder:

bash
cd blood-donation-api
mvn clean spring-boot:run
The API will start on http://localhost:8080 (default Spring Boot port).

Verify by opening http://localhost:8080/actuator/health or any sample endpoint you have.

4. Configure frontend environment
   From the blood-donation-frontend folder:

bash
cd ../blood-donation-frontend
Create a file named .env.development:

text
REACT_APP_API_BASE=http://localhost:8080
This tells React to call the local Spring Boot backend during development using an environment variable supported by Create React App.
​

5. Run the frontend (React)
   Still in blood-donation-frontend:

bash
npm install
npm start
# or: yarn install && yarn start
The React app runs on http://localhost:3000.

It will automatically call the backend at http://localhost:8080 via the Axios instance configured in src/services/api.js.

☁️ Deployment Guide (Cloud)
This project is set up for:

Backend: Render

Frontend: Netlify

A. Deploy Spring Boot backend on Render
Push the repo to GitHub.

Create a new Web Service on Render.

Connect the GitHub repo and choose the blood-donation-api folder as the root (or configure the build command accordingly).

Common configuration:

Build command: mvn clean package

Start command: java -jar target/*.jar

Environment: Java 17

After deploy, Render will give a URL like:
https://community-blood-donation-api.onrender.com.
​

B. Configure React app for production (Netlify)
In the blood-donation-frontend project, create a small config helper if not already present:

js
// src/config.js
const API_BASE_URL = process.env.REACT_APP_API_BASE;
export default API_BASE_URL;
Ensure the Axios service uses this base URL:

js
// src/services/api.js
import axios from 'axios';
import API_BASE_URL from '../config';

const api = axios.create({
baseURL: API_BASE_URL,
});

export default api;

export const fetchDonors = (params) => api.get('/donors', { params });
export const addDonor   = (data)   => api.post('/donors', data);
export const deleteDonor = (id)    => api.delete(`/donors/${id}`);

export const fetchRequests = (params) => api.get('/requests', { params });
export const addRequest    = (data)   => api.post('/requests', data);
Build settings for Netlify:

Base directory: blood-donation-frontend (or configure as needed).

Build command: npm run build

Publish directory: build.
​

C. Netlify environment variable
In the Netlify project:

Go to Site settings → Build & deploy → Environment variables.
​

Add:

Key: REACT_APP_API_BASE

Value: https://community-blood-donation-api.onrender.com

Trigger a new deploy (Deploys → Trigger deploy → Deploy site).

The production site URL will look like:
https://superlative-marshmallow-9c48ab.netlify.app and will call the Render API using that env variable.

📌 Usage
Open the live frontend URL or http://localhost:3000 in development.

Use the navigation bar to:

View the Donor List with all registered donors.

Go to Register Donor to add a new donor.

The app communicates with the backend API to persist donors and fetch data in real time.

🔮 Future Improvements
Authentication for donors and admins.

Advanced filters (by city, blood group, availability).

Email/SMS notifications for matching donors.

Role‑based dashboards for admin, donor and requester.

📄 License
This project is for learning and portfolio purposes.