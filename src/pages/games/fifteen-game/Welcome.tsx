import React, { lazy, useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom';

// COMPONENTS
import { Container, Box } from '@mui/material';
import { TextSection } from '@components/typography'

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faRobot, faUserFriends } from '@fortawesome/free-solid-svg-icons';


import { Title, Subtitle, Heading, Paragraph } from '../../../components/typography'
import { Button } from '@mui/base';
import { AlignEnum } from '../../../@types/TypographyProps';
import { type } from 'os';


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
      <Title text="The Fifteen Game" gutterBottom />
      <Paragraph text='The Fifteen Game is a two-player strategy game traditionally played with a set of cards numbered one through nine. Players take turns claiming one card at a time, with the goal of being first to collect a set of three cards that adds up to exactly fifteen. You may collect more than three cards, but only subsets of three count as winning sets. If all nine cards are claimed with neither player making a winning set the game ends a draw.'
      />

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
    <RouterLink 
      to={linkTo}
    >
      <Box
        sx={{
          border: border,
          borderRadius: 2,
          marginX: 2,
          paddingX: 2,
          paddingY: 4,
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
  )
}


  description: {
    heading: '',
    paragraphs: [
      'The Fifteen Game is a two-player strategy game traditionally played with a set of cards numbered one through nine. Players take turns claiming one card at a time, with the goal of being first to collect a set of three cards that adds up to exactly fifteen. You may collect more than three cards, but only subsets of three count as winning sets. If all nine cards are claimed with neither player making a winning set the game ends a draw.',
    ]
  },
  general: {
    heading: 'General',
    paragraphs: [
      'This game truly stands out for having something to offer students at a very wide range of levels of math expertise. Each round only takes takes a few minutes to play, making it ideal for a brain-break activity during class. If you want to set up a bracket and have a class-wide or school-wide championship tournament, I recommend the free tool available at Bracket HQ.',
    ]
  },
  elementarySchool: {
    heading: 'Elementary: Mental Math and Thinking Out Loud',
    paragraphs: [
      'The Fifteen Game is a fun way to build automaticity at mentally computing sums and differences within 20. Even for students who have mastered basic addition, trying to formulate strategies that involve offense and defense will push them. With repeated play they start to recognize patterns that make the game easier to play.', 
      'How many different ways could you win if you go first and take the 5? How many pairs are there that add up to 10? Find all the ways you could win if your opponent goes first and takes the 5. What do they have in common? Be sure to get kids talking! Thinking out loud is a valuable life skill that games like this are excellent tools for teaching. Keep playing against the bot in "Easy" mode until you can win over half the time.',
    ]
  },
  middleSchool: {
    heading: 'Middle School: Combinations and Permutations',
    paragraphs: [
      'How many different three card combinations are there that sum to 15? How many different three card combinations are there total? What are the sums of all the other sets? Would this game be fun to play with a different target number than 15?',
      'How many different orders are there that the players could claim the nine cards? Can you see why that question is actually quite difficult to answer? Can you come up with a simple approach that establishes a good estimate?'
    ]
  },
  highSchool: {
    heading: 'High School: Similarity Beneath the Surface & Rigorous Proof',
    paragraphs: [
      '',
    ]
  },
}
