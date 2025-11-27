// src/components/Common/SectionHeader.tsx
import { Box, Typography } from '@mui/material';
import * as React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = false }) => (
  <Box sx={{ mb: 6, textAlign: centered ? 'center' : 'left' }}>
    <Typography variant="overline" color="primary" sx={{ letterSpacing: 2, fontWeight: 'bold' }}>
      Lewis' Mowing Services
    </Typography>
    <Typography variant="h2" color="text.primary">
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: centered ? 700 : '100%', mx: centered ? 'auto' : 0, fontWeight: 300 }}>
        {subtitle}
      </Typography>
    )}
    <Box sx={{ width: 80, height: 6, bgcolor: 'secondary.main', mt: 2, mx: centered ? 'auto' : 0, borderRadius: 2 }} />
  </Box>
);

export default SectionHeader;