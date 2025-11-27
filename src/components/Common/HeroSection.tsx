// src/components/Common/HeroSection.tsx
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '90vh', md: '80vh' },
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        // Example image: a vibrant, well-maintained lawn
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={8} lg={7}>
            <Typography variant="h1" gutterBottom sx={{ textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
              Christchurch’s Premier<br />
              <Box component="span" sx={{ color: 'secondary.main' }}>Lawn Care</Box> Service
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 300, maxWidth: 650, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Professional, reliable, and locally owned by Lewis. We transform overgrown yards into neighbourhood highlights. Guaranteed.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              <Button component={RouterLink} to="/contact" variant="contained" color="secondary" size="large" startIcon={<ContentCutIcon />}>
                Get a Free Quote
              </Button>
              <Button component={RouterLink} to="/services" variant="outlined" size="large" sx={{ 
                color: 'white', 
                borderColor: 'white', 
                '&:hover': { 
                  borderColor: 'secondary.main', 
                  bgcolor: 'rgba(255, 255, 255, 0.15)',
                  color: 'secondary.main',
                  boxShadow: '0 4px 15px rgba(255,193,7,0.3)',
                } 
              }}>
                View All Services
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;