// src/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32', // Deep Forest Green
      light: '#60AD5E',
      dark: '#005005',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFC107', // Goldenrod
      dark: '#FFA000',
      contrastText: '#1A2027',
    },
    background: {
      default: '#F5F7FA', // Light Gray/Blue for background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A2027', // Dark charcoal for main text
      secondary: '#566573', // Softer grey for secondary text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (max-width:900px)': { fontSize: '3rem' },
      '@media (max-width:600px)': { fontSize: '2.5rem' },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.8rem',
      marginBottom: '1rem',
      '@media (max-width:600px)': { fontSize: '2rem' },
    },
    h5: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '12px 28px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
          '&:hover': {
            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          border: '1px solid rgba(0,0,0,0.05)',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.03)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 12px 30px rgba(0,0,0,0.08)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          color: '#1A2027',
          boxShadow: '0px 2px 15px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});