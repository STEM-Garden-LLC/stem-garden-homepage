import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';

// COMPONENTS
import { Box } from '@mui/material';
import { TextSection } from '@components/typography'

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faRobot, faUserFriends } from '@fortawesome/free-solid-svg-icons';


import { Title, Subtitle, Heading } from '../../../components/typography'
import { AlignEnum } from '../../../@types/TypographyProps';

// DATA
// import {  } from '@data'
import { fifteenGameData } from '../../../data'
import { ColorsEnum } from '@/@types/Colors';


// Game Logic

export default function FifteenGameWelcome() {
  const [outcomeMap, setOutcomeMap] = useState(null)
  
  // useEffect(() => {
  //   const generateOutcomeMapAsync = async () => {
  //     const map = await generatePositionToOutcomeMap()
  //     setOutcomeMap(map)
  //     console.log("Outcome Map Generated");
  //   }
  //   generateOutcomeMapAsync()
  // }, [])

  return (
    <>
      <Title text="The Fifteen Game" gutterTop gutterBottom />
      <TextSection data={fifteenGameData.description} />

      <Box 
        display='flex' 
        justifyContent='center' 
        width='100%'
        height='13rem'
        paddingY={2} 
      >
        <BigIconButton 
          label="Play vs. Bot"
          linkTo='play-vs-bot'
          icon={faRobot}
        />
        <BigIconButton 
          label="Play a Friend"
          linkTo='play-vs-friend'
          icon={faUserFriends}
        />
      </Box>

      <Subtitle text='Teaching Notes' align={AlignEnum.left} />

      <TextSection data={fifteenGameData.general} />
      <TextSection data={fifteenGameData.elementarySchool} />
      <TextSection data={fifteenGameData.middleSchool} />
      <TextSection data={fifteenGameData.highSchool} />
    </>
  )
}

type BigIconButtonProps = {
  label: string,
  linkTo: string,
  icon: IconDefinition
}


function BigIconButton(props: BigIconButtonProps) {
  let { label, linkTo, icon } = props

  const border = "solid white 1px"

  return (
    <Box
      sx={{
        minWidth: '25%',
      }}
    >
      <RouterLink 
        to={linkTo}
      >
        <Box
          sx={{
            bgcolor: ColorsEnum.lightGrey,
            border: border,
            borderRadius: 2,
            marginX: 2,
            paddingX: 2,
            paddingY: 4,
            minWidth: '30%',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
          }}
        >
          <Heading
            text={label}
            gutterBottom
          />
          <FontAwesomeIcon
            icon={icon} 
            color='white'
            size='4x'
          />
        </Box>
      </RouterLink>
    </Box>
  )
}

