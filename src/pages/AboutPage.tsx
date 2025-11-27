// src/pages/AboutPage.tsx
import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const AboutPage: React.FC = () => (
  <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
    <Card sx={{ overflow: 'hidden' }}>
      <Box sx={{ 
        height: 250, 
        bgcolor: 'primary.dark', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage: 'url("https://images.unsplash.com/photo-1627932623307-e85df649f874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(46, 125, 50, 0.7)',
        }
      }}>
        <Typography variant="h3" color="white" sx={{ zIndex: 1, fontWeight: 700 }}>Meet Lewis</Typography>
      </Box>
      <CardContent sx={{ p: { xs: 4, sm: 6 } }}>
        <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">The Story Behind the Mower</Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Hi, I'm Lewis. I started <strong>Lewis' Mowing Services</strong> right here in Christchurch Central with one goal: to provide the most reliable, personal, and *quality* lawn care service in the city.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          We aren't a big, impersonal franchise. **I treat every lawn like it's my own.** My promise is simple: crisp edges, clean surfaces, reliable timing, and always a friendly face.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 'bold' }}>
          Your satisfaction is my business card.
        </Typography>
        <Button component={RouterLink} to="/contact" variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
          Work With Lewis
        </Button>
      </CardContent>
    </Card>
  </Container>
);

export default AboutPage;