/// <reference path='../@types/TypographyProps.ts'

import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';

// import { TextColorEnum } from '../@types/TypographyProps.ts';


// MUI
import { Button, Box, Container, Card, CardMedia } from '@mui/material';


// Router
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


// CUSTOM COMPONENTS
import { Title, Heading, Paragraph } from '../components/typography';
import { ButtonWithIcon } from '../components/navigation'
import PictureRow from '../components/PictureRow';
// import WhatWeGrowSection from './WhatWeGrowSection';
// import { Footer, ScrollToTopButton } from '../../components/navigation';

// ASSETS
import landing_page_text from '../assets/landing/text'
import { 
  leafy_background, 
  practicing_math_facts,
  girls_playing_connect_four, 
  banana_papaya_turmeric_flower, 
} from '../assets/landing'
import { 
  trash_in_dirt,
  toolshed,
  tearoom,
  solar_panels_on_classroom,
} from '../assets/our-story'

export default function LandingPage() {
  return (
    <>      <LeafyTopSection />
      <OurStorySection />
      <WhatWeGrowSection />
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

////////////////////////
//     Our Story      //
////////////////////////

// A summary with buttons linking to the more complete "OurStoryPage"
function OurStorySection() {
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
          <PictureRow imgUrls={[tearoom, solar_panels_on_classroom]} />
          <Paragraph text={landing_page_text.our_story_summary_3} />
          <ButtonWithIcon 
            text='Read more' 
            href='our-story' 
            endIcon={faArrowCircleRight} 
            textColor={textColor} 
          />
          <ButtonWithIcon 
            text='Contact us' 
            href='contact-us' 
            endIcon={faArrowCircleRight} 
            textColor={textColor} 
          />
        </Box>
      </Container>
    </Box>
  )
}

////////////////////////
//    What We Grow    //
////////////////////////

enum CropsEnum {
  none_selected= 'none_selected',
  fig = 'fig',
  papaya= 'papaya',
  turmeric= 'turmeric',
  loquat= 'loquat',
  cucumber= 'cucumber',
  beans= 'beans',
  berries= 'berries',
  other= 'other',
}

function WhatWeGrowSection() {
  const { containerWidth } = useContext(AppContext)

  const [selectedCrop, setSelectedCrop] = useState("none_selected")


  const cardRowHeight = `${Math.floor(containerWidth * 0.55)}px`
  const cardWidth = `${Math.floor(containerWidth * 0.45)}px`

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
          <Title text='What We Grow' gutterBottom />
          <Paragraph text={landing_page_text.what_we_grow} />
          <CropSelector 
            selectedCrop={selectedCrop} 
            setSelectedCrop={setSelectedCrop} 
          />
          <CropDetail 
            selectedCrop={selectedCrop} 
          />
          <ButtonWithIcon 
            text='Buy Our Produce' 
            href='contact-us' // TODO Add distinct contact pages for tutoring requests and garden related matters
            endIcon={faArrowCircleRight} 
          />
          <ButtonWithIcon 
            text='Help Out In the Garden' 
            href='contact-us' 
            endIcon={faArrowCircleRight} 
          />
        </Box>
      </Container>
    </Box>
  )
}

function CropSelector(props) {
  const { selectedCrop, setSelectedCrop } = props
  const { availableWidth } = useContext(AppContext)

  const cropSelectorWidth = (availableWidth > 500) ? 500 : availableWidth - 32
  const cropSelectorWidthPx = `${cropSelectorWidth}px`
  const selectorButtonSizePx = `${Math.floor(cropSelectorWidth / 6)}px`

  return (
      <Box id="crop-selector-container"
        width={cropSelectorWidth}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        {
          crops.map(crop => {
            if (crop.name === "none_selected") {
              return undefined
            }
            else {
              return (
                <CropSelectorButton 
                  key={`select_${crop.name}_button`}
                  crop={crop}  
                  selectedCrop={selectedCrop}
                  setSelectedCrop={setSelectedCrop} 
                  cropSelectorWidthPx={cropSelectorWidthPx}
                  selectorButtonSizePx={selectorButtonSizePx}
                />
              )
            }
          })
        }
        </Box>

        
      // </Box>
    // </Box>
  )
}

function CropDetail(props) {
  const { selectedCrop } = props
  const { availableWidth } = useContext(AppContext)
  
  const crop = crops.find(element => element.name === selectedCrop)
  const { name, imageUrls, detailText } = crop
  const capitalizedSelectedCrop = (name === "none_selected") ? "Select a crop for more info" : name[0].toUpperCase().concat(name.slice(1))

  const imageSizePx = (availableWidth > 500) ? "500px" : `${availableWidth - 32}px`
  const imageStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderRadius: '1rem'
  } 

  return (
    <Box marginBottom="5.0rem" >
      <Stack maxWidth="700px" display='flex' margin="0.5rem auto" >
        <PageSubtitle text={capitalizedSelectedCrop} align='center' gutterBottom/>
        <Paragraph text={detailText} />  
      </Stack>
      <Box id="carousel-container" 
        margin='0 auto'
        width={imageSizePx}
        height={imageSizePx}
      >
        <Carousel
          animation="slide"
          height={imageSizePx}
        >
          {
            imageUrls.map((imageUrl, index) => (
              <Box key={index} sx={{ backgroundImage: `url(${imageUrl})`, ...imageStyles}} />
            ))
          }
        </Carousel>
      </Box>
    </Box>
  )
}

function CropSelectorButton(props) {
  const { crop, selectedCrop, setSelectedCrop, selectorButtonSizePx } = props
  const { name, imageUrls } = crop
  const imgUrl = imageUrls[0]  // The first image listed is used in the selector
  const selected = (name === selectedCrop)
  const border = selected ? 'solid yellow 3px': 'none'

  const imageStyles = { 
    width: '100%',
    height: '100%',
    backgroundImage: `url(${imgUrl})`,  // The first image listed is used in the selector
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '1rem',
  }  

  return (
    <Box 
      width={selectorButtonSizePx}
      height={selectorButtonSizePx}
      padding='2px'
    >
      <Tooltip title={name} arrow>
        <Box 
          onClick={() => { setSelectedCrop(name) }}
          border={border}
          sx={imageStyles}
        />
      </Tooltip>
    </Box>
  )
}

