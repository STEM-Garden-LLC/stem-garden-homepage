import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { ColorThemeContext } from '../../context/ColorThemeContext';

import { toTitleCase } from '../../helpers'

// MUI
import { Grid, Box, Card, CardMedia } from '@mui/material';


import { Title, Subtitle, Heading, Paragraph } from '../../components/typography'

import { puzzlesData } from '../../data'
import { PictureCard } from '@components/cards'


// TYPES 
import { LinkTypeEnum } from '../../@types/Links'
import { ColorsEnum } from '../../@types/Colors'
import { PuzzleCardProps } from '../../@types/Cards';
import { Footer } from '@components/navigation';


const testPuzzleData = puzzlesData[0]

export default function PuzzlesPage() {
  
  return (
    <>
      <Title text="Puzzles" gutterBottom />
      <Paragraph text="These puzzles have been cherry picked from countless books of logic puzzles and brainteasers. They are the type of puzzles that are worth coming back to again and again. Each one can be solved in several ways. I recommend introducing each of these puzzles prior to and separate from any direct instruction on the most efficient method of solving. Talk through them. It's OK to get stuck. It's OK if you can only find a strategy that requires a lot of tedious calculations. Whether you get a final answer or not, set the puzzle aside for a few months or years. Revisit it with students' old notes available and try to improve on the efficiency or elegance of the solution. Excellent solutions are much more than correct final answers, they include clear description of student' thought process." />
      <PuzzlesSearchAndFilter />
      <PuzzlesGrid />
      <Footer />
    </>
  )
}


function PuzzlesSearchAndFilter() {
  
  return (
    <>
      <Subtitle text="Search and Filter Coming soon!" />  {/* TODO */}
    </>
  )
}

function PuzzlesGrid() {

 
  return (
    <Box border='solid red 1px' >
      <Grid container  >
        { 
          puzzlesData.map((puzzle, index) => (
            <Grid key={index} item xs={3} >
              <PuzzleCard 
                title={puzzle!.title} 
                tags={puzzle!.tags} 
                imageUrl={puzzle!.imageUrl} 
                googleDriveFileId={puzzle!.googleDriveFileId}
              />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}



function PuzzleCard(props: PuzzleCardProps) {
  const { colorTheme } = useContext(ColorThemeContext)
  const { containerWidth } = useContext(AppContext)

  const { title, imageUrl } = props

  const bgColor = colorTheme === 'dark' ? ColorsEnum.darkGrey : ColorsEnum.offWhite
  const textColor = colorTheme === 'dark' ? ColorsEnum.white : ColorsEnum.black

  const cardWidth = '100%'
  const cardHeight = '10rem'

  return (
    <a>
      <Box width={cardWidth} height={cardHeight} border='solid blue 1px' >
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
      </Box>
    </a>
  )
}
