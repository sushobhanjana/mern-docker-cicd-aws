import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
        headers: { 'Content-Type': 'application/json' }
      });
      const res = await api.post('/api/login', { username, password });
      setToken(res.data.token);
      setMessage('Login successful!');
      setUsername('');
      setPassword('');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage('Server error');
      }
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      {token && (
        <div>
          <strong>JWT Token:</strong>
          <pre style={{ wordBreak: 'break-all', background: '#eee', padding: 10 }}>{token}</pre>
        </div>
      )}
    </div>
  );
}

export default Login;
