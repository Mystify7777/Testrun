import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient'); // Default role as 'patient'
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Reset messages
    setError('');
    setSuccess('');

    // Basic validation
    if (!name || !email || !password || !role) {
      setError('All fields are required.');
      return;
    }

    try {
      // Sending POST request to the backend for registration
      const response = await axios.post('http://localhost:4000/api/auth/register', {
        name,
        email,
        password,
        role,
      });

      // Show success message and redirect
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
    } catch (err) {
      // Handling errors if registration fails
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {error && <p className="error" style={{ color: 'red' }}>{error}</p>} {/* Display error */}
        {success && <p className="success" style={{ color: 'green' }}>{success}</p>} {/* Display success */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
