import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import FraudResultsTable from './components/FraudResultsTable'; // Import the component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<FraudResultsTable />} /> Define the route
    </Routes>
  );
};

export default App;