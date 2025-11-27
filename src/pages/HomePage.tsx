// src/pages/HomePage.tsx
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import HeroSection from '../components/Common/HeroSection';
import SectionHeader from '../components/Common/SectionHeader';
import { CHECKLIST_ITEMS, SERVICE_DATA } from '../data';
import MenuBookIcon from '@mui/icons-material/MenuBook';



const HomePage: React.FC = () => (
  <>
    <HeroSection />
    
    <Container sx={{ py: { xs: 8, md: 12 } }}>
      
      {/* 1. Header is now above the two-column grid */}
      <SectionHeader title="Our Commitment to Your Lawn" centered subtitle="See why we are Christchurch's best choice, and explore our primary care options below." />
      
      {/* 2. Main Two-Column Layout (Side-by-Side on Desktop) */}
      {/* 2. Main Two-Column Layout */}
        <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 6, md: 10 }}
        justifyContent="space-between"
        alignItems="flex-start"
        >

            {/* LEFT SIDE */}
            <Box flex={1} pr={{ md: 4 }}>
                <Typography variant="h4" fontWeight={600} gutterBottom color="primary.dark">
                Why Choose Lewis?
                </Typography>

                <Typography variant="body1" color="text.secondary">
                    Local, dedicated, and detail-oriented.
                </Typography>

                <List sx={{ '.MuiListItemText-primary': { fontSize: '1.05rem', fontWeight: 500 } }}>
                {CHECKLIST_ITEMS.map((text, i) => (
                    <ListItem key={i} disableGutters>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>

                <Button
                    component={RouterLink}
                    to="/about"
                    variant="outlined"
                    
                    color="primary"
                    sx={{ mt: 3 }}
                    startIcon={<MenuBookIcon/>}
                >
                Read Lewis' Story
                </Button>
            </Box>

            {/* RIGHT SIDE - Updated for Modern/Creative Layout */}
<Box flex={1} pl={{ md: 4 }}>
    <Typography variant="h4" fontWeight={600} gutterBottom color="primary.dark">
        Our Core Services
    </Typography>
    <Typography variant="body1" color="text.secondary">
        Committed to keeping your lawn looking its best.
    </Typography>

    <Grid container spacing={2.5}> {/* Increased spacing for a cleaner look */}
        {SERVICE_DATA.map((service) => (
            <Grid key={service.name}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        p: 1, // Slight padding for the item box
                    }}
                >
                    {/* Icon Container - Visually similar to the checkmark on the left, but distinct */}
                    <Box
                        sx={{
                            p: 1.5,
                            bgcolor: 'secondary.main',
                            borderRadius: '8px', // Slightly squared corners for a modern feel
                            color: 'white',
                            mr: 2,
                            mt: 0.5, // Align icon with the top of the text
                            flexShrink: 0, // Ensure icon doesn't shrink
                        }}
                    >
                        <service.Icon sx={{ fontSize: 24 }} />
                    </Box>

                    {/* Text Content */}
                    <Box>
                        <Typography variant="h6" fontWeight={700} sx={{ mt: 0, mb: 0.5 }}>
                            {service.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {/* Display the full description for better context */}
                            {service.description}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        ))}
    </Grid>

    {/* See All Services Button */}
    <Box sx={{ pt: 4, textAlign: 'center' }}> {/* Adjusted padding to separate button from services */}
        <Button
            component={RouterLink}
            to="/services"
            variant="contained"
            color="primary"
            endIcon={<DesignServicesIcon />}
        >
            View All Services
        </Button>
    </Box>
</Box>
        </Stack>

      
    </Container>

    {/* Simple CTA section (kept separate for full-width dark background) */}
    <Box sx={{ bgcolor: 'primary.dark', py: 8, color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
            <Typography variant="h4" fontWeight={700} gutterBottom>Ready for a Perfectly Manicured Lawn?</Typography>
            <Typography variant="h6" fontWeight={300} sx={{ mb: 4 }}>
                We're committed to the highest standards. Get your free quote today!
            </Typography>
            <Button 
                component={RouterLink} 
                to="/contact" 
                variant="contained" 
                color="secondary" 
                size="large"
                startIcon={<PhoneIcon />}
            >
                Contact Us Now
            </Button>
        </Container>
    </Box>
  </>
);

export default HomePage;