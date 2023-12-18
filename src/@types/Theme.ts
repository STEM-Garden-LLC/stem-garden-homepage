declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: string
      },
      common: {
        white: string,
        black: string,
        transparent: string
      }
    }
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette: {
      primary: {
        main: string
      },
      common: {
        white: string,
        black: string,
        transparent: string
      }
    }
    status?: {
      danger: string;
    };
  }
}
