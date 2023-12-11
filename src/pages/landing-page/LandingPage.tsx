/// <reference path='../@types/TypographyProps.ts'

import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';


// MUI
import { Box, Container } from '@mui/material';

// TYPES
import { LinkTypeEnum } from '../../@types/Links'
import { TextColorEnum } from '../../@types/TypographyProps';

// COMPONENTS
import { Title } from '../../components/typography';
import { Footer, ScrollToTopButton } from '../../components/navigation';
import { LeafyBackground, ThemedBackground } from '../../components/backgrounds';
import PictureCard from '../../components/cards/PictureCard';
import OurStorySection from './OurStorySection';
import WhatWeGrowSection from './WhatWeGrowSection';

// ASSETS
import { 
  practicing_math_facts,
  girls_playing_connect_four, 
  banana_papaya_turmeric_flower, 
} from '../../assets/landing'

export default function LandingPage() {
  return (
    <Box>
      <LeafyBackground>
        <TopSection />
      </LeafyBackground>
      <ThemedBackground>
        <OurStorySection />
        <WhatWeGrowSection />
        <ScrollToTopButton />
      </ThemedBackground>   
      <Footer />
    </Box>
  )
}

function TopSection() {
  const { narrowScreen } = useContext(AppContext)
  
  return (
    <>
      <LandingPageTitle />
      {narrowScreen ? <MobileCards /> : <DesktopCards />}
    </>    
  )
}

function LandingPageTitle() {
  return (
    <Box id='title' 
      display='flex'
      flexDirection='column'
    >
      <Title text='Sowing seeds of' textColor={TextColorEnum.white} />
      <Title text='life-long learning' textColor={TextColorEnum.white} />
      <Title text='and DIY-spirit' textColor={TextColorEnum.white} gutterBottom />
    </Box>
  )
}


function MobileCards() {
  const { containerWidth } = useContext(AppContext)
  const cardHeight = `${Math.floor(containerWidth * 0.50)}px`
  const cardWidth = `${Math.floor(containerWidth * 0.40)}px`
  const textColor = TextColorEnum.white
  const bgColor = '32,32,32'

  return (
    <>
      <Box 
        display='flex' 
        justifyContent='space-evenly'
        alignItems='stretch'
        paddingBottom={2}
      > 
        <PictureCard 
          title='What We Grow' 
          linkType={LinkTypeEnum.HashLink}
          linkTo='#what-we-grow'
          imageUrl={banana_papaya_turmeric_flower} 
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          textColor={textColor}
          bgColor={bgColor}
        />
        <PictureCard 
          title='Our Story' 
          linkType={LinkTypeEnum.HashLink}
          linkTo='#our-story'
          imageUrl={practicing_math_facts} 
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          textColor={textColor}
          bgColor={bgColor}
        />
      </Box>
      <Box 
        display='flex' 
        justifyContent='space-evenly'
        alignItems='stretch'
      > 
        <PictureCard 
          title='Teaching Services' 
          linkTo='services'
          imageUrl={practicing_math_facts} 
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          textColor={textColor}
          bgColor={bgColor}
        />
        <PictureCard 
          title='Math Games' 
          linkTo='resources/math-games'
          imageUrl={girls_playing_connect_four} 
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          textColor={textColor}
          bgColor={bgColor}
        />
      </Box>
    </>
  )
} 

function DesktopCards() {
  const { containerWidth } = useContext(AppContext)
  const cardWidth = `${Math.floor(containerWidth / 3 * 0.92)}px`
  const cardHeight = `${Math.floor(containerWidth / 3 * 0.95 * 1.2)}px`
  const textColor = TextColorEnum.white
  const bgColor = '32,32,32'

  return (
    <Box 
      width={containerWidth}
      display='flex' 
      justifyContent='space-between'
      alignItems='stretch'
    > 
      <PictureCard 
        title='What We Grow' 
        linkType={LinkTypeEnum.HashLink}
        linkTo='#what-we-grow'
        imageUrl={banana_papaya_turmeric_flower} 
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        textColor={textColor}
        bgColor={bgColor}
      />
      <PictureCard 
        title='Teaching Services' 
        linkTo='services'
        imageUrl={practicing_math_facts} 
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        textColor={textColor}
        bgColor={bgColor}
      />
      <PictureCard 
        title='Math Games' 
        linkTo='resources/math-games' 
        imageUrl={girls_playing_connect_four} 
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        textColor={textColor}
        bgColor={bgColor}
      />
    </Box>
  )
}


