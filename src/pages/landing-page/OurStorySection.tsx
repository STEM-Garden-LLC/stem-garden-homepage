/// <reference path='../@types/TypographyProps.ts'

////////////////////////
//     Our Story      //
////////////////////////

// A summary with buttons linking to the more complete "OurStoryPage"

import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

// import { TextColorEnum } from '../@types/TypographyProps.ts';


// MUI
import { Box, Container } from '@mui/material';


// Router

// Font Awesome
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


// CUSTOM COMPONENTS
import { Title, Paragraph } from '../../components/typography';
import { ButtonWithIcon } from '../../components/navigation'
import PictureRow from '../../components/PictureRow';
// import WhatWeGrowSection from './WhatWeGrowSection';
// import { Footer, ScrollToTopButton } from '../../components/navigation';

// ASSETS
import landing_page_text from './text'
import { 
  trash_in_dirt,
  toolshed,
  tearoom,
  solar_panels_on_classroom,
} from '../../assets/our-story'


export default function OurStorySection() {
  const { colorTheme } = useContext(AppContext)
  const textColor = (colorTheme === "dark") ? "white" : "black"

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
        <Box paddingY={{ xs: '2.0rem', sm: '6.0rem' }} >
          <Title text='Our Story' gutterBottom />
          <Paragraph text={landing_page_text.our_story_summary_1} />
          <PictureRow imgUrls={[trash_in_dirt, toolshed]} />
          <Paragraph text={landing_page_text.our_story_summary_2} />
          <Paragraph text={landing_page_text.our_story_summary_3} />
          <PictureRow imgUrls={[tearoom, solar_panels_on_classroom]} />
          <Paragraph text={landing_page_text.our_story_summary_4} />
          <ButtonWithIcon 
            text='Read more' 
            href='our-story' 
            endIcon={faArrowCircleRight} 
            textColor={textColor} 
          />
          <ButtonWithIcon 
            text='Volunteer' 
            href='contact-us' 
            endIcon={faArrowCircleRight} 
            textColor={textColor} 
          />
        </Box>
      </Container>
    </Box>
  )
}
