import React, { useState } from 'react';
import { addDonor } from '../services/api';


export default function DonorForm() {
  const [form, setForm] = useState({
    name: '',
    bloodGroup: '',
    city: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    setMsg('');
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!form.bloodGroup.trim()) {
      newErrors.bloodGroup = 'Blood group is required';
    }
    if (!form.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(form.phone.trim())) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');

    if (!validate()) {
      return;
    }

    try {
      await addDonor(form);
      setMsg('Donor registered successfully!');
      setForm({ name: '', bloodGroup: '', city: '', phone: '' });
      setErrors({});
    } catch (error) {
      setMsg('Failed to register donor');
    }
  };

  return (
    <div>
      <h2>Register Donor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>

        <div>
          <input
            name="bloodGroup"
            placeholder="Blood Group (e.g. A+)"
            value={form.bloodGroup}
            onChange={handleChange}
          />
          {errors.bloodGroup && <div className="form-error">{errors.bloodGroup}</div>}
        </div>

        <div>
          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />
          {errors.city && <div className="form-error">{errors.city}</div>}
        </div>

        <div>
          <input
            name="phone"
            placeholder="Phone (10 digits)"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="form-error">{errors.phone}</div>}
        </div>

        <button type="submit">Register Donor</button>
      </form>

      {msg && (
        <p className={msg.startsWith('Donor registered') ? 'success-message' : 'error-message'}>
          {msg}
        </p>
      )}
    </div>
  );
}
