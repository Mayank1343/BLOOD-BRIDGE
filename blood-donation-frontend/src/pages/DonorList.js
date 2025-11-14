// src/pages/DonorList.js
import React, { useState } from 'react';
import { fetchDonors } from '../services/api';

export default function DonorList() {
  const [donors, setDonors] = useState([]);
  const [params, setParams] = useState({ bloodGroup: '', city: '', page: 0, size: 10, sort: 'name' });

  const handleChange = (e) => setParams({ ...params, [e.target.name]: e.target.value });

  const handleSearch = async () => {
    const response = await fetchDonors(params);
    setDonors(response.data.content);
  };

  return (
    <div>
      <input name="bloodGroup" placeholder="Blood Group" value={params.bloodGroup} onChange={handleChange} />
      <input name="city" placeholder="City" value={params.city} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {donors.map(donor => (
          <li key={donor.id}>{donor.name} ({donor.bloodGroup}) - {donor.city}</li>
        ))}
      </ul>
    </div>
  );
}
