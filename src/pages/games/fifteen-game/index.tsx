import React, { lazy, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';

// import { generatePositionToOutcomeMap } from "../solution";



import { ThemedBackground } from "../../../components/backgrounds";
import { Title, Subtitle } from '../../../components/typography'

// const Welcome = lazy(() => import('./pages/Welcome'))
// const PlayVsFriend = lazy(() => import('./pages/PlayVsFriend')) 
// const PlayVsBot = lazy(() => import('./pages/PlayVsBot')) 

// Game Logic

export default function FifteenGameRoutes() {
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
      overflow='scroll'
      bgcolor='common.black'
      color='common.white'
    >
      <ThemedBackground>
        <Title text="Fifteen Game" />
      </ThemedBackground>
      <Routes >
        {/* <Route index element={<Welcome />} /> */}
        {/* <Route path="play-vs-friend" element={<PlayVsFriend outcomeMap={outcomeMap} />} /> */}
        {/* <Route path="play-vs-bot" element={<PlayVsBot outcomeMap={outcomeMap} />} /> */}
      </Routes>
    </Box>
  )
}