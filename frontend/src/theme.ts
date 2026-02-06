import { createTheme } from '@mui/material/styles';

// Customize MUI's default theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue shade for the primary color
    },
    secondary: {
      main: '#f50057', // Pink shade for the secondary color
    },
    background: {
      default: '#fafafa', // Light gray background for the app
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Default font
    h6: {
      fontWeight: 600, // Make headings bold
    },
    button: {
      textTransform: 'none', // Disable uppercase transformation for buttons
    },
  },
  spacing: 8, // Set spacing unit for consistent margin/padding
});

export default theme;
