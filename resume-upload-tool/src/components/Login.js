import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Make sure to import the CSS file

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Placeholder for authentication logic
    console.log("Login attempted");
    onLogin(true);  // Simulate successful login
    navigate('/dashboard');  // Redirect to dashboard after login
  };

  return (
    <div>
      <h1>Resume Upload Tool</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <button type="button" onClick={() => navigate('/forgot-password')}>Forgot Password</button>
      </form>
    </div>
  );
}

export default Login;
