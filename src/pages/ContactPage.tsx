// src/pages/ContactPage.tsx
import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import * as React from 'react';

import SectionHeader from '../components/Common/SectionHeader';

const ContactPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={6}>
        {/* Contact Info Side */}
        <Grid>
          <SectionHeader title="Get A Free Quote" subtitle="Contact Lewis today to discuss your lawn care needs and get a no-obligation estimate." />
          <Stack spacing={3}>
            <Card sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ p: 2, bgcolor: 'primary.main', borderRadius: '50%', mr: 3, color: 'white', display: 'flex', alignItems: 'center' }}><PhoneIcon /></Box>
              <Box>
                <Typography variant="caption" color="text.secondary" fontWeight="bold">Call or Text for Fastest Service</Typography>
                <Typography variant="h5" fontWeight="bold">021 676 6767</Typography>
              </Box>
            </Card>
            <Card sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ p: 2, bgcolor: 'primary.main', borderRadius: '50%', mr: 3, color: 'white', display: 'flex', alignItems: 'center' }}><EmailIcon /></Box>
              <Box>
                <Typography variant="caption" color="text.secondary" fontWeight="bold">Email Quote Request</Typography>
                <Typography variant="h5" fontWeight="bold">quote@lewismowing.nz</Typography>
              </Box>
            </Card>
            <Card sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ p: 2, bgcolor: 'primary.main', borderRadius: '50%', mr: 3, color: 'white', display: 'flex', alignItems: 'center' }}><HomeIcon /></Box>
              <Box>
                <Typography variant="caption" color="text.secondary" fontWeight="bold">Primary Service Area</Typography>
                <Typography variant="h5" fontWeight="bold">Christchurch Central & Surrounds</Typography>
              </Box>
            </Card>
          </Stack>
        </Grid>

        {/* Map Side */}
        <Grid>
          <Card sx={{ height: '100%', minHeight: { xs: 300, md: 600 }, overflow: 'hidden' }}>
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              title="Service Area Map Placeholder"
              // Note: Using a placeholder URL as a real Google Maps link requires an API key and specific coordinates
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181655.85090623126!2d172.48421832103498!3d-43.51347629562723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318e75294e7721%3A0x6b4457221008061e!2sChristchurch%2C%20New%20Zealand!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;