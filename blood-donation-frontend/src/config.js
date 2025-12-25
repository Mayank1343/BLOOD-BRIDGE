// src/config.js
const LOCAL_API = "http://localhost:8080";
const PROD_API  = "https://<your-render-backend>.onrender.com"; // <- put your real Render URL here

const API_BASE_URL =
  process.env.NODE_ENV === "production" ? PROD_API : LOCAL_API;

export default API_BASE_URL;
