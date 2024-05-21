'use client';
// pages/index.js
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const Home = () => {
  const [inputData, setInputData] = useState('');
  const [encryptedData, setEncryptedData] = useState('');

  // Use the environment variable
  const URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(URL);

  const handleEncrypt = async () => {
    try {
      const response = await axios.post(`${URL}encrypt`, { data: inputData });
      setEncryptedData(response.data.encrypted);
    } catch (error) {
      console.error('Error encrypting data:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Data Encryption</Typography>
      <TextField
        label="Enter data"
        variant="outlined"
        fullWidth
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleEncrypt}>
        Encrypt
      </Button>
      {encryptedData && (
        <Typography variant="h6" marginTop={2}>
          Encrypted Data: {encryptedData}
        </Typography>
      )}
    </div>
  );
};

export default Home;
