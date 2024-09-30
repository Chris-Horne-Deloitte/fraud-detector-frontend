// src/App.js
import React, { useState } from 'react';
import Login from './Login';

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <div>
      {!token ? <Login onLogin={handleLogin} /> : <div>Welcome!</div>}
    </div>
  );
};

export default App;