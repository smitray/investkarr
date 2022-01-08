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

  background: '#FCFAFE',
};

const theme = createTheme({
  colors: {
    primary: Pallete.primary,
    lightPrimary: Pallete.lightPrimary,
    lighterPrimary: Pallete.lighterPrimary,
    asYellow: Pallete.asYellow,
    asPink: Pallete.asPink,
    asCream: Pallete.asCream,
    asGreen: Pallete.asGreen,
    asRed: Pallete.asRed,
    textBlack: Pallete.textBlack,
    textMedium: Pallete.textMedium,
    textLight: Pallete.textLight,
    label: Pallete.label,
    input: Pallete.input,
    background: Pallete.background,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    ml: 20,
    l: 24,
    ll: 28,
    xl: 30,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    obTitle: {
      fontSize: 24,
      lineHeight: 32.4,
      fontFamily: 'bold',
      color: 'textBlack',
    },
  },
});

export type Theme = typeof theme;
export const useTheme = () => useThemeBase<Theme>();
export default theme;
