import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  title: {
    fontSize: '5rem',
    color: '#FF6347',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '30px',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default NotFound;
