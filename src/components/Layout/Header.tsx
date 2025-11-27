// src/components/Layout/Header.tsx
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import YardIcon from '@mui/icons-material/Yard';
import * as React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../data';

interface HeaderProps {
  handleDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleDrawerToggle }) => {
  const location = useLocation();
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'primary.main' }}>
            <YardIcon sx={{ fontSize: 32, mr: 1 }} />
            <Typography variant="h6" noWrap sx={{ fontWeight: 800, letterSpacing: '-0.5px', color: 'text.primary' }}>Lewis' Mowing</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {NAV_ITEMS.map((item) => {
               const isActive = location.pathname === item.path;
               return (
                <Button
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  sx={{ 
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'primary.dark' : 'text.primary',
                    '&:hover': { bgcolor: 'primary.light', color: 'white' },
                    ...(isActive && { bgcolor: 'primary.light', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }),
                    borderRadius: 25,
                    padding: '8px 16px'
                  }}
                >
                  {item.label}
                </Button>
               );
            })}
            <Button component={RouterLink} to="/contact" variant="contained" color="secondary" sx={{ ml: 2 }}>Get Quote</Button>
          </Box>
          <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle} sx={{ display: { md: 'none' }, color: 'primary.main' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;