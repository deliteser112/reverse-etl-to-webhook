import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography, CircularProgress } from '@mui/material';
import { getColumns } from '../api';

interface MappingFormProps {
  connectionString: string;
  table: string;
  onMappingChange: (mappings: { column: string; path: string }[]) => void;
}

const MappingForm: React.FC<MappingFormProps> = ({ connectionString, table, onMappingChange }) => {
  const [columns, setColumns] = useState<{ name: string; type: string }[]>([]);
  const [mappings, setMappings] = useState<{ column: string; path: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchColumns = async () => {
      setLoading(true);
      try {
        const response = await getColumns(connectionString, table);
        setColumns(response.data.columns);

        if (response.data.columns.length > 0 && mappings.length === 0) {
          setMappings([{ column: response.data.columns[0].name, path: '' }]);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    if (connectionString && table) fetchColumns();
  }, [connectionString, table]);

  const handleAddMapping = () => {
    setMappings((prev) => [...prev, { column: '', path: '' }]);
  };

  const handleMappingChange = (index: number, field: 'column' | 'path', value: string) => {
    const updatedMappings = [...mappings];
    updatedMappings[index] = { ...updatedMappings[index], [field]: value };
    setMappings(updatedMappings);
    onMappingChange(updatedMappings);
  };

  const isAddMappingDisabled = mappings.some((mapping) => !mapping.column || !mapping.path);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Map Columns to JSON
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        mappings.map((mapping, index) => (
          <Grid container spacing={2} key={index}>
            <Grid size={{ xs: 6 }}>
              <TextField
                select
                fullWidth
                label="Column"
                value={mapping.column}
                onChange={(e) => handleMappingChange(index, 'column', e.target.value)}
                variant="outlined"
                SelectProps={{ native: true }}
              >
                {columns.map((column) => (
                  <option key={column.name} value={column.name}>
                    {column.name}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField
                fullWidth
                label="JSON Path"
                value={mapping.path}
                onChange={(e) => handleMappingChange(index, 'path', e.target.value)}
                variant="outlined"
                helperText="e.g. user.name.first"
              />
            </Grid>
          </Grid>
        ))
      )}
      <Box sx={{ marginTop: 2 }}>
        <Button fullWidth variant="outlined" onClick={handleAddMapping} disabled={isAddMappingDisabled}>
          Add Mapping
        </Button>
      </Box>
    </Box>
  );
};

export default MappingForm;
