// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DonorForm from './pages/DonorForm';
import DonorList from './pages/DonorList';


export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Donor List</Link> | <Link to="/register">Register Donor</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Hello Donor List Page</div>} />
        <Route path="/register" element={<div>Hello Donor Form Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}
