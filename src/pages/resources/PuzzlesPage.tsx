import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { ColorThemeContext } from '../../context/ColorThemeContext';

import { hexToRGB, toTitleCase } from '../../helpers'

// MUI
import { Grid, Box, Card, Button } from '@mui/material';

import { Title, Subtitle, Paragraph } from '../../components/typography'

import { puzzlesData } from '../../data'

// TYPES 
import { ColorsEnum } from '../../@types/Colors'
import { AlignEnum } from '../../@types/TypographyProps'
import { PuzzleCardProps } from '../../@types/Cards';


export default function PuzzlesPage() {
  return (
    <>
      <Title text="Puzzles" gutterBottom />
      <Paragraph text="These puzzles have been cherry picked from countless books of logic puzzles and brainteasers. They are the type of puzzles that are worth coming back to again and again. Each one can be solved in several ways. I recommend introducing each of these puzzles prior to and separate from any direct instruction on the most efficient method of solving. Talk through them. It's OK to get stuck. It's OK if you can only find a strategy that requires a lot of tedious calculations. Whether you get a final answer or not, set the puzzle aside for a few months or years. Revisit it with students' old notes available and try to improve on the efficiency or elegance of the solution. Excellent solutions are much more than correct final answers, they include clear description of student' thought process." />
      {/* <PuzzlesSearchAndFilter /> */}
      <PuzzlesGrid />
    </>
  )
}


function PuzzlesSearchAndFilter() {
  const { colorTheme } = useContext(ColorThemeContext)

  const bgColor = colorTheme === 'dark' ? ColorsEnum.lightGrey : ColorsEnum.offWhite
  
  return (
    <Box 
      height='12rem' 
      borderRadius='1rem'
      sx={{ backgroundColor: bgColor }}
      marginY='2.0rem'
    > 
      <Subtitle text="Search and Filter Coming soon!" />  {/* TODO */}

    </Box>
  )
}

function PuzzlesGrid() {

 
  return (
    <Box >
      <Grid container spacing={2} >
        { 
          puzzlesData.map((puzzle, index) => (
            <Grid key={index} item xs={6} sm={4} md={3} >
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

  const { title, imageUrl, googleDriveFileId } = props

  const bgColor = colorTheme === 'dark' ? hexToRGB(ColorsEnum.lightGrey) : hexToRGB(ColorsEnum.offWhite)
  const textColor = colorTheme === 'dark' ? ColorsEnum.white : ColorsEnum.black

  const googleDrivePreviewUrl = `https://docs.google.com/document/d/${googleDriveFileId}/preview`
  const googleDriveCopyUrl = `https://docs.google.com/document/d/${googleDriveFileId}/copy`
  
  return (
        <Card raised 
          sx={{ 
            paddingTop: '145%',
            width: '100%',
            bgcolor: ColorsEnum.white,
            position: 'relative',
            borderRadius: '1rem',
          }}
        >
            <Box id='card-media-border' 
              paddingTop='90%'
              position='absolute'
              top={0}
              width='90%'
              marginTop='5%'
              marginX='5%'
              
            >
              <Box 
                width='100%' 
                height='100%'
                sx={{
                  position: 'absolute', 
                  top: 0,
                  backgroundImage:`url(${imageUrl})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: 'center',
                }}
              />
            </Box>
          <Box 
            sx={{ 
              background: `linear-gradient(0deg, rgba(${bgColor},1) 85%, rgba(${bgColor},0.5) 94%, rgba(${bgColor},0.1) 100%)`,
              position: 'absolute',
              bottom: 0,
              zIndex: 20,
              width: '100%',
              height: '40%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
          >
            <Box 
              display='flex'
              flexDirection='column'
              justifyContent='center'
              height='55%' 
            >
              <Paragraph text={toTitleCase(title)} textColor={textColor} align={AlignEnum.center} />
            </Box>
            <Box
              width='100%'
              display='flex'
              justifyContent='space-evenly'
              paddingBottom='0.5rem'
            >
              <Button 
                children="Preview"
                href={googleDrivePreviewUrl}
                variant='contained'
                size='small'
                sx={{ height: '1.7rem'}}
              />
              <Button 
                children="Copy"
                href={googleDriveCopyUrl}
                variant='contained'
                size='small'
                sx={{ height: '1.7rem'}}

              />
              </Box>
          </Box>
        </Card>
  )
}
