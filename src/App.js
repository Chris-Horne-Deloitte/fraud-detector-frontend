import React, { useState } from 'react';
import Login from './Login';
import FraudResultsTable from './components/FraudResultsTable';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? <Login onLogin={handleLogin} /> : <FraudResultsTable />}
    </div>
  );
};

export default App;