import { useTheme as useThemeBase, createTheme } from '@shopify/restyle';

export const Pallete = {
  primary: '#4313A1',
  lightPrimary: '#DAC5FF',
  lighterPrimary: '#ECE3FC',

  asYellow: '#FFDBA0',
  asPink: '#E194AE',
  asCream: '#FCB497',
  asGreen: '#1ECD93',
  asRed: '#F25555',

  textBlack: '#1F1926',
  textMedium: '#483D5C',
  textLight: '#5F527A',

  errorBorder: '#EF3535',
  errorText: '#FF6369',
  errorDefaultBorder: '#c5c5c5',

  chipSuccess: '#F1EDFD',
  chipError: '#FFF5F5',

  appleButton: '#18141f',

  background: '#FCFAFE',

  dotBackground: 'rgba(0,0,0,0.25)',
  dotActive: '#5928e5',
  orBorder: '#B8B8B8',
  orColor: '#565656',

  white: '#FFFFFF',
  transparent: 'rgba(255, 255, 255, 0)',
  transparentBorder: 'rgba(138, 149, 158, 0.3)',
};

const theme = createTheme({
  colors: {
    ...Pallete,
  },
  spacing: {
    o: 0,
    xs: 4,
    sm: 6,
    s: 8,
    ms: 12,
    m: 16,
    ml: 20,
    l: 24,
    ll: 28,
    xl: 30,
    mxl: 38,
    xxl: 65,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    m: 26,
    s: 10,
  },
  textVariants: {
    body1: {
      fontSize: 16,
      lineHeight: 20.83,
      fontFamily: 'regular',
    },
    obTitle: {
      fontSize: 24,
      lineHeight: 31.25,
      fontFamily: 'bold',
    },
    obDescription: {
      fontSize: 18,
      lineHeight: 18.23,
      fontFamily: 'regular',
    },
    authDescription: {
      fontSize: 14,
      lineHeight: 18.23,
      fontFamily: 'regular',
    },
    authSubDescription: {
      fontSize: 14,
      lineHeight: 18.23,
      fontFamily: 'medium',
    },
    buttonLabel: {
      fontSize: 16,
      lineHeight: 20.83,
      fontFamily: 'bold',
    },
    labelSm: {
      fontSize: 12,
      lineHeight: 15.62,
      fontFamily: 'regular',
    },
    authAlterLinkBase: {
      fontSize: 13,
      lineHeight: 15.73,
      fontFamily: 'regular',
      color: 'textBlack',
    },
    authAlterSpan: {
      fontSize: 12,
      lineHeight: 15.62,
      fontFamily: 'bold',
    },
    step: {
      fontSize: 14,
      lineHeight: 18.23,
      fontFamily: 'bold',
    },
    chip: {
      fontSize: 12,
      lineHeight: 15.62,
      fontFamily: 'medium',
    },
    successLabel: {
      fontSize: 18,
      lineHeight: 23.44,
      fontFamily: 'bold',
    },
  },
});

export type Theme = typeof theme;
export const useTheme = () => useThemeBase<Theme>();
export default theme;
