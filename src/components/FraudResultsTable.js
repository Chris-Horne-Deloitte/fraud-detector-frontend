import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { FraudDetector } from '@aws-sdk/client-fraud-detector';

const fraudDetector = new FraudDetector({ region: 'us-east-1' });

const FraudResultsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getFraudResults = async () => {
      try {
        const result = await fraudDetector.getEventPrediction({
          detectorId: 'sample_fraud_detection_model',
          eventId: 'event_id',
          eventTypeName: 'event_type_name',
        }).promise();

        const prediction = result.prediction;
        // Process the prediction results
        setData(prediction);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getFraudResults();
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