// src/pages/ServicesPage.tsx
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import SectionHeader from '../components/Common/SectionHeader';
import { SERVICE_DATA } from '../data';

const ServicesPage: React.FC = () => (
  <Container sx={{ py: { xs: 8, md: 12 } }}>
    <SectionHeader title="Comprehensive Yard Care" subtitle="Professional, reliable services for your home or business in Christchurch." />
    <Grid container spacing={4}>
      {SERVICE_DATA.map((service, index) => (
        <Grid key={index}>
          <Card sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            height: '100%',
            overflow: 'hidden',
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              p: { xs: 3, sm: 4 }, 
              bgcolor: 'primary.light',
              color: 'white',
              flexShrink: 0,
            }}>
              <service.Icon sx={{ fontSize: 50 }} />
            </Box>
            <CardContent sx={{ flex: 1, p: { xs: 3, sm: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h5" gutterBottom fontWeight="bold" color="primary.dark">{service.name}</Typography>
                <Typography variant="body1" color="text.secondary" paragraph>{service.description}</Typography>
              </Box>
              <Button component={RouterLink} to="/contact" size="medium" variant="contained" color="secondary" sx={{ alignSelf: 'flex-start', mt: 2 }}>Book This Service</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ServicesPage;