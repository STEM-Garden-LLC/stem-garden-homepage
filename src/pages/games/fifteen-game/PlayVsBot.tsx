import React, { lazy, useState, useEffect } from 'react'


import { Container, Box } from '@mui/material';




import { Title, Subtitle } from '../../../components/typography'


// Game Logic

export default function PlayVsBot() {
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
    <>
      <Title text="Fifteen Game Play Vs Bot" />
    </>
  )
}