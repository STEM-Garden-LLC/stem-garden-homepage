import { useContext } from 'react'
import { ColorThemeContext } from '../../context/ColorThemeContext';

import { toTitleCase } from '../../helpers'

// MUI
import { Grid, Box, Card, CardMedia } from '@mui/material';


import { Title, Subtitle, Heading } from '../../components/typography'

import { puzzlesData } from '../../data'
import { PictureCard } from '@components/cards'


// TYPES 
import { LinkTypeEnum } from '../../@types/Links'
import { ColorsEnum } from '../../@types/Colors'
import { PuzzleCardProps } from '../../@types/Cards';


const testPuzzleData = puzzlesData[0]

export default function PuzzlesPage() {
  
  return (
    <>
      <Title text="Puzzles" />
      <PuzzlesSearchAndFilter />
      <PuzzlesGrid />
    </>
  )
}


function PuzzlesSearchAndFilter() {
  
  return (
    <>
      <Subtitle text="Coming soon!" />  {/* TODO */}
    </>
  )
}

function PuzzlesGrid() {

  const cardWidth = '100%'
  const cardHeight = '100%'
  const textColor = ColorsEnum.black
  const bgColor = ColorsEnum.offWhite

  return (
    <Grid container  >
      <Grid item xs={3} >
        <PuzzleCard 
          title={testPuzzleData!.name} 
          imageUrl={testPuzzleData!.imageUrl} 
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          textColor={textColor}
          bgColor={bgColor}
        />
      </Grid>
    </Grid>
  )
}



function PuzzleCard(props: PuzzleCardProps) {
  const { colorTheme } = useContext(ColorThemeContext)

  const { title, imageUrl } = props

  const bgColor = colorTheme === 'dark' ? '40,40,40' : '212,212,212'
  const textColor = colorTheme === 'dark' ? ColorsEnum.white : ColorsEnum.black

  
  return (
    <a>
      {/* <Box width={cardWidth} height={cardHeight} > */}
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
            image={imageUrl}
            alt={title}
            sx={{ 
              position: 'absolute', 
              top: 0,
              zIndex: 10
            }}
          />
          <Box 
            sx={{ 
              background: `linear-gradient(0deg, rgba(${bgColor},1) 85%, rgba(${bgColor},0.5) 94%, rgba(${bgColor},0.1) 100%)`,
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
            <Heading text={toTitleCase(title)} textColor={textColor} />
          </Box>
        </Card>
      {/* </Box> */}
    </a>
  )
}
