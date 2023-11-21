/// <reference path='../@types/TypographyProps.ts'

import { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext';

// import { TextColorEnum } from '../@types/TypographyProps.ts';
import { PictureCardProps, LinkTypeEnum } from '../../@types/Cards';

// MUI
import { Button, Box, Container, Card, CardMedia, Tooltip } from '@mui/material';
import Carousel from 'react-material-ui-carousel'


// Router
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


// CUSTOM COMPONENTS
import { Title, Subtitle, Heading, Paragraph } from '../../components/typography';
import { ButtonWithIcon, ScrollToTopButton } from '../../components/navigation';
import PictureRow from '../../components/PictureRow';
import PictureCard from '../../components/cards/PictureCard';
import OurStorySection from './OurStorySection';
import WhatWeGrowSection from './WhatWeGrowSection';
// import { Footer, ScrollToTopButton } from '../../components/navigation';

// ASSETS
import landing_page_text from '../../text/landing'
import { 
  leafy_background, 
  practicing_math_facts,
  girls_playing_connect_four, 
  banana_papaya_turmeric_flower, 
} from '../../assets/landing'

export default function LandingPage() {
  return (
    <>      
      <LeafyTopSection />
      <OurStorySection />
      <WhatWeGrowSection />
      <ScrollToTopButton />
    </>
  )
}

function LeafyTopSection() {
  const { narrowScreen, navbarHeightPx, availableHeight, containerWidth } = useContext(AppContext)

  const gradient = (narrowScreen) ?
    'linear-gradient(90deg, rgba(58,94,22,0.80) 0%, rgba(58,99,22,0.80) 100%)'
    : 'linear-gradient(90deg, rgba(58,94,22,0.30) 0%, rgba(58,94,22,0.80) 10%, rgba(58,94,22,0.80) 90%, rgba(58,99,22,0.30) 100%)'

  const leafyBackgroundStyles = {
    width: '100vw',
    marginTop: `${navbarHeightPx}px`,
    paddingBottom: `${2 * navbarHeightPx}px`,
    backgroundImage: `
      ${gradient},
      url(${leafy_background})
    `,
    backgroundPosition: 'center top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
  } 
  
  return (
    <Box sx={leafyBackgroundStyles}>
      <Container
        maxWidth='md' 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}    
      >
        <Box id='title' 
          display='flex'
          flexDirection='column'
          paddingY={{ xs: '2.0rem', sm: '3.0rem' }} 
        >
          {/* <Title text='Sowing seeds of' />
          <Title text='life-long learning' />
          <Title text='and DIY-spirit' gutterBottom /> */}
          
          <Title text='Sowing seeds of' textColor="white" />
          <Title text='life-long learning' textColor="white" />
          <Title text='and DIY-spirit' textColor="white" gutterBottom />
          {/* <Title text='Sowing seeds of' textColor={TextColorEnum.white} />
          <Title text='life-long learning' textColor={TextColorEnum.white} />
          <Title text='and DIY-spirit' textColor={TextColorEnum.white} gutterBottom />
          <Subtitle text='The STEM Garden is a micro-farm in the heart of New Orleans. We sell organic banana, papaya, fig, turmeric, and more. We also offer tutoring services and free resources for learning math.' align='justify' gutterBottom /> */}
        </Box>
        {narrowScreen ? <MobileCards /> : <DesktopCards />}

      </Container>
    </Box>
  )
}


function MobileCards() {
  const { containerWidth } = useContext(AppContext)
  const cardRowHeight = `${Math.floor(containerWidth * 0.50)}px`
  const cardWidth = `${Math.floor(containerWidth * 0.40)}px`
  return (
    <>
      <Box 
        height={cardRowHeight}
        display='flex' 
        justifyContent='space-evenly'
        alignItems='stretch'
        paddingBottom={2}
      > 
        <PictureCard 
          title='What We Grow' 
          linkType={LinkTypeEnum.HashLink}
          linkTo='#what-we-grow'
          imgUrl={banana_papaya_turmeric_flower} 
          cardWidth={cardWidth}
        />
        <PictureCard 
          title='Teaching Services' 
          linkTo='services'
          imgUrl={practicing_math_facts} 
          cardWidth={cardWidth}
        />
      </Box>
      <Box 
        height={cardRowHeight}
        display='flex' 
        justifyContent='space-evenly'
        alignItems='stretch'
      > 
        <PictureCard 
          title='Teaching Services' 
          linkTo='services'
          imgUrl={practicing_math_facts} 
          cardWidth={cardWidth}
        />
        <PictureCard 
          title='Math Games' 
          linkTo='resources/math-games'
          imgUrl={girls_playing_connect_four} 
          cardWidth={cardWidth}
        />
      </Box>
    </>
  )
}

function DesktopCards() {
  const { containerWidth } = useContext(AppContext)
  const cardWidth = `${Math.floor(containerWidth / 3 * 0.95)}px`
  const cardRowHeight = `${Math.floor(containerWidth / 3 * 0.95 * 1.2)}px`

  return (
    <Box 
      height={cardRowHeight}
      display='flex' 
      justifyContent='space-evenly'
      alignItems='stretch'
    > 
      <PictureCard 
        title='What We Grow' 
        linkType={LinkTypeEnum.HashLink}
        linkTo='#what-we-grow'
        imgUrl={banana_papaya_turmeric_flower} 
        cardWidth={cardWidth}
      />
      <PictureCard 
        title='Teaching Services' 
        linkTo='services'
        imgUrl={practicing_math_facts} 
        cardWidth={cardWidth}
      />
      <PictureCard 
        title='Math Games' 
        linkTo='resources/math-games' 
        imgUrl={girls_playing_connect_four} 
        cardWidth={cardWidth}
      />
    </Box>
  )
}


