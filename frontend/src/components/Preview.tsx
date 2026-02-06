import React, { useState } from "react";
import { previewRows } from "../api";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";

interface PreviewProps {
  connectionString: string;
  table: string;
  mappings: { column: string; path: string }[];
}

const Preview: React.FC<PreviewProps> = ({
  connectionString,
  table,
  mappings,
}) => {
  const [limit, setLimit] = useState(5);
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handlePreview = async () => {
    setLoading(true);
    try {
      console.log("connectionString", connectionString, table, limit, mappings);
      const response = await previewRows(
        connectionString,
        table,
        limit,
        mappings,
      );
      console.log("response", response);
      setPreviewData(response.data.preview);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        Preview Mapped Data
      </Typography>
      <TextField
        fullWidth
        label="Limit Rows"
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handlePreview} disabled={loading}>
        {loading ? <CircularProgress size={24} color="inherit" /> : "Preview"}
      </Button>
      <Box sx={{ marginTop: 2, maxHeight: 400, overflowY: "auto" }}>
        {loading ? (
          <CircularProgress />
        ) : previewData.length ? (
          <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: 1, overflowX: 'auto', maxHeight: '30vh' }}>
            <Typography
              component="pre"
              sx={{
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                fontFamily: 'monospace',
                fontSize: '16px',
                color: '#333',
                margin: 0,
              }}
            >
              {JSON.stringify(previewData, null, 2)}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Preview;
