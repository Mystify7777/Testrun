import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import './styles/global.css';

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token'); // Check if the user is authenticated
  return token ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Landing page */}
          <Route path="/login" element={<Login />} /> {/* Login */}
          <Route path="/register" element={<Register />} /> {/* Register */}
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} /> {/* Protected Dashboard */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
