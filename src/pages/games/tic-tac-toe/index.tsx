import React, { lazy, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import {  Container,  Box } from '@mui/material';


import { ThemedBackground } from "../../../components/backgrounds";
import { Title, Subtitle } from '../../../components/typography'


// import { generatePositionToOutcomeMap } from "../solution";

// My Components
// import Welcome from './pages/Welcome'
// const PlayWithCoach = lazy(() => import('./pages/PlayWithCoach'))
// const PlayVsBot = lazy(() => import('./pages/PlayVsBot')) 


export default function TicTacToeRoutes() {
  const [outcomeMap, setOutcomeMap] = useState(null)
  
  // useEffect(() => {
  //   const generateOutcomeMapAsync = async () => {
  //     const map = await generatePositionToOutcomeMap()
  //     setOutcomeMap(map)
  //     console.log("Outcome Map Generated");
  //   }
  //   generateOutcomeMapAsync()
  // }, [])

  return (
    <Box 
      width='100vw' 
      height='calc(100vh - 48px)'
      overflow='hidden'
      bgcolor='common.black'
      color='common.white'
    >
      <ThemedBackground>
        <Title text="Tic Tac Toe" />
      </ThemedBackground>
      {/* <Routes >
        <Route index element={<Welcome />} />
        <Route path="play-with-coach" element={<PlayWithCoach outcomeMap={outcomeMap} />} />
        <Route path="play-vs-bot" element={<PlayVsBot outcomeMap={outcomeMap} />} />
      </Routes> */}
    </Box>
  )
}
