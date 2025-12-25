// src/config.js
const LOCAL_API = "http://localhost:8080";
const PROD_API  = "https://community-blood-donation-api.onrender.com";

const API_BASE_URL =
  process.env.NODE_ENV === "production" ? PROD_API : LOCAL_API;

export default API_BASE_URL;
