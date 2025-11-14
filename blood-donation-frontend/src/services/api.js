// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Update if backend runs on different port

export const fetchDonors = (params) => axios.get(`${API_URL}/donors`, { params });
export const addDonor = (data) => axios.post(`${API_URL}/donors`, data);
export const fetchRequests = (params) => axios.get(`${API_URL}/requests`, { params });
export const addRequest = (data) => axios.post(`${API_URL}/requests`, data);
