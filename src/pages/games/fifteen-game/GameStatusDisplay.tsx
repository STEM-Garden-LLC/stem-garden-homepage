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

  const gameStatus = status(movelist);

  let message = ""
  
  if (playModeIsHumanVsHuman(playMode)) {
    const whoFirstThisGame = (gameNumber % 2 === 1) ? PlayersEnum.playerOne : PlayersEnum.playerTwo
    const whoSecondThisGame = (gameNumber % 2 === 1) ? PlayersEnum.playerTwo : PlayersEnum.playerOne
    switch (gameStatus) {
      case GameStatusEnum.draw:
        message = `Game Over. It\'s a Draw`
        break;
      case GameStatusEnum.firstPlayerToMove:
        message = (movelist.length === 0) ? 
          `${whoFirstThisGame} Goes First.` : 
          `${whoFirstThisGame}'s Turn.`
        break;
      case GameStatusEnum.secondPlayerToMove:
        message = `${whoSecondThisGame}'s Turn.`
        break;
      case GameStatusEnum.firstPlayerWins:
        message = `${whoFirstThisGame} Wins!`
        break;
      case GameStatusEnum.secondPlayerWins:
        message = `${whoSecondThisGame} Wins!`
        break;
      default:
        message = "Error getting status message in playModeIsHumanVsHuman section."
    }
  }
  else if (playModeIsHumanVsBot(playMode)) {
    const humanGoesFirst = (playMode === PlayModeEnum.humanGoesFirst) 
    const itsTheFirstMove = (movelist.length === 0)
    switch (gameStatus) {
      case GameStatusEnum.draw:
        message = `Game Over. It\'s a Draw`
        break;
      case GameStatusEnum.firstPlayerToMove:
        message = (itsTheFirstMove) ? 
          (humanGoesFirst ? 
            `You can go first or let the Bot.` : 
            `Ok, the Bot will go first.`) :
          (humanGoesFirst ? 
            `It's your turn.` : 
            `It's the Bot's turn.`)
        break;
      case GameStatusEnum.secondPlayerToMove:
        message = (humanGoesFirst ? 
          `It's the Bot's turn.` : 
          `It's your turn.`)
        break;
      case GameStatusEnum.firstPlayerWins:
        message = (humanGoesFirst ? 
          `Congratulations, you beat the bot!` : 
          `Oops, you let the bot win. Try again!`)
        break;
      case GameStatusEnum.secondPlayerWins:
        message = (humanGoesFirst ? 
          `Oops, you let the bot win. Try Again!` :
          `Congratulations, you beat the bot!`)
        break;
      default:
        message = "Error getting status message in playModeIsHumanVsBot section."
    }
  }
    
  return (
    <Box maxWidth='70%' >
      <Subtitle text={`Game ${gameNumber}: ${message}`} />
    </Box>
  )
}