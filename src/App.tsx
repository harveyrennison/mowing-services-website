// src/App.tsx
import {
    Box, Button, CssBaseline, Drawer, GlobalStyles,
    List, ListItem, ListItemButton, ListItemText, ThemeProvider, Typography
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Link as RouterLink, Routes } from 'react-router-dom';

// IMPORTS FROM REFACTORED FILES
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import { NAV_ITEMS } from './data';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import { theme } from './theme/theme';


const App: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <ThemeProvider theme={theme}>
      {/* Set min height to 100% for sticky footer */}
      <GlobalStyles styles={{ 
        html: { height: '100%' }, 
        body: { height: '100%', backgroundColor: '#F5F7FA' }, 
        '#root': { height: '100%' } 
      }} />
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          {/* Header (with logic passed down) */}
          <Header handleDrawerToggle={handleDrawerToggle} />
          
          {/* Mobile Drawer (Logic remains here as it controls App state) */}
          <Drawer 
            variant="temporary" 
            anchor="right" 
            open={mobileOpen} 
            onClose={handleDrawerToggle} 
            ModalProps={{ keepMounted: true }} 
            sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: 250 } }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" color="primary" sx={{ mb: 2, fontWeight: 'bold' }}>Lewis' Mowing</Typography>
              <List>
                {NAV_ITEMS.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton component={RouterLink} to={item.path} sx={{ textAlign: 'left', py: 1.5 }}>
                      <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <ListItem disablePadding sx={{ justifyContent: 'center', mt: 3, px: 2 }}>
                  <Button component={RouterLink} to="/contact" variant="contained" color="secondary" fullWidth>Get Quote</Button>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          
          {/* Main Content Area (Pages) */}
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Box>
          
          {/* Footer */}
          <Footer />
          
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;