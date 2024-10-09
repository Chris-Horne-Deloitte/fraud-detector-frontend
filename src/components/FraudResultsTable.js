import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FraudResultsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        if (!response.ok) {
          console.error('Error:', response.status, response.statusText);
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        if (!Array.isArray(result)) {
          console.error('Error: Invalid data format');
          throw new Error('Invalid data format');
        }
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {Object.keys(row).map((key, cellIndex) => (
                <TableCell key={cellIndex} component="th" scope="row">
                  {key}
                </TableCell>
              ))}
              {Object.keys(row).map((key, cellIndex) => (
                <TableCell key={cellIndex} align="right">
                  {JSON.stringify(row[key])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FraudResultsTable;