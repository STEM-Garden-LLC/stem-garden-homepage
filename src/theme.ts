// in your theme file that you call `createTheme()`
// import { Theme } from '@mui/material/styles';

// declare module '@mui/styles' {
//     interface DefaultTheme extends Theme { }
// }

import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    common: {
      // transparent: 'rgba(0, 0, 0, 0)',
      white: '#FFF',
      black: '#000000',
    },
    // connectFour: {
    //   board: '#0039cb',       // blue
    //   playerOne: '#d50000',   // red
    //   playerTwo: '#ffea00',   // yellow
    //   background: '#b3e5fc',  // light blue 
    //   text: '#000000',        // black
    // },
    // magicSquareGames: {
    //   playerOne: '#ffea00',   // yellow
    //   playerTwo: '#1020ff',   // blue
    //   unclaimed: '#fff',      // white
    //   highlightWins: '#009900', // green
    //   text: '#000000',        // black
    // },
    // backgrounds: {
    //   dark: '#212121',
    //   light: '#FFFFFF',
    //   white: '#FFFFFF',
    // }, 
    primary: {
      light: '#669944',
      main: '#2e6b12',
      dark: '#004000',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#FFFFF',
      main: '#669944',
      dark: '#777777',
      contrastText: '#000000'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      // hint: 'rgba(0, 0, 0, 0.38)',
    },
    action: {
        disabledBackground: '#2e6b12',
        // disabledOpacity: '0.5'
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 14,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: '0px',
        },
      },
    },
  },
  typography: {
    h1: {
      fontWeight: 200,
    },
    button: {
      fontSize: '1.0rem',
      fontWeight: '700'
    },
  },
  status: {

  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  transitions: {    },
  zIndex: { }

});

export default theme