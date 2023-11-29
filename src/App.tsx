import { AppContextProvider } from "./context/AppContext";

import { BrowserRouter } from "react-router-dom"

// COMPONENTS
import Navbar from "./components/navigation/Navbar"
import MainRouter from './routers/MainRouter'

// MUI
import theme from "../src/theme"
import { ThemeProvider } from '@mui/material';

export default function App() {
  return (
    <> 
      <AppContextProvider >
        <ThemeProvider theme={theme}>
          <BrowserRouter>

            <Navbar />

            <MainRouter />


            </BrowserRouter>
        </ThemeProvider>
      </AppContextProvider>
    </>
  )
}

