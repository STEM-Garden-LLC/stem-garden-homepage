import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { ColorThemeContext } from '@/context/ColorThemeContext';


// COMPONENTS
import { Box, Paper, Typography } from '@mui/material';

// TYPES
import { CardClaimStatusEnum, FifteenGameColorsEnum, MovelistType, PlayModeEnum } from "../helpers/magicSquareTypes";


// Magic Square Helpers
import { getCardClaimStatus, numbersInWin } from "../helpers/magicSquareHelpers";
import { ColorsEnum } from '@/@types/Colors';
import { ColorThemeEnum } from '@/@types';


type FifteenGameBoardProps = {
  movelist: MovelistType,
  playMode: PlayModeEnum,
  handleCardClick: Function
}

const cardNumbers = [1,2,3,4,5,6,7,8,9]


export default function Board(props: FifteenGameBoardProps) {
  const { movelist, playMode, handleCardClick } = props

  const cardsWithWinBorder = numbersInWin(movelist)
  const cardsData = cardNumbers.map(num => {
    let claimStatus: CardClaimStatusEnum = getCardClaimStatus(String(num), movelist, playMode)
    let isInWin = cardsWithWinBorder.includes(num)
    
    return ({
      key: num,
      number: num,
      claimStatus: claimStatus,
      isInWin: isInWin
    })
  })
  
  let cards = cardsData.map(card => {
    return (
      <NumberCard
        key={card.number}
        number={card.number}
        claimStatus={card.claimStatus}
        isInWin={card.isInWin}
        // borderColor={card.borderColor}
        handleCardClick={handleCardClick}
      />
    )
  })

  return (
    <Box  
      id='board height container'
      height='100%'
      width='100%'
      maxWidth='100vw'
      display='flex'
      flexDirection='column'
      justifyContent='flex-end'
    >  
        <Box id='row1' 
          children={cards.slice(0,5)}
          height='50%' 
          display='flex'
          justifyContent='center'
        />
        <Box id='row2' 
          children={cards.slice(5,9)}
          height='50%' 
          display='flex'
          justifyContent='center'
          marginX='10%'
        />
    </Box>
  )
}


type NumberCardProps = {
  // cardId: CardId; 
  number: number; 
  claimStatus: CardClaimStatusEnum;
  isInWin: boolean;
  handleCardClick: Function;
}

function NumberCard(props: NumberCardProps) {
  const { number, claimStatus, isInWin, handleCardClick } = props

  const { containerWidth } = useContext(AppContext)
  const { colorTheme } = useContext(ColorThemeContext)


  const fontSize = 0.18 * containerWidth
  const unclaimedCardColor = colorTheme === 'dark' ? ColorsEnum.offWhite : ColorsEnum.lightGrey

  let claimColor = (
    claimStatus === CardClaimStatusEnum.unclaimed ? unclaimedCardColor : 
    claimStatus === CardClaimStatusEnum.playerOne ? FifteenGameColorsEnum.playerOne :
    claimStatus === CardClaimStatusEnum.playerTwo ? FifteenGameColorsEnum.playerTwo : 'error.main'
  )
  const textColor = (
    claimStatus === CardClaimStatusEnum.playerTwo || 
    (claimStatus === CardClaimStatusEnum.unclaimed) && colorTheme === ColorThemeEnum.light) ? 
    ColorsEnum.white : ColorsEnum.black
  
  
  const borderColor = (isInWin ? FifteenGameColorsEnum.isInWin : 'transparent' )

  return (
    <Paper
      elevation={4}
      onClick={() => handleCardClick(number.toString())}
      sx={{
        bgcolor: claimColor,
        borderStyle: 'solid',
        borderWidth: '0.7rem',
        borderColor: borderColor,
        margin: '1.5%',
        display: 'flex',
        flex: '2 0 2rem',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography 
        color={textColor}
        children={number}
        variant='h1'
        fontSize={fontSize}
      />
    </Paper>
  )
}
