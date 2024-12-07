// In Landing.js
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Application</h1>
      <p>Please choose an option to proceed:</p>
      <div className="options">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
