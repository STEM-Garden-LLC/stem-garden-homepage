import { lazy, useState, useEffect } from 'react'


import { Container, Box } from '@mui/material';





// COMPONENTS 
import FifteenGameBoard from "./Board";
import GameStatusDisplay from './GameStatusDisplay';
import WinLossDrawDisplay from './WinLossDrawDisplay';
import { Title, Subtitle } from '../../../components/typography'
import { GameButton, NavigationButton } from '../../../components'

import {  FriendPanel as FifteenGamePanel } from "./Panel";

// Game Logic
import { status, gameOver, MovelistType } from "../helpers/magicSquareHelpers";


// TYPES
import { CardId, PlayModeEnum } from "../helpers/magicSquareHelpers";

// DATA
import { gamesData } from '../../../data'
// import { gamesData } from '@data'



const startingPosition: MovelistType = []



export default function PlayVsFriend(props) {
  const { outcomeMap = new Map() } = props

  const [movelist, setMovelist] = useState(startingPosition)
  const [gameNumber, setGameNumber] = useState(1);
  const [winLossDrawRecord, setWinLossDrawRecord] = useState([0, 0, 0]);

  // CLICK HANDLERS
  function handleCardClick(squareClicked: CardId) {
    if (movelist.includes(squareClicked)) {
      console.log("NO EFFECT. That number has already been claimed.")
    }
    else if (gameOver(movelist)) {
      console.log("NO EFFECT. The Game is already over.")
    }
    else {
      let updatedMovelist = movelist.concat(squareClicked)
      setMovelist(updatedMovelist)
      if (gameOver(updatedMovelist)) {
        handleGameOver(updatedMovelist)
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
          playMode={PlayModeEnum.humanVsHuman}
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

function FifteenGameButtons() {
  const fifteenGameData = gamesData.filter(items => "The Fifteen Game" === items.title)[0]

  return (
    <Box display='flex' justifyContent='space-between' height={40} >
      <NavigationButton 
        label='home'
        linkTo={fifteenGameData.linkTo}

      />
      <UndoMoveButton movelist={movelist} handleUndoClick={handleUndoClick} />
      <NewGameButton movelist={movelist} handleNewGameClick={handleNewGameClick} />
    </Box>
  )
}