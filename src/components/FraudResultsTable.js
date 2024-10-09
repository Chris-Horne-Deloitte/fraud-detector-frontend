import React, { useState, useEffect } from 'react';


const FraudResultsTable = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(`https://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_DB_PORT}/${process.env.REACT_APP_DB_NAME}/${process.env.REACT_APP_DB_USER}?password=${process.env.REACT_APP_DB_PASSWORD}`);
      const result = await response.json();
      setData(result.rows);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data.length) return <div>Loading...</div>;

  const columnHeaders = Object.keys(data[0]);
  const tableRows = data.map((row) => columnHeaders.map((column) => row[column]));

  return (
    <table>
      <caption>Fraud Results Table</caption>
      <thead>
        <tr>
          {columnHeaders.map((column, index) => (
            <th key={index} style={{ fontSize: 18, fontWeight: 'bold' }}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                style={{
                  fontSize: 16,
                  padding: 10,
                  textAlign: cellIndex === 0 ? 'left' : 'right',
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FraudResultsTable;