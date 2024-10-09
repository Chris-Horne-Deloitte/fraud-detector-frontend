import React, { useEffect, useState } from 'react';

const FraudResultsTable = () => {
  const [fraudResults, setFraudResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/fraud_results');
        const data = await response.json();
        if (data.success) {
          setFraudResults(data.data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Result</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {fraudResults.map((result) => (
          <tr key={result.id}>
            <td>{result.id}</td>
            <td>{result.result}</td>
            {/* Add more cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FraudResultsTable;