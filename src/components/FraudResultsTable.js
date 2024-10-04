import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FraudResultsTable = () => {
  const [fraudResults, setFraudResults] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      if (data.success) {
        setFraudResults(data.data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {/* Replace with your actual column names */}
            <TableCell>ID</TableCell>
            <TableCell>Column1</TableCell>
            <TableCell>Column2</TableCell>
            {/* Add more columns as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {fraudResults.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.column1}</TableCell>
              <TableCell>{row.column2}</TableCell>
              {/* Add more cells as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FraudResultsTable;