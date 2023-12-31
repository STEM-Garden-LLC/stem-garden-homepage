import { useContext } from 'react'
import { ColorThemeContext } from '../../context/ColorThemeContext';

// COMPONENTS
import { Title, Heading, Paragraph } from "@components/typography";
import { Box, Grid, Card, Button, } from '@mui/material';


// DATA 
import { gamesData } from '../../data'

// TYPES
import { ColorsEnum } from '../../@types/Colors';
import { AlignEnum } from '../../@types/TypographyProps'
import { GameCardProps } from '../../@types/Cards';

export default function GamesIndexPage() {

  return (
    <Box pt={5} >
      <Title text="Games" gutterBottom />
      {
        gamesData.map((game, index) => (
            <GameCard 
              key={index}
              title={game!.title} 
              linkTo={game!.linkTo} 
              imageUrl={game!.imageUrl} 
              disabled={game!.disabled} 
              description={game!.description} 
            />
        ))
      }
    </Box>
  )
}

function GameCard(props: GameCardProps) {
  const { colorTheme } = useContext(ColorThemeContext)

  const { title, linkTo, imageUrl, description, disabled = false } = props

  const bgColor = colorTheme === 'dark' ? ColorsEnum.lightGrey : ColorsEnum.offWhite

  
  return (
        <Card raised 
          sx={{
            marginY: '2.0rem', 
            width: '100%',
            bgcolor: bgColor,
            position: 'relative',
            borderRadius: '1rem',
            display: 'flex'
          }}
        >
          <Grid container margin={1} spacing={2}
            display='flex'
            alignItems='stretch'
          >
            <Grid item 
              id='game-screenshot'
              xs={12} sm={4} md={5}
            >
              <Box 
                width='100%' 
                paddingTop='100%'
                position='relative'
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
                    backgroundPosition: 'top center',
                  }}
                />
              </Box>
            </Grid>
            <Grid item 
              id='game-info'
              xs={12} sm={8} md={7}
              paddingBottom={2}
            >
              <Box 
                width='100%'
                height='100%'
                display='flex'
                flexDirection='column'
                alignItems='start'
                justifyContent='space-between'
              >
                <Heading text={title} align={AlignEnum.left} />
                {
                  description.map((paragraph, index) => (
                    <Paragraph 
                      key={index}
                      text={paragraph}
                    />
                ))
                }
                <Button 
                  children="Play Now"
                  disabled={disabled}
                  href={linkTo}
                  variant='contained'
                  // size='small'
                  sx={{ 
                    minWidth: '30%',
                    alignSelf: 'center'
                  }}
                />

              </Box>
            </Grid>
          </Grid>
        </Card>
  )
}

