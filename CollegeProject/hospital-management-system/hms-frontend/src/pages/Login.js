import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        username,
        password,
      });
      const { token, role } = response.data;

      // Store the token in local storage
      localStorage.setItem('token', token);

      // Redirect user based on role
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else if (role === 'doctor') {
        navigate('/doctor/dashboard');
      } else if (role === 'patient') {
        navigate('/patient/dashboard');
      } else {
        navigate('/dashboard'); // Default dashboard
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
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
        {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
