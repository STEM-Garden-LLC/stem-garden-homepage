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
import { PictureCard } from '../../components/cards'

// ASSETS
import { crops } from '../../text/landing'

import {
  banana_bunch
} from '../../assets/what-we-grow/banana'
import { 
  fig_harvest
} from '../../assets/what-we-grow/fig'


////////////////////////
//    What We Grow    //
////////////////////////


export default function WhatWeGrowSection() {
  const [selectedCrop, setSelectedCrop] = useState("none_selected")

  return (
    <Box sx={{ width: '100vw' }}>
      <Container
        maxWidth='md' 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          border: 'solid red 1px'
        }}    
      >
        <Box paddingY={{ xs: '2.0rem', sm: '6.0rem' }} >
          <Title text='What We Grow' gutterBottom />
          <Paragraph text={selectedCrop === "none_selected" ? crops.find(crop => crop.name === "none_selected")?.text : ""} />
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

  

  const cardsPerRow = containerWidth < 500 ? 4 : 8

  const cropSelectorButtonWidth = Math.floor(containerWidth / cardsPerRow * 0.8 )
  const cropSelectorButtonHeight = Math.floor(cropSelectorButtonWidth * 1.2)

  console.log(cardsPerRow);
  console.log(cropSelectorButtonWidth);
  console.log(cropSelectorButtonHeight);
  

  return (
      <Box id="crop-selector-container"
        width={`${containerWidth}px`}
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
                  // imageUrl={imageUrl}  
                  selectedCrop={selectedCrop}
                  setSelectedCrop={setSelectedCrop} 
                  cropSelectorButtonWidth={cropSelectorButtonWidth}
                  cropSelectorButtonHeight={cropSelectorButtonHeight}
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

type CropSelectorButtonProps = {
  cropName: string;
  // imageUrl: string;
  selectedCrop: string;
  setSelectedCrop: Function;
  cropSelectorButtonWidth: number;
  cropSelectorButtonHeight: number;
}

function CropSelectorButton(props: CropSelectorButtonProps) {
  const { 
    cropName, 
    // imageUrl, 
    selectedCrop, 
    setSelectedCrop, 
    cropSelectorButtonWidth, 
    cropSelectorButtonHeight } = props
  const { containerWidth, colorTheme } = useContext(AppContext)

  const selected = (cropName === selectedCrop)
  const border = selected ? 'solid yellow 3px': 'none'
  // const backgroundColor = colorTheme === 'light' ? 'white' : 'darkGrey'
  const cropData = crops.find(crop => crop.name === cropName)

  console.log(`cropData: ${JSON.stringify(cropData, null, 4)}`);
  
  const imageUrl =  cropData!.imageUrls[0]  // The first image listed is used in the selector


  const {  } = useContext(AppContext)
  const cardWidth = `${Math.floor(containerWidth * 0.40)}px`
  const cardHeight = `${Math.floor(containerWidth * 0.50)}px`


  const imageStyles = { 
    width: '100%',
    height: '80%',
    backgroundImage: `url(${imageUrl})`,  // The first image listed is used in the selector
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }  

  const footerStyles = { 
    width: '100%',
    height: '20%',
    // backgroundColor: backgroundColor,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '1rem',
  }  



  return (
    // <Box 
    //   width={cropSelectorButtonWidth}
    //   height={1.2 * cropSelectorButtonWidth}
    //   padding='2px'
    //   onClick={() => { setSelectedCrop(cropName) }}
    //   border={border}
    //   borderRadius="1.0rem"
    // >
    //     <Box sx={imageStyles} />
    //     <Box sx={footerStyles} >
    //       <Heading 
    //         text={cropName}
    //       />
    //     </Box>
    // </Box>
    <Box border={border} >
      <PictureCard 
        title={cropName} 
        // linkType={LinkTypeEnum.HashLink}
        // linkTo='#what-we-grow'
        imageUrl={imageUrl} 
        cardWidth={cardWidth}
        cardHeight={cardHeight}
      />
    </Box>
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