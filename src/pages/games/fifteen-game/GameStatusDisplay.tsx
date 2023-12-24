import { Box, Typography } from '@mui/material';

import { PlayersEnum, PlayModeEnum, GameStatusEnum, status, MovelistType } from "../helpers/magicSquareHelpers";

type GameStatusDisplayProps = {
  movelist: MovelistType, 
  playMode: PlayModeEnum, 
  gameNumber: number,
  humanGoesFirst: boolean
}

export default function GameStatusDisplay(props: GameStatusDisplayProps) {
  const { 
    movelist, 
    playMode, 
    gameNumber,
    humanGoesFirst 
  } = props


  // TODO 
  // const gameStatus = status(movelist);
  const gameStatus: GameStatusEnum = GameStatusEnum.playerOneToMove



  let message = "Error finding status message."
  
  if (playMode === PlayModeEnum.humanVsHuman) {
    const whoFirstThisGame = (gameNumber % 2 === 1) ? PlayersEnum.playerOne : PlayersEnum.playerTwo
    message = (movelist.length === 0) ?
      `${whoFirstThisGame} goes first this time.` :
      gameStatus
  }
  else if (playMode === PlayModeEnum.humanVsBot) {
    switch (gameStatus) {
    // case GameStatusEnum.playerOneWins:
    //   message = (humanGoesFirst) ? "Game Over. Human Wins!" : "Game Over. Bot Wins!"
    //   break;
    // case GameStatusEnum.playerTwoWins:
    //   message = (humanGoesFirst) ? "Game Over. Bot Wins!" : "Game Over. Human Wins!" 
    //   break;
    // case GameStatusEnum.draw:
    //   message = "Game Over! Draw."
    //   break;
    case GameStatusEnum.playerOneToMove:
      message = (humanGoesFirst) ? "Human's Turn" : "Bot's Turn" 
      break;
    // case GameStatusEnum.playerTwoToMove:
    //   message = (humanGoesFirst) ? "Bot's Turn" : "Human's Turn"
    //   break;
    default:
      message = "error" 
    }
  }
  else {
    message = "Invalid value provided for Play Mode"
  }
    
  return (
    <Box>
      <Typography 
        children={`Game ${gameNumber}:`}
        color="common.white" 
        align='center' 
        variant='h4' 
        pt={2}
        noWrap 
      />
      <Typography 
        children={message}
        color="common.white" 
        align='center' 
        variant='h4' 
        gutterBottom
        noWrap 
      />
    </Box>
  )
}