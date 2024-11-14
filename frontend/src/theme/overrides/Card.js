export default function Card(theme) {
    return {
      MuiCard: {
        styleOverrides: {
          root: {
            position: 'relative',
            boxShadow: theme.customShadows.card,
            borderRadius: Number(theme.shape.borderRadius) * 2,
            zIndex: 0,
          },
        },
      },
    };
  }