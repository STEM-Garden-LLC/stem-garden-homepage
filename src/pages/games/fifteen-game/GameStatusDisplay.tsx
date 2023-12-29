import { Box, Typography } from '@mui/material';

import { PlayersEnum, PlayModeEnum, GameStatusEnum, MovelistType } from "../helpers/magicSquareTypes";
import { status } from "../helpers/magicSquareHelpers";

// COMPONENTS
import { Subtitle } from '@/components'
import { AlignEnum } from '@/@types/TypographyProps';

// HELPERS
import { playModeIsHumanVsHuman, playModeIsHumanVsBot } from '../helpers/magicSquareHelpers';


type GameStatusDisplayProps = {
  movelist: MovelistType, 
  playMode: PlayModeEnum, 
  gameNumber: number,
}

export default function GameStatusDisplay(props: GameStatusDisplayProps) {
  const { 
    movelist, 
    playMode, 
    gameNumber,
  } = props


  // TODO 
  const gameStatus = status(movelist, playMode);
  // const gameStatus: GameStatusEnum = GameStatusEnum.playerOneToMove

  console.log(`GS: ${gameStatus}`)

  let message = "Error finding status message."
  
  if (playModeIsHumanVsHuman(playMode)) {
    const whoFirstThisGame = (gameNumber % 2 === 1) ? PlayersEnum.playerOne : PlayersEnum.playerTwo
    message = (movelist.length === 0) ?
      `${whoFirstThisGame} goes first.` :
      `${gameStatus}${gameStatus.includes('ins') ? '!' : '.'}`
  }

  else if (playModeIsHumanVsBot(playMode)) {
    switch (gameStatus) {
    case GameStatusEnum.playerOneWins:
      message = (humanGoesFirst) ? "Game Over. Human Wins!" : "Game Over. Bot Wins!"
      break;
    case GameStatusEnum.playerTwoWins:
      message = (humanGoesFirst) ? "Game Over. Bot Wins!" : "Game Over. Human Wins!" 
      break;
    case GameStatusEnum.draw:
      message = "Game Over! Draw."
      break;
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
    <Subtitle  
      text={`Game ${gameNumber}: ${message}`}
      // textColor={ColorsEnum.white} 
      align={AlignEnum.center} 
    />
  )
}