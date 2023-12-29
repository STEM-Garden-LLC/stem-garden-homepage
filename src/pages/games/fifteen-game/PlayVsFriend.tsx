import { useState, useContext } from 'react'

import { Box, Grid } from '@mui/material';

// COMPONENTS 
import Board from "./Board";
import GameStatusDisplay from './GameStatusDisplay';
import WinLossDrawDisplay from './WinLossDrawDisplay';
import { GameButton, CenteredFlexBox } from '@/components'

// Game Logic
import { status, gameOver } from "../helpers/magicSquareHelpers";

// TYPES
import { CardId, PlayModeEnum, MovelistType, GameStatusEnum, PlayersEnum, OutcomesEnum } from "../helpers/magicSquareTypes";

// DATA
import { gamesData } from '../../../data'
// import { gamesData } from '@data'

import { faHouse, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '@/context/AppContext';


const startingPosition: MovelistType = ""



export default function PlayVsFriend(props: any) {
  const { outcomeMap = new Map() } = props
  const { availableHeight } = useContext(AppContext)

  const [movelist, setMovelist] = useState(startingPosition)
  const [gameNumber, setGameNumber] = useState(1);
  // const [gameStatus, setGameStatus] = useState(GameStatusEnum.playerOneToMove)
  const [winLossDrawRecord, setWinLossDrawRecord] = useState([0, 0, 0]);

  // CLICK HANDLERS
  function handleCardClick(squareClicked: CardId) {
    if (movelist.includes(String(squareClicked))) {
      console.log("NO EFFECT. That number has already been claimed.")
    }
    else if (gameOver(movelist)) {
      console.log("NO EFFECT. The Game is already over.")
    }
    else {
      const updatedMovelist: MovelistType = movelist.concat(String(squareClicked))
      setMovelist(updatedMovelist)
      console.log(`Updated Movelist: ${updatedMovelist}`)
      if (gameOver(updatedMovelist)) {
        handleGameOver()
      } 
    }
  }

  function handleUndoClick() {
    const updatedMovelist = movelist.slice(0,-1)
    setMovelist(updatedMovelist)
  }

  function handleNewGameClick() {
    setGameNumber(gameNumber => ++gameNumber)
    setMovelist(startingPosition)
  }

  // In Human Vs Human mode players alternate getting to go first.
  function playMode() {
    return (gameNumber % 2 === 1) ? PlayModeEnum.playerOneGoesFirst : PlayModeEnum.playerTwoGoesFirst
  }

  function handleGameOver() {
    let result = status(movelist)
    if (result === GameStatusEnum.draw) {
      setWinLossDrawRecord([winLossDrawRecord[0], winLossDrawRecord[1], ++winLossDrawRecord[2]]) // Draw
    }
    else if (playMode() === PlayModeEnum.playerOneGoesFirst) {
      if (result === GameStatusEnum.firstPlayerWins) {
        setWinLossDrawRecord([++winLossDrawRecord[0], winLossDrawRecord[1], winLossDrawRecord[2]]) // Player One Wins
      }
      else if (result === GameStatusEnum.secondPlayerWins) {
        setWinLossDrawRecord([winLossDrawRecord[0], ++winLossDrawRecord[1], winLossDrawRecord[2]]) // Player Two Wins
      }
    }
    else if (playMode() === PlayModeEnum.playerTwoGoesFirst){
      if (result === GameStatusEnum.firstPlayerWins) {
        setWinLossDrawRecord([winLossDrawRecord[0], ++winLossDrawRecord[1], winLossDrawRecord[2]]) // Player Two Wins
      }
      else if (result === GameStatusEnum.secondPlayerWins) {
        setWinLossDrawRecord([++winLossDrawRecord[0], winLossDrawRecord[1], winLossDrawRecord[2]]) // Player One Wins
      }
    }
    else {
      console.error("Error in handleGameOver()")
    }
  }

  const heights = {
    total: `${availableHeight}px`,
    board: '50%',
    status: '10%',
    record: '20%',
    buttons: '20%',
  }

  return (
    <Box height={heights.total} >
      <CenteredFlexBox height={heights.board} >
        <Board 
          movelist={movelist}
          handleCardClick={handleCardClick}
          // outcomeMap={outcomeMap}
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={heights.status} >
        <GameStatusDisplay 
          movelist={movelist} 
          gameNumber={gameNumber}
          playMode={gameNumber % 2 === 1 ? PlayModeEnum.playerOneGoesFirst : PlayModeEnum.playerTwoGoesFirst}
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={heights.record}    >
        <WinLossDrawDisplay 
          gameNumber={gameNumber}
          winLossDrawRecord={winLossDrawRecord}
          humanVsHuman={true}
          // humanGoesFirst={humanGoesFirst}
        />
      </CenteredFlexBox>
      <CenteredFlexBox 
        height={heights.buttons} 
        border='solid green 1px'
      >
        <PlayVsFriendButtons 
          movelist={movelist}
          handleUndoClick={handleUndoClick}
          handleNewGameClick={handleNewGameClick}
        />
      </CenteredFlexBox>
    </Box>
  )
}

type PlayVsFriendButtonsProps = {
  movelist: MovelistType;
  handleUndoClick: Function;
  handleNewGameClick: Function;
}

function PlayVsFriendButtons(props: PlayVsFriendButtonsProps) {
  const { movelist, handleUndoClick, handleNewGameClick } = props
  const fifteenGameData = gamesData.filter(items => "The Fifteen Game" === items.title)[0]
  const { containerWidth } = useContext(AppContext)

  // TODO 
  // Material Icons actually has a better selection here than Font Awesome. 
  // Find out it that is compatible with type IconDefinition and if not fix it. 
  // https://mui.com/material-ui/material-icons/?query=undo


  return (
    <Grid container
      spacing={2}
      width='100%' 
      maxWidth='min(600px, 90%)'
    >
      <Grid item xs={4} >
        <GameButton 
          label='Home'
          // hideLabel={containerWidth < 600}
          icon={faHouse}
          linkTo={fifteenGameData.linkTo}
        />
      </Grid> 
      <Grid item xs={8} >
        <GameButton 
          label='Undo'
          icon={faRotateLeft}
          onClick={handleUndoClick} 
          disabled={movelist.length === 0 || gameOver(movelist)} 
          selected={false}
        />
      </Grid> 
      <Grid item xs={12} >
        <GameButton 
          label='Play Again!'
          icon={faRotateLeft}
          onClick={handleNewGameClick} 
          disabled={!gameOver(movelist)} 
          selected={false}
        />
      </Grid> 
      
      

    </Grid>
  )
}