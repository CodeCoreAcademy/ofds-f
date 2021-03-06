import { createTheme } from '@mui/material/styles';

const AppTheme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#edf0f2',
      dark: '#bbbebf',
      contrastText: '#000000',
    },
    secondary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    // secondary: {
    //   light: '#ae52d4',
    //   main: '#7b1fa2',
    //   dark: '#4a0072',
    //   contrastText: '#ffffff',
    // },
  },
});
export default AppTheme;