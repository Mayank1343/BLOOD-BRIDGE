import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DonorList() {
  const [donors, setDonors] = useState([]);
  const [params, setParams] = useState({
    bloodGroup: '',
    city: '',
    page: 0,
    size: 5,
    sort: 'name'
  });
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchDonors = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:8080/donors', { params });
      setDonors(response.data.content || []);
      setTotalPages(response.data.totalPages || 0);
    } catch (err) {
      setError('Failed to fetch donors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.page, params.size, params.sort, params.bloodGroup, params.city]);

  const handleChange = e => {
    setParams({ ...params, [e.target.name]: e.target.value, page: 0 });
  };

  const handlePageChange = newPage => {
    if (newPage >= 0 && newPage < totalPages) {
      setParams({ ...params, page: newPage });
    }
  };

  const handleSortChange = e => {
    setParams({ ...params, sort: e.target.value, page: 0 });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this donor?')) return;
    try {
      await axios.delete(`http://localhost:8080/donors/${id}`);
      fetchDonors();
    } catch (err) {
      setError('Failed to delete donor');
    }
  };

  return (
    <div>
      <h2>Donor List</h2>
      <div>
        <input
          name="bloodGroup"
          placeholder="Blood Group"
          value={params.bloodGroup}
          onChange={handleChange}
        />
        <input
          name="city"
          placeholder="City"
          value={params.city}
          onChange={handleChange}
        />
        <select value={params.sort} onChange={handleSortChange}>
          <option value="name">Sort by Name</option>
          <option value="city">Sort by City</option>
        </select>
      </div>

      {loading && <p>Loading donors...</p>}
      {error && <p className="error-message">{error}</p>}

      <ul>
        {donors.length === 0 ? (
          <li>No donors found</li>
        ) : (
          donors.map(donor => (
            <li key={donor.id}>
              {donor.name} ({donor.bloodGroup}) - {donor.city}{' '}
              <button onClick={() => handleDelete(donor.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>

      <div>
        <button
          disabled={params.page === 0}
          onClick={() => handlePageChange(params.page - 1)}
        >
          Previous
        </button>
        <button
          disabled={params.page + 1 >= totalPages}
          onClick={() => handlePageChange(params.page + 1)}
        >
          Next
        </button>
      </div>

      <p>Page {totalPages === 0 ? 0 : params.page + 1} of {totalPages}</p>
    </div>
  );
}
