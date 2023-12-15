import React from 'react'

// import { Container, Grid } from '@mui/material';

import { ThemedBackground } from "../../components/backgrounds";
import { Title } from '../../components/typography'



// import { ConnectFourContextProvider } from "./ConnectFourContext";
// import ConnectFourController from './ConnectFourController';

export default function ConnectFourRoot() {
  return (
    // <ConnectFourContextProvider >
    //   <ConnectFourController />
    // </ConnectFourContextProvider>
    <ThemedBackground>
      <Title text="Connect Four Root" />
    </ThemedBackground>
  )
}