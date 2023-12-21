// test-theme.js
import { extendTheme } from 'native-base';

export const TEST_THEME = extendTheme({
  colors: {
    green: {
      700: '#00875F',
      500: '#00B37E',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6'
    },
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    sm: 16,
  },
  sizes: {
    14: 56,
  }
});