// src/pages/DonorForm.js
import React, { useState } from 'react';
import { addDonor } from '../services/api';

export default function DonorForm() {
  const [form, setForm] = useState({ name: '', bloodGroup: '', city: '', phone: '' });
  const [msg, setMsg] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDonor(form);
      setMsg('Donor registered!');
    } catch (err) {
      setMsg('Error: ' + (err.response?.data?.message || 'Failed to register'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="bloodGroup" placeholder="Blood Group" value={form.bloodGroup} onChange={handleChange} required />
      <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <button type="submit">Register Donor</button>
      {msg && <p>{msg}</p>}
    </form>
  );
}
