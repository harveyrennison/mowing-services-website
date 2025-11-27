// src/components/Layout/Footer.tsx
import { Box, Container, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import YardIcon from '@mui/icons-material/Yard';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../data';

const Footer: React.FC = () => (
  <Box sx={{ bgcolor: '#1A2027', color: 'white', py: { xs: 4, md: 6 } }}>
    <Container maxWidth="lg">
      
      {/* Main Content Stack (Replaces Grid Container) */}
      <Stack 
        direction="row" // Stack vertically on xs, horizontally on sm+
        spacing={{ xs: 4, md: 8 }} 
        // Use Flexbox properties to ensure even spacing and wrapping
        sx={{
          justifyContent: 'space-between', 
          gap: { xs: 4, sm: 8 } 
        }}
      >
        
        {/* 1. Company Info (Takes 100% on xs, 50% on sm, 33.33% on md+) */}
        <Box 
          sx={{ 
            // Control the width explicitly with basis, not grid columns
            flexBasis: { xs: '100%', sm: '45%', md: '33.33%' }, 
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <YardIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 30 }} />
            <Typography variant="h6" fontWeight={700}>Lewis' Mowing</Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'grey.400', maxWidth: 350, lineHeight: 1.6 }}>
            Reliable, professional lawn care based in Christchurch. Local expertise, guaranteed results.
          </Typography>
        </Box>
        
        {/* 2. Quick Links (Takes 50% on sm, 33.33% on md+) */}
        <Box 
          sx={{ 
            // Control the width explicitly with basis, allowing them to shrink/grow equally
            flexBasis: { xs: '45%', sm: '20%', md: '33.33%' }, 
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} gutterBottom sx={{ color: 'primary.light', borderBottom: '2px solid', borderColor: 'secondary.main', pb: 0.5 }}>
            Quick Links
          </Typography>
          <Stack spacing={1} sx={{ mt: 2 }}>
            {NAV_ITEMS.map(item => (
              <Box 
                key={item.label} 
                component={RouterLink} 
                to={item.path} 
                sx={{ 
                  color: 'grey.300', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                  '&:hover': { color: 'secondary.main', textDecoration: 'underline' } 
                }}
              >
                {item.label}
              </Box>
            ))}
          </Stack>
        </Box>
        
        {/* 3. Contact Info (Takes 50% on sm, 33.33% on md+) */}
        <Box 
          sx={{ 
            // Control the width explicitly with basis, allowing them to shrink/grow equally
            flexBasis: { xs: '45%', sm: '20%', md: '33.33%' }, 
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} gutterBottom sx={{ color: 'primary.light', borderBottom: '2px solid', borderColor: 'secondary.main', pb: 0.5 }}>
            Get in Touch
          </Typography>
          <Stack spacing={1.5} sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon fontSize="small" sx={{ mr: 1.5, color: 'secondary.main' }} />
                <Typography variant="body2" sx={{ color: 'grey.300' }}>021 555 1234</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon fontSize="small" sx={{ mr: 1.5, color: 'secondary.main' }} />
                <Typography variant="body2" sx={{ color: 'grey.300' }}>quote@lewismowing.nz</Typography>
            </Box>
          </Stack>
        </Box>
        
      </Stack>
      
      {/* Copyright Line */}
      <Box sx={{ borderTop: '1px solid #374151', mt: 6, pt: 3, textAlign: 'center' }}>
        <Typography variant="caption" sx={{ color: 'grey.600' }}>© {new Date().getFullYear()} Lewis' Mowing Services. All Rights Reserved.</Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;