import { AppContextProvider } from "./context/AppContext";
import { ColorThemeContextProvider } from "./context/ColorThemeContext";

import { BrowserRouter } from "react-router-dom"

// COMPONENTS
import Navbar from "./components/navigation/ResponsiveNavbar"
import MainRouter from './routers/MainRouter'

// MUI
import theme from "../src/theme"
import { ThemeProvider } from '@mui/material';

export default function App() {
  return (
    <> 
      <AppContextProvider>
        <ColorThemeContextProvider>
          <ThemeProvider theme={theme}>
            <BrowserRouter>

              <Navbar />

              <MainRouter />

              </BrowserRouter>
          </ThemeProvider>
        </ColorThemeContextProvider>
      </AppContextProvider>
    </>
  )
}

