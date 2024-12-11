import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');  // Changed 'name' to 'username'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient'); // Default role as 'patient'
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // To track loading state
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Reset messages
    setError('');
    setSuccess('');

    // Basic validation
    if (!username || !email || !password || !role) {
      setError('All fields are required.');
      return;
    }

    // Basic password validation (can be expanded)
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true); // Start loading

    try {
      // Sending POST request to the backend for registration
      const response = await axios.post('http://localhost:4000/api/auth/register', {
        username,  // Send 'username' as the field
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
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}  // Use 'username' instead of 'name'
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
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
        <button type="submit" disabled={loading}> {loading ? 'Registering...' : 'Register'} </button> {/* Button loading state */}
      </form>
    </div>
  );
};

export default Register;
