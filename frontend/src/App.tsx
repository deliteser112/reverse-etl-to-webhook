import React, { useState } from 'react';
import { Box, Button,Card } from '@mui/material';
import ConnectionForm from './components/ConnectionForm';
import TableSelect from './components/TableSelect';
import MappingForm from './components/MappingForm';
import Preview from './components/Preview';

const App: React.FC = () => {
  const [connectionString, setConnectionString] = useState('');
  const [currentStep, setCurrentStep] = useState<'connection' | 'tableSelect' | 'mappingForm' | 'preview'>('connection');
  const [selectedTable, setSelectedTable] = useState('');
  const [mappings, setMappings] = useState<{ column: string; path: string }[]>([]);

  const handleConnectionTestSuccess = () => {
    setCurrentStep('tableSelect');
    alert("Connected Successfully!");
  };

  const handleConnectionTestFailure = (error: string) => {
    alert(`Connection failed: ${error}`);
  };

  const handleTableSelect = (table: string) => {
    setSelectedTable(table);
    setCurrentStep('mappingForm');
  };

  const handleMappingChange = (mappings: { column: string; path: string }[]) => {
    setMappings(mappings);
  };

  const handlePreview = () => {
    setCurrentStep('preview');
  };

  return (
    <Card sx={{ minWidth: 400 }}>
      <Box sx={{ padding: 3 }}>
        {currentStep === 'connection' && (
          <ConnectionForm
            onTestSuccess={handleConnectionTestSuccess}
            onTestFailure={handleConnectionTestFailure}
            onSetConnectionString={setConnectionString}
          />
        )}

        {currentStep === 'tableSelect' && connectionString && (
          <TableSelect connectionString={connectionString} onTableSelect={handleTableSelect} />
        )}

        {currentStep === 'mappingForm' && selectedTable && (
          <Box>
            <MappingForm
              connectionString={connectionString}
              table={selectedTable}
              onMappingChange={handleMappingChange}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={handlePreview}
              disabled={mappings.length === 0}
            >
              Preview Mapped Data
            </Button>
          </Box>
        )}

        {currentStep === 'preview' && mappings.length > 0 && (
          <Preview connectionString={connectionString} table={selectedTable} mappings={mappings} />
        )}
      </Box>
    </Card>
  );
};

export default App;
