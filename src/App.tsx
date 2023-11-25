import { useState, useContext } from 'react'
import { AppContextProvider } from "./context/AppContext";

import { BrowserRouter } from "react-router-dom"


// COMPONENTS
import Navbar from "./components/navigation/Navbar"
import MainRouter from './MainRouter'


// MUI
import theme from "./theme"
import { ThemeProvider } from '@mui/material/styles';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import stemGardenLogoWithBG from '/sg-logo-192px.png'
import stemGardenLogo from '/sg-logo-transparent-bg.png'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

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

