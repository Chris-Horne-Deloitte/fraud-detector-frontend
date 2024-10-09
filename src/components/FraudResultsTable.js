import React, { useState, useEffect } from 'react';

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
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map((key, cellIndex) => (
              <td key={cellIndex}>{JSON.stringify(row[key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FraudResultsTable;