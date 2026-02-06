import React, { useState } from 'react';
import { Button, TextField, CircularProgress, Box, Typography } from '@mui/material';
import { testConnection } from '../api';

interface ConnectionFormProps {
  onTestSuccess: () => void;
  onTestFailure: (error: string) => void;
  onSetConnectionString: (connectionString: string) => void;
}

const ConnectionForm: React.FC<ConnectionFormProps> = ({
  onTestSuccess,
  onTestFailure,
  onSetConnectionString,
}) => {
  const [connectionString, setConnectionString] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTestConnection = async () => {
    setLoading(true);
    onSetConnectionString(connectionString);

    try {
      await testConnection(connectionString);
      onTestSuccess();
    } catch (error: any) {
      const errorMsg = error?.response?.data?.error || "Connection failed. Please check your connection string.";
      setErrorMessage(errorMsg);
      onTestFailure(errorMsg);
    }
    setLoading(false);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Enter Postgres Connection String</Typography>
      <TextField
        fullWidth
        label="Connection String"
        variant="outlined"
        value={connectionString}
        onChange={(e) => setConnectionString(e.target.value)}
        error={Boolean(errorMessage)}
        helperText={errorMessage}
        disabled={loading}
      />
      <Box sx={{ marginTop: 2 }}>
        <Button
          variant="contained"
          onClick={handleTestConnection}
          disabled={loading}
          fullWidth
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Test Connection'}
        </Button>
      </Box>
    </Box>
  );
};

export default ConnectionForm;
