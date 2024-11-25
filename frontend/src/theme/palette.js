import { alpha } from '@mui/material/styles';

// SETUP COLORS
const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const primary = {
  lighter: '#C8FAD6',
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#FFFFFF',
};

const secondary = {
  lighter: '#EFD6FF',
  light: '#C684FF',
  main: '#8E33FF',
  dark: '#5119B7',
  darker: '#27097A',
  contrastText: '#FFFFFF',
};

const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

const success = {
  lighter: '#D3FCD2',
  light: '#77ED8B',
  main: '#22C55E',
  dark: '#118D57',
  darker: '#065E49',
  contrastText: '#ffffff',
};

const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

const common = {
  black: '#000000',
  white: '#FFFFFF',
};

const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};


export default function palette(mode) {
  const light = {
    mode: 'light',
    primary: primary,
    secondary: secondary,
    info: info,
    success: success,
    warning: warning,
    error: error,
    grey: grey,
    common: common,
    action: action,
    divider: alpha(grey[500], 0.24),
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#fff',
      default: '#fff',
      neutral: grey[200],
    },
    action: {
      active: grey[600],
      hover: alpha(grey[500], 0.08),
      selected: alpha(grey[500], 0.16),
      disabled: alpha(grey[500], 0.8),
      disabledBackground: alpha(grey[500], 0.24),
      focus: alpha(grey[500], 0.24),
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
  };

  const dark = {
    mode: 'dark',
    primary: primary,
    secondary: secondary,
    info: info,
    success: success,
    warning: warning,
    error: error,
    grey: grey,
    divider: alpha(grey[500], 0.24),
    text: {
      primary: '#fff',
      secondary: grey[500],
      disabled: grey[600],
    },
    background: {
      paper: grey[800],
      default: grey[900],
      neutral: alpha(grey[500], 0.16),
    },
    action: {
      active: grey[500],
      hover: alpha(grey[500], 0.08),
      selected: alpha(grey[500], 0.16),
      disabled: alpha(grey[500], 0.8),
      disabledBackground: alpha(grey[500], 0.24),
      focus: alpha(grey[500], 0.24),
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
  };

  return mode === 'dark' ? dark : light;
}