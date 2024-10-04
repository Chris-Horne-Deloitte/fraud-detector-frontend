import { TextField, Button, Container, Typography, Box, Snackbar } from '@mui/material';
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        onLogin(); // Call the onLogin function to update the login state
      } else {
        // Use MUI Snackbar for user-friendly notifications
        const handleSnackbarClose = () => {
          // Handle Snackbar close event
        };

        <Snackbar
          open={true} // Set open state based on condition
          autoHideDuration={6000} // Set duration for Snackbar display
          onClose={handleSnackbarClose}
          message="Login failed: Invalid credentials"
        />
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Use MUI Snackbar for user-friendly notifications
      const handleSnackbarClose = () => {
        // Handle Snackbar close event
      };

      <Snackbar
        open={true} // Set open state based on condition
        autoHideDuration={6000} // Set duration for Snackbar display
        onClose={handleSnackbarClose}
        message="Login failed: An error occurred"
      />
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;