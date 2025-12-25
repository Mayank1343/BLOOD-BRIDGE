import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DonorForm from './pages/DonorForm';
import DonorList from './pages/DonorList';
import './index.css';

export default function App() {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => {
    setShowHelp(prev => !prev);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Header */}
        <header className="app-header">
          <div className="app-title">Blood Bridge</div>

          <nav className="app-nav">
            <Link to="/">Donor List</Link>
            <Link to="/register">Register Donor</Link>
          </nav>

          <div className="help-icon" onClick={toggleHelp}>
            ?
            {showHelp && (
              <div className="help-tooltip">
                <div className="help-tooltip-title">About this project</div>
                <p>
                  This app connects blood donors with people who need blood.
                  Register yourself as a donor or browse available donors.
                </p>
                <p>
                  Built using React frontend and Spring Boot backend,
                  deployed on Netlify and Render.
                </p>
              </div>
            )}
          </div>
        </header>

        {/* Main content */}
        <main className="app-main">
          <div className="app-card-stack">
            <div className="app-card">
              <Routes>
                <Route path="/" element={<DonorList />} />
                <Route path="/register" element={<DonorForm />} />
              </Routes>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          Engineered with care by <span>Mayank.</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}
