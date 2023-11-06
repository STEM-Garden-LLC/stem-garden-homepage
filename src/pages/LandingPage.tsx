

import React, { useContext } from 'react'
import { Box, Container, Card, CardMedia } from '@mui/material';

import { AppContext } from '../context/AppContext';

import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


// CUSTOM COMPONENTS
import { Title, Subtitle, Heading } from '../components/typography';
// import TopLandingSection from './TopLandingSection';
// import OurStorySection from './OurStorySection';
// import WhatWeGrowSection from './WhatWeGrowSection';
// import { Footer, ScrollToTopButton } from '../../components/navigation';

// ASSETS
import leafy_background from '../assets/leafy_background.jpg';
import practicing_math_facts from '../assets/landing/practicing_math_facts.jpg'
import girls_playing_connect_four from '../assets/landing/girls_playing_math_fact_connect_four.jpg'
import banana_papaya_turmeric_flower from '../assets/landing/banana_papaya_turmeric.jpg'


export default function LandingPage() {
  return (
    <>
      <LeafyTopSection />
      <OurStorySection />

    </>
  )
}

function LeafyTopSection() {
  const { narrowScreen, navbarHeightPx, availableHeight, containerWidth } = useContext(AppContext)

  const leafyBackgroundHeight = (availableHeight > containerWidth) ? availableHeight : containerWidth

  const gradient = (narrowScreen) ?
    'linear-gradient(90deg, rgba(58,94,22,0.80) 0%, rgba(58,99,22,0.80) 100%)'
    : 'linear-gradient(90deg, rgba(58,94,22,0.30) 0%, rgba(58,94,22,0.80) 10%, rgba(58,94,22,0.80) 90%, rgba(58,99,22,0.30) 100%)'

  const leafyBackgroundStyles = {
    width: '100vw',
    height: `${leafyBackgroundHeight}px`,
    marginTop: `${navbarHeightPx}px`,
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
          paddingY={{ xs: '2.0rem', sm: '6.0rem' }} 
        >
          <Title text='Sowing seeds of' textColor='white' />
          <Title text='life-long learning' textColor='white' />
          <Title text='and DIY-spirit' textColor='white' gutterBottom />
          {/* <Subtitle text='The STEM Garden is a micro-farm in the heart of New Orleans. We sell organic banana, papaya, fig, turmeric, and more. We also offer tutoring services and free resources for learning math.' align='justify' gutterBottom /> */}
        </Box>
        {narrowScreen ? <MobileCards /> : <DesktopCards />}

      </Container>
    </Box>
  )
}

enum LinkTypeEnum {
  RouterLink = 'RouterLink',
  HashLink = 'HashLink'
}

interface LandingPageCardProps {
  title: string;
  imgUrl: string;
  cardWidth: string;
  linkTo: string;
  linkType?: LinkTypeEnum;
}

function MobileCards() {
  const { containerWidth } = useContext(AppContext)

  const cardRowHeight = `${Math.floor(containerWidth * 0.55)}px`
  const cardWidth = `${Math.floor(containerWidth * 0.45)}px`
  return (
    <>
      <Box 
        height={cardRowHeight}
        display='flex' 
        justifyContent='space-evenly'
        alignItems='stretch'
        paddingBottom={2}
      > 
        <LandingCard 
          title='What We Grow' 
          linkType={LinkTypeEnum.HashLink}
          linkTo='#what-we-grow'
          imgUrl={banana_papaya_turmeric_flower} 
          cardWidth={cardWidth}
        />
        <LandingCard 
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
        <LandingCard 
          title='Teaching Services' 
          linkTo='services'
          imgUrl={practicing_math_facts} 
          cardWidth={cardWidth}
        />
        <LandingCard 
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
  const cardRowHeight = '340px' 
  const cardWidth =  '280px' 
  return (
    <Box 
      height={cardRowHeight}
      display='flex' 
      justifyContent='space-evenly'
      alignItems='stretch'
    > 
      <LandingCard 
        title='What We Grow' 
        linkType={LinkTypeEnum.HashLink}
        linkTo='#what-we-grow'
        imgUrl={banana_papaya_turmeric_flower} 
        cardWidth={cardWidth}
      />
      <LandingCard 
        title='Teaching Services' 
        linkTo='services'
        imgUrl={practicing_math_facts} 
        cardWidth={cardWidth}
      />
      <LandingCard 
        title='Math Games' 
        linkTo='resources/math-games' 
        imgUrl={girls_playing_connect_four} 
        cardWidth={cardWidth}
      />
    </Box>
  )
}

function LandingCard(props:LandingPageCardProps) {
  const { title, linkTo, linkType = 'RouterLink', imgUrl, cardWidth } = props
  
  const content = (
    <Box width={cardWidth} height='100%' padding={1} >
      <Card raised 
        sx={{ 
          height: '100%',
          width: '100%',
          bgcolor: 'darkGrey',
          position: 'relative',
          borderRadius: '1rem',
        }}
      >
        <CardMedia
          component='img'
          image={imgUrl}
          alt={title}
          sx={{ 
            position: 'absolute', 
            top: 0,
            zIndex: 10
          }}
        />
        <Box 
          sx={{ 
            background: 'linear-gradient(0deg, rgba(32,32,32,1) 85%, rgba(32,32,32,0.5) 94%, rgba(32,32,32,0.1) 100%)',
            position: 'absolute',
            bottom: 0,
            zIndex: 20,
            width: '100%',
            height: '23%',
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Heading text={title} textColor="white" />
        </Box>
      </Card>
    </Box>
  )

  return (
    <>
      {linkType == 'RouterLink' ? 
        <RouterLink to={linkTo} children={content} /> : 
        <HashLink smooth to={linkTo} children={content} /> }
    </>
  )
}

// A summary with buttons linking to the more complete "OurStoryPage"
function OurStorySection() {
  const { narrowScreen, availableHeight, containerWidth, colorTheme } = useContext(AppContext)

  console.log(`Color Theme: ${colorTheme}`);
  
   
  return (
    <Box sx={{ width: '100vw' }}>
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
          paddingY={{ xs: '2.0rem', sm: '6.0rem' }} 
        >
          <Title text='Our Story' gutterBottom />
          {/* <Subtitle text='The STEM Garden is a micro-farm in the heart of New Orleans. We sell organic banana, papaya, fig, turmeric, and more. We also offer tutoring services and free resources for learning math.' align='justify' gutterBottom /> */}
        </Box>
        {narrowScreen ? <MobileCards /> : <DesktopCards />}

      </Container>
    </Box>
  )
}