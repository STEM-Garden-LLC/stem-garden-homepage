////////////////////////
//     Our Story      //
////////////////////////

// A summary with buttons linking to the more complete "OurStoryPage"

// MUI
import { Box } from '@mui/material';

// Router

// Font Awesome
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// CUSTOM COMPONENTS
import { Title, Paragraph } from '../../components/typography';
import { NavigationButton } from '../../components'
import PictureRow from '../../components/PictureRow';
// import WhatWeGrowSection from './WhatWeGrowSection';
// import { Footer, ScrollToTopButton } from '../../components/navigation';

// ASSETS
import { our_story_paragraphs } from '../../text/landing'
import { 
  trash_in_dirt,
  toolshed,
  tearoom,
  solar_panels_on_classroom,
} from '../../assets/our-story'

export default function OurStorySection() {
  return (
    <Box id='our-story' paddingTop={{ xs: '4.0rem', sm: '6.0rem' }} >
      <Title text='Our Story' gutterBottom />
      <Paragraph text={our_story_paragraphs[0]} />
      <PictureRow imgUrls={[trash_in_dirt, toolshed]} />
      <Paragraph text={our_story_paragraphs[1]} />
      <Paragraph text={our_story_paragraphs[2]} />
      <PictureRow imgUrls={[tearoom, solar_panels_on_classroom]} />
      <Paragraph text={our_story_paragraphs[3]} />
      <NavigationButton 
        label='Read more' 
        linkTo='our-story' 
        endIcon={faArrowCircleRight} 
      />
      <NavigationButton 
        label='Volunteer' 
        linkTo='/contact' 
        endIcon={faArrowCircleRight} 
      />
    </Box>
  )
}
