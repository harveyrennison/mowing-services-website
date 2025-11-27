// src/data/index.ts
import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

// Icons
import ContentCutIcon from '@mui/icons-material/ContentCut';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import YardIcon from '@mui/icons-material/Yard';

interface Service {
  name: string;
  description: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

interface NavItem {
  label: string;
  path: string;
}

export const SERVICE_DATA: Service[] = [
  { name: 'Precision Mowing', description: 'Fortnightly cuts with professional edging and blow-down. We leave stripes that make your neighbours jealous.', Icon: ContentCutIcon },
  { name: 'Hedge & Shrub Trimming', description: 'Expert shrub and hedge shaping to keep your property looking sharp, tidy, and well-maintained.', Icon: LocalFloristIcon },
  { name: 'Lawn Restoration & Repair', description: 'Targeted fertilizing, patch repair, and aeration to bring dead or struggling grass back to a vibrant life.', Icon: DesignServicesIcon },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const CHECKLIST_ITEMS = [
    'Locally Owned & Operated in Christchurch',
    'Commercial Grade, Reliable Equipment',
    'Green Waste Removal',
    'Guaranteed Reliable Schedule',
    '100% Satisfaction Guarantee',
];
