// src/components/FraudDetectorForm.js
import React, { useState } from 'react';

const FraudDetectorForm = () => {
    const [inputData, setInputData] = useState('');
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setInputData(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://yh5xav2uae.execute-api.us-east-1.amazonaws.com/dev', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: inputData }),
            });
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error connecting to fraud detector:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Input Data:
                    <input type="text" value={inputData} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {result && <div>Result: {JSON.stringify(result)}</div>}
        </div>
    );
};

export default FraudDetectorForm;