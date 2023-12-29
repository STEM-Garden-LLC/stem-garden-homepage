import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

// MUI
import { Box } from '@mui/material';

// TYPES
import { LinkTypeEnum } from '../../@types/Links'
import { ColorsEnum } from '../../@types/Colors';
import { AlignEnum, FontWeightEnum } from '../../@types/TypographyProps';


// COMPONENTS
import { Title, Subtitle, Heading  } from '../../components/typography';
import { Footer, ScrollToTopButton } from '../../components';
import { LeafyBackground, ThemedBackground } from '../../components/backgrounds';
import PictureCard from '../../components/cards/PictureCard';
import OurStorySection from './OurStorySection';
import WhatWeGrowSection from './WhatWeGrowSection';

// ASSETS
import { 
  banana_papaya_turmeric_flower, 
  profile_pic_with_hoe,
  practicing_math_facts,
  girls_playing_connect_four, 
} from '../../assets/landing'

// Routes
import { navData } from '../../data'
// import { navData } from '@data' // Not Working. 

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
  return (
    <Box pt={5}>
      <LandingPageTitle />
      <ResponsiveCards />
    </Box>    
  )
}

function LandingPageTitle() {
  return (
    <Box id='title' 
      display='flex'
      flexDirection='column'
    >
      <Title text='Sowing seeds of' textColor={ColorsEnum.white} />
      <Title text='life-long learning' textColor={ColorsEnum.white} />
      <Title text='and DIY-spirit' textColor={ColorsEnum.white} gutterBottom />
      <Box px={3} >
        <Heading 
          align={AlignEnum.left}
          textColor={ColorsEnum.white} 
          fontWeight={FontWeightEnum.light} 
          textWrap={true}
          gutterBottom 
          text='The STEM Garden is a micro-farm in the heart of New Orleans. We sell organic banana, papaya, fig, turmeric, and more. We also offer tutoring services and free resources for learning math.' 
        />
      </Box>
    </Box>
  )
}
  

// Renders either 3 or 4 cards in a single row on desktop and in two rows on mobile screens
function ResponsiveCards() {
  const { narrowScreen, containerWidth } = useContext(AppContext)

  const cardWidth =  narrowScreen ? 
  `${Math.floor(containerWidth * 0.40)}px` :
  `${Math.floor(containerWidth / 3 * 0.9)}px`

  const cardHeight = narrowScreen ? 
  `${Math.floor(containerWidth * 0.50)}px` :
  `${Math.floor(containerWidth / 3 * 0.9 * 1.2)}px`

  const textColor = ColorsEnum.white
  const bgColor = '32,32,32'

  const whatWeGrow = navData.find(item => item.label === "What We Grow")
  const ourStory = navData.find(item => item.label === "Our Story")
  const mathGames = navData.find(item => item.label === "Math Games")

  const whatWeGrowCard = (
    <PictureCard 
      title={whatWeGrow!.label} 
      linkTo={whatWeGrow!.linkTo}
      linkType={LinkTypeEnum.HashLink}
      imageUrl={banana_papaya_turmeric_flower} 
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      textColor={textColor}
      bgColor={bgColor}
    />
  )

  const ourStoryCard = (
    <PictureCard 
      title={ourStory!.label} 
      linkTo={ourStory!.linkTo}
      linkType={LinkTypeEnum.HashLink}
      imageUrl={profile_pic_with_hoe} 
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      textColor={textColor}
      bgColor={bgColor}
    />
  )

  const teachingServicesCard = (
    <PictureCard 
      title='Teaching Services'   // Different from label used in navbar menus
      linkTo='services'           // Not a linkTo declared in navbar menus
      linkType={LinkTypeEnum.RouterLink}
      imageUrl={practicing_math_facts} 
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      textColor={textColor}
      bgColor={bgColor}
    />
  )
  
  const mathGamesCard = (
    <PictureCard 
      title={mathGames!.label} 
      linkTo={mathGames!.linkTo}
      linkType={LinkTypeEnum.RouterLink}
      imageUrl={girls_playing_connect_four} 
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      textColor={textColor}
      bgColor={bgColor}
    />
  )
  
  const mobileCards = (
    <>
      <Box 
        display='flex' 
        justifyContent='space-evenly'
        alignItems='stretch'
        paddingBottom={2}
      > 
        { whatWeGrowCard }
        { ourStoryCard }
      </Box>
      <Box 
        display='flex' 
        justifyContent='space-evenly'
        alignItems='stretch'
      > 
        { teachingServicesCard }
        { mathGamesCard }
      </Box>
    </>
  )

  const desktopCards = (
    <Box 
      width={containerWidth}
      display='flex' 
      justifyContent='space-around'
      alignItems='stretch'
    > 
      { whatWeGrowCard }
      { ourStoryCard }
      { mathGamesCard }
    </Box>
  )

  return narrowScreen ? mobileCards : desktopCards
} 
