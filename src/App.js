import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import FraudResultsTable from './components/FraudResultsTable.js';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<FraudResultsTable />} />
  </Routes>
);

export default App;