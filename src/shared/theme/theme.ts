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

  label: '#5F527A',
  input: '#483D5C',

  appleButton: '#18141f',

  background: '#FCFAFE',

  dotBackground: 'rgba(0,0,0,0.25)',
  dotActive: '#5928e5',
  orBorder: '#B8B8B8',
  orColor: '#565656',

  white: '#FFFFFF',
};

const theme = createTheme({
  colors: {
    ...Pallete,
  },
  spacing: {
    o: 0,
    xs: 4,
    s: 8,
    m: 16,
    ml: 20,
    l: 24,
    ll: 28,
    xl: 30,
    xxl: 65,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    m: 26,
  },
  textVariants: {
    obTitle: {
      fontSize: 24,
      lineHeight: 32.4,
      fontFamily: 'bold',
    },
    obDescription: {
      fontSize: 18,
      lineHeight: 18.23,
      fontFamily: 'regular',
    },
    buttonLabel: {
      fontSize: 16,
      lineHeight: 20.83,
      fontFamily: 'bold',
    },
    orlabel: {
      fontSize: 12,
      lineHeight: 15.62,
      fontFamily: 'regular',
      color: 'orColor',
      marginHorizontal: 'ml',
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
      color: 'primary',
    },
  },
});

export type Theme = typeof theme;
export const useTheme = () => useThemeBase<Theme>();
export default theme;
