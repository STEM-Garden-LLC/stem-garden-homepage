

// COMPONENTS
import { Box, Paper, Typography } from '@mui/material';

// TYPES
import { ColorsEnum, FifteenGameColorsEnum } from '@types/Colors';

// Magic Square Helpers
import { numbersInWin } from "../helpers/magicSquareHelpers";
import { types } from 'util';

type FifteenGameBoardProps = {
  movelist: string,
  handleCardClick: Function
}

export default function FifteenGameBoard(props: FifteenGameBoardProps) {
  const { movelist, handleCardClick } = props
  
  const cardNumbers = [1,2,3,4,5,6,7,8,9]
  const cardsWithWinBorder = numbersInWin(movelist)
  const cardsData = cardNumbers.map(num => {
    let claimStatus = getCardClaimStatus(num, movelist)
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
      // height={theme.breakpoints.values.sm}
      maxHeight='50%'
      width='100%'
      maxWidth='100vw'
      display='flex'
      padding='0.5rem'
    >  
      <Box id='board width container'
        height='100%'
        width='100%'
      >  
        <Box id='row1' 
          children={cards.slice(0,5)}
          width='100%'
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
    </Box>
  )
}


function getCardClaimStatus(cardNum, movelist) {
  let turn = movelist.indexOf(cardNum)
  if (turn === -1) {
    return 'unclaimed'
  }
  else {
    return (turn % 2 === 0) ? 'playerOne' : 'playerTwo'
  }
}


function NumberCard(props) {
  const { number, claimStatus, isInWin, handleCardClick } = props

  let claimColor = (
    claimStatus === 'unclaimed' ? '#fff' : 
    claimStatus === 'playerOne' ? 'magicSquareGames.playerOne' :
    claimStatus === 'playerTwo' ? 'magicSquareGames.playerTwo' : 'error.main'
  )
  const textColor = (claimStatus === 'playerTwo') ? 'white' : 'black'
  const borderColor = (isInWin ? 'magicSquareGames.highlightWins' : 'transparent' )

  return (
    <Paper
      elevation={4}
      onClick={() => handleCardClick(number.toString())}
      sx={{
        bgcolor: claimColor,
        borderStyle: 'solid',
        borderWidth: '0.7rem',
        borderColor: borderColor,
        margin: '1.2%',
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
      />
    </Paper>
  )
}
