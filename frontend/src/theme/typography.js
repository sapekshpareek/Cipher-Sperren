function pxToRem(value) {
    return `${value / 16}rem`;
  }
  
  const typography = {
    fontFamily: 'var(--font-geist-sans)',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.3,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.4,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: '1.25rem',
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: '1.125rem',
    },
    h6: {
      fontWeight: 700,
      lineHeight: 1.6,
      fontSize: '1.0625rem',
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: '1rem',
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: '0.875rem',
    },
    body1: {
      lineHeight: 1.5,
      fontSize: '1rem',
    },
    body2: {
      lineHeight: 1.5,
      fontSize: '0.875rem',
    },
    button: {
      fontWeight: 700,
      lineHeight: 1.71,
      fontSize: '0.875rem',
      textTransform: 'capitalize',
    },
    caption: {
      lineHeight: 1.5,
      fontSize: '0.75rem',
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: '0.75rem',
      textTransform: 'uppercase',
    },
  };
  
  export default typography;
  