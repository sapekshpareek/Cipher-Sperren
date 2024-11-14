import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import customShadows from './customShadows';
import componentsOverrides from './overrides';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

export default function ThemeProvider({ children }) {
  const themeMode = 'light';

  const themeOptions = useMemo(() => {
    const currentPalette = palette(themeMode);
    const currentShadows = shadows(themeMode);
    const currentCustomShadows = customShadows(themeMode);

    const theme = createTheme({
      palette: currentPalette,
      typography,
      shadows: currentShadows,
      customShadows: currentCustomShadows,
      shape: { borderRadius: 8 },
    });

    theme.components = componentsOverrides(theme);

    return theme;
  }, [themeMode]);

  return <MUIThemeProvider theme={themeOptions}>{children}</MUIThemeProvider>;
}