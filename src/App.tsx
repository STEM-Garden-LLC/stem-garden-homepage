import { useState, useContext } from 'react'
import { AppContextProvider } from "./context/AppContext";

import { BrowserRouter } from "react-router-dom"


// COMPONENTS
import Navbar from "./components/navigation/Navbar"

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
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src={stemGardenLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo spinning" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
            </BrowserRouter>
        </ThemeProvider>
      </AppContextProvider>
    </>
  )
}

