import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------
const LIGHT_MODE = 'rgb(145, 158, 171)';
const DARK_MODE = 'rgb(0, 0, 0)';

export default function customShadows(mode) {
  const color = mode === 'light' ? LIGHT_MODE : DARK_MODE;

  return {
    z1: `0 1px 2px 0 ${alpha(color, 0.16)}`,
    z4: `0 4px 8px 0 ${alpha(color, 0.16)}`,
    z8: `0 8px 16px 0 ${alpha(color, 0.16)}`,
    z12: `0 12px 24px -4px ${alpha(color, 0.16)}`,
    z16: `0 16px 32px -4px ${alpha(color, 0.16)}`,
    z20: `0 20px 40px -4px ${alpha(color, 0.16)}`,
    z24: `0 24px 48px 0 ${alpha(color, 0.16)}`,
    //
    primary: `0 8px 16px 0 ${alpha('#2065D1', 0.24)}`,
    info: `0 8px 16px 0 ${alpha('#1890FF', 0.24)}`,
    secondary: `0 8px 16px 0 ${alpha('#3366FF', 0.24)}`,
    success: `0 8px 16px 0 ${alpha('#54D62C', 0.24)}`,
    warning: `0 8px 16px 0 ${alpha('#FFC107', 0.24)}`,
    error: `0 8px 16px 0 ${alpha('#FF4842', 0.24)}`,
    //
    card: `0 0 2px 0 ${alpha(color, 0.08)}, 0 12px 24px -4px ${alpha(color, 0.08)}`,
    dialog: `-40px 40px 80px -8px ${alpha(color, 0.24)}`,
    dropdown: `0 0 2px 0 ${alpha(color, 0.24)}, -20px 20px 40px -4px ${alpha(color, 0.24)}`,
  };
}