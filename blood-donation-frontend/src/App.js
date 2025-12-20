import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DonorForm from './pages/DonorForm';
import DonorList from './pages/DonorList';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav>
          <Link to="/">Donor List</Link> | <Link to="/register">Register Donor</Link>
        </nav>
        <Routes>
          <Route path="/" element={<DonorList />} />
          <Route path="/register" element={<DonorForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
