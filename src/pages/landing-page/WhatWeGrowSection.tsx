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
import { landing_page_text, crops } from '../../text/landing'

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
            href='contact-us'
            endIcon={faArrowCircleRight} 
          />
          <ButtonWithIcon 
            text='Distribution Partners' 
            href='partners' 
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
  const cropSelectorButtonWidth = Math.floor(cropSelectorWidth / 6)

  return (
      <Box id="crop-selector-container"
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='space-between'
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
                  cropName={crop.name}  
                  imageUrls={crop.imageUrls}  
                  selectedCrop={selectedCrop}
                  setSelectedCrop={setSelectedCrop} 
                  cropSelectorButtonWidth={cropSelectorButtonWidth}
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

type CropSelectorButtonProps = {
  cropName: string;
  imageUrls: string[];
  selectedCrop: string;
  setSelectedCrop: Function;
  cropSelectorButtonWidth: number;
}

function CropSelectorButton(props: CropSelectorButtonProps) {
  const { cropName, imageUrls, selectedCrop, setSelectedCrop, cropSelectorButtonWidth } = props
  const { colorTheme } = useContext(AppContext)
  const imgUrl = imageUrls[0]  // The first image listed is used in the selector
  const selected = (cropName === selectedCrop)
  const border = selected ? 'solid yellow 3px': 'none'
  const backgroundColor = colorTheme === 'light' ? 'white' : 'darkGrey'


  const imageStyles = { 
    width: '100%',
    height: '80%',
    backgroundImage: `url(${imgUrl})`,  // The first image listed is used in the selector
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }  

  const footerStyles = { 
    width: '100%',
    height: '20%',
    backgroundColor: backgroundColor,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '1rem',
  }  

  return (
    <Box 
      width={cropSelectorButtonWidth}
      height={1.2 * cropSelectorButtonWidth}
      padding='2px'
      onClick={() => { setSelectedCrop(cropName) }}
      border={border}
      borderRadius="1.0rem"
    >
        <Box sx={imageStyles} />
        <Box sx={footerStyles} >
          <Heading 

          />
        </Box>
    </Box>
  )
}

