import { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { ColorThemeContext } from '../../context/ColorThemeContext';

import { hexToRGB, toTitleCase } from '../../helpers';

// MUI
import { Box, Grid, Card, CardMedia } from '@mui/material';
import Carousel from 'react-material-ui-carousel'

// Font Awesome
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// CUSTOM COMPONENTS
import { Title, ButtonLabel, Paragraph } from '../../components/typography';
// import { NavigationButton } from '@components'
import { NavigationButton } from '../../components'

// ASSETS
// import { crops } from '../../text/landing'
import { whatWeGrowData } from '../../data'

// TYPES
import { ColorsEnum } from '../../@types/Colors';
import { ColorThemeEnum } from '../../@types/ColorTheme';
import { AlignEnum } from '../../@types/TypographyProps';

////////////////////////
//    What We Grow    //
////////////////////////

export default function WhatWeGrowSection() {
  const [selectedCrop, setSelectedCrop] = useState("none_selected")

  return (
    <Box id='what-we-grow' paddingY={{ xs: '4.0rem', sm: '6.0rem' }} >
      <Title text='What We Grow' gutterBottom />
      <CropSelector
        selectedCrop={selectedCrop}
        setSelectedCrop={setSelectedCrop}
      />
      <CropDetail
        selectedCrop={selectedCrop}
      />
      <NavigationButton
        label='Buy Our Produce'
        linkTo='contact-us'
        endIcon={faArrowCircleRight}
      />
      {/* TODO */}
      {/* <NavigationButton
        label='Distribution Partners'
        linkTo='partners'
        endIcon={faArrowCircleRight}
      /> */}
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

  const gridColumnsTotal = 12
  const gridColumnsPerCard = 3
  const cardsPerRow = gridColumnsTotal / gridColumnsPerCard
  const cropSelectorButtonSize = Math.floor(containerWidth / cardsPerRow)

  return (
    <Grid container columns={gridColumnsTotal} spacing={1} 
      sx={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'space-between',
        paddingBottom: '1rem'
      }} 
    >
      {
        whatWeGrowData.map(crop => {
          if (crop.name === "none_selected") {
            return undefined
          }
          else {
            return (
              <Grid item xs={gridColumnsPerCard} key={`select_${crop.name}_button`} >
                <CropSelectorButton
                  cropName={crop.name}
                  // imageUrl={imageUrl}  
                  selectedCrop={selectedCrop}
                  setSelectedCrop={setSelectedCrop}
                  // cropSelectorButtonWidth={cropSelectorButtonWidth}
                  cropSelectorButtonSize={cropSelectorButtonSize}
                />
              </Grid>
            )
          }
        })
      }
    </Grid>
  )
}

type CropSelectorButtonProps = {
  cropName: string;
  // imageUrl: string;
  selectedCrop: string;
  setSelectedCrop: Function;
  cropSelectorButtonSize: number;
}

function CropSelectorButton(props: CropSelectorButtonProps) {
  const {
    cropName,
    selectedCrop,
    setSelectedCrop,
    cropSelectorButtonSize
  } = props

  const { narrowScreen } = useContext(AppContext)
  const { colorTheme } = useContext(ColorThemeContext)
  const textColor = (colorTheme === ColorThemeEnum.dark) ? ColorsEnum.white : ColorsEnum.black
  const bgColorRGB = (colorTheme === ColorThemeEnum.dark) ? hexToRGB(ColorsEnum.lightGrey) : hexToRGB(ColorsEnum.offWhite)

  const selected = (cropName === selectedCrop)
  const border = selected ? narrowScreen ? 'solid yellow 2px' : 'solid yellow 5px' : 'none'

  const responsiveLabel = narrowScreen ? (
    <Paragraph text={toTitleCase(cropName)} textColor={textColor} />
  ) : (
    <ButtonLabel text={toTitleCase(cropName)} textColor={textColor} />
  )

  const cropData = whatWeGrowData.find(crop => crop.name === cropName)
  const imageUrl = cropData!.imageUrls[0]  // The first image listed is used in the selector

  const cardHeight = `${Math.floor(cropSelectorButtonSize)}px`

  return (
    <Card raised 
      onClick={() => setSelectedCrop(cropName)}
      sx={{ 
        height: cardHeight,
        width: '100%',
        bgcolor: 'darkGrey',
        position: 'relative',
        borderRadius: '1rem',
        outline: border
      }}
    >
      <CardMedia
        component='img'
        image={imageUrl}
        alt={cropName}
        sx={{ 
          position: 'absolute', 
          top: 0,
          zIndex: 10
        }}
      />
      <Box 
        sx={{ 
          background: `linear-gradient(0deg, rgba(${bgColorRGB},1) 85%, rgba(${bgColorRGB},0.5) 94%, rgba(${bgColorRGB},0.1) 100%)`,
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
        {/* <Heading text={toTitleCase(cropName)} textColor={textColor} /> */}

        {/* <ButtonLabel text={toTitleCase(cropName)} textColor={textColor} /> */}
        {/* <Paragraph text={toTitleCase(cropName)} textColor={textColor} /> */}
        {responsiveLabel}
      </Box>
    </Card>
  )
}




type CropDetailProps = {
  selectedCrop: string;
}

function CropDetail(props: CropDetailProps) {
  const { selectedCrop } = props
  const { containerWidth } = useContext(AppContext)

  const crop = whatWeGrowData.find(crop => crop.name === selectedCrop) ?? { name: "", text: "", imageUrls: [] }

  const { name, text, imageUrls } = crop
  const capitalizedSelectedCrop = (name === "none_selected") ? "" : name[0].toUpperCase().concat(name.slice(1))

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
    <Box marginBottom="3.0rem" >
      <Title text={capitalizedSelectedCrop} align={AlignEnum.center} />
      <Paragraph text={text} />

      <Box id="carousel-container"
        display={selectedCrop === 'none_selected' ? 'none' : 'block'}
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
              <Box key={index} sx={{ backgroundImage: `url(${imageUrl})`, ...imageStyles }} />
            ))
          }
        </Carousel>
      </Box>
    </Box>
  )
}