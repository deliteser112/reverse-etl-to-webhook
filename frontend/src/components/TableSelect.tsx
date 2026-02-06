import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Box, Typography } from '@mui/material';
import { getTables } from '../api';

interface TableSelectProps {
  connectionString: string;
  onTableSelect: (table: string) => void;
}

const TableSelect: React.FC<TableSelectProps> = ({ connectionString, onTableSelect }) => {
  const [tables, setTables] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTables = async () => {
      setLoading(true);
      try {
        const response = await getTables(connectionString);
        setTables(response.data.tables);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    if (connectionString) fetchTables();
  }, [connectionString]);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Select a Table</Typography>
      <Autocomplete
        fullWidth
        options={tables}
        loading={loading}
        onChange={(_, value) => onTableSelect(value || '')}
        renderInput={(params) => <TextField {...params} label="Choose a table" />}
      />
    </Box>
  );
};

export default TableSelect;
