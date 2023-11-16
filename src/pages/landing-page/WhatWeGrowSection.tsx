/// <reference path='../@types/TypographyProps.ts'

import { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext';

// import { TextColorEnum } from '../@types/TypographyProps.ts';


// MUI
import { Button, Box, Container, Card, CardMedia, Tooltip } from '@mui/material';
import Carousel from 'react-material-ui-carousel'


// Router
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Font Awesome
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


// CUSTOM COMPONENTS
import { Title, Subtitle, Heading, Paragraph } from '../../components/typography';
import { ButtonWithIcon } from '../../components/navigation'

// ASSETS
import landing_page_text from './text'

import {
  banana_bunch
} from '../../assets/what-we-grow/banana'
import { 
  fig_harvest
} from '../../assets/what-we-grow/fig'


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

const crops = [
  {
    name: 'none_selected',
    text: 'test',
    imageUrls: [
      fig_harvest
    ]
  },
  {
    name: 'fig',
    text: 'test',
    imageUrls: [
      fig_harvest
    ]
  },
]

export default function WhatWeGrowSection() {
  const { containerWidth } = useContext(AppContext)

  const [selectedCrop, setSelectedCrop] = useState("none_selected")

  const cardsPerRow = containerWidth < 500 ? 4 : 8

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

type CropSelectorProps = {
  selectedCrop: string;
  setSelectedCrop: Function;
}

function CropSelector(props: CropSelectorProps) {
  const { selectedCrop, setSelectedCrop } = props
  const { containerWidth } = useContext(AppContext)


  const cropSelectorWidth = Math.min(500, containerWidth)
  const cropSelectorWidthPx = `${cropSelectorWidth}px`
  const selectorButtonSizePx = `${Math.floor(cropSelectorWidth / 6)}px`

  return (
      <Box id="crop-selector-container"
        width='100%'
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

type CropDetailProps = {
  selectedCrop: string;
}

function CropDetail(props: CropDetailProps) {
  const { selectedCrop } = props
  const { containerWidth } = useContext(AppContext)
  
  console.log(selectedCrop);


  const crop = crops.find(element => element.name === selectedCrop)

  console.log(crop);
  

  const { name, text, imageUrls } = crop
  const capitalizedSelectedCrop = (name === "none_selected") ? "Select a crop for more info" : name[0].toUpperCase().concat(name.slice(1))

  const imageSizePx = (containerWidth > 500) ? "500px" : `${containerWidth - 32}px`
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
      {/* <Stack maxWidth="700px" display='flex' margin="0.5rem auto" > */}
        <Subtitle text={capitalizedSelectedCrop} align='center' gutterBottom/>
        <Paragraph text={text} />  
      {/* </Stack> */}
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

