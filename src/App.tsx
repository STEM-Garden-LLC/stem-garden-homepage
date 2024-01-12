import { AppContextProvider } from "./context/AppContext";
import { ColorThemeContextProvider } from "./context/ColorThemeContext";

import { BrowserRouter } from "react-router-dom"

// COMPONENTS
import Navbar from "./components/navigation/ResponsiveNavbar"
import MainRouter from './routers/MainRouter'

// MUI
import theme from "../src/theme"
import { ThemeProvider } from '@mui/material';
import { CenteredFlexBox } from "./components";

export default function App() {
  return (
    <CenteredFlexBox column width='100vw' > 
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
    </CenteredFlexBox>
  )
}

