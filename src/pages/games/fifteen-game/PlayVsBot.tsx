import { useState, useContext } from 'react'

import { Box, Grid } from '@mui/material'


// COMPONENTS 
import Board from "./Board"
import GameStatusDisplay from './GameStatusDisplay'
import WinLossDrawDisplay from './WinLossDrawDisplay'
import { GameButton, CenteredFlexBox } from '@/components'


// HELPERS
import { status, gameOver } from '../helpers/magicSquareHelpers'
import { getBotMove } from '../helpers/getBotMove'

// TYPES
import { CardId, PlayModeEnum, MovelistType, GameStatusEnum, DifficultyModesEnum } from "../helpers/magicSquareTypes";

// DATA
import { gamesData } from '@/data'

import { faHouse, faRotateLeft, faRobot } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '@/context/AppContext';


const defaultPlayMode: PlayModeEnum = PlayModeEnum.humanGoesFirst
const startingPosition: MovelistType = ""

// type OutcomeMap 

export default function PlayVsBot(props: any) {
  const { outcomeMap = new Map() } = props

 console.log(`OutcomeMap: ${outcomeMap.size}`)

  const { availableHeight } = useContext(AppContext)

  const [playMode, setPlayMode] = useState(defaultPlayMode)
  const [difficultyMode, setDifficultyMode] = useState(DifficultyModesEnum.easy) 

  const [movelist, setMovelist] = useState(startingPosition)
  const [gameNumber, setGameNumber] = useState(1);
  const [winLossDrawRecord, setWinLossDrawRecord] = useState([0, 0, 0]);

  function humanGoesNext() {  
    if (playMode === PlayModeEnum.humanGoesFirst) {
      return (movelist.length % 2 === 0)
    } 
    else if (playMode === PlayModeEnum.botGoesFirst) {
      return (movelist.length % 2 === 1)
    }
  }

  // CLICK HANDLERS
  function handleCardClick(squareClicked: CardId) {
    if (!humanGoesNext()) {
      console.warn("NO EFFECT. Be patient, the bot takes a second to move.")
    }
    else if (movelist.includes(String(squareClicked))) {
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
      else {
        handleBotsTurn(updatedMovelist)
      }
    }
  }

  function letBotGoFirst() {
    console.assert(movelist.length === 0, `handleLetBotGoFirstClick was called but it is not the first move of the game!`)
    setPlayMode(PlayModeEnum.botGoesFirst)
    handleBotsTurn('') // if the bot is going first the movelist is empty.
  }

  function changeDifficultyMode(newDifficulty: DifficultyModesEnum) {
    if (newDifficulty !== difficultyMode) {
      setGameNumber(1)
      setPlayMode(defaultPlayMode)
      setWinLossDrawRecord([0, 0, 0])
      setMovelist(startingPosition)
      setDifficultyMode(newDifficulty)
    }
  }

  // Find and make a move for the Bot with a slight delay. 
  function handleBotsTurn(movelist: MovelistType) {
    const humanGoesFirst = (playMode === PlayModeEnum.humanGoesFirst)
    let botMove = getBotMove(difficultyMode, movelist, humanGoesFirst, outcomeMap)
    let updatedMovelist = movelist.concat(botMove)
    setTimeout(() => {
      setMovelist(updatedMovelist)
      if (gameOver(updatedMovelist)) {
        handleGameOver(updatedMovelist)
      }
    }, 600)
  }

  function handleNewGameClick() {
    setGameNumber(gameNumber => ++gameNumber)
    setMovelist(startingPosition)
  }


  function handleGameOver(movelist: MovelistType) {
    let result = status(movelist)
    const firstPlayerWins = result === GameStatusEnum.firstPlayerWins
    const secondPlayerWins = result === GameStatusEnum.secondPlayerWins
    const humanGoesFirst = playMode === PlayModeEnum.humanGoesFirst
    if (result === GameStatusEnum.draw) {
      incrementDrawRecord()
    }
    else if ((humanGoesFirst && firstPlayerWins) || (!humanGoesFirst && secondPlayerWins)) {
      incrementWinRecord()
    }
    else if ((!humanGoesFirst && firstPlayerWins) || (humanGoesFirst && secondPlayerWins)) {
        incrementLossRecord()
    }
    else {
      console.error("Error in handleGameOver()")
    }
  }

  function incrementWinRecord() {
    setWinLossDrawRecord([++winLossDrawRecord[0], winLossDrawRecord[1], winLossDrawRecord[2]])
  }
  function incrementLossRecord() {
    setWinLossDrawRecord([winLossDrawRecord[0], ++winLossDrawRecord[1], winLossDrawRecord[2]])
  }
  function incrementDrawRecord() {
    setWinLossDrawRecord([winLossDrawRecord[0], winLossDrawRecord[1], ++winLossDrawRecord[2]])
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
          playMode={playMode}
          handleCardClick={handleCardClick}
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={heights.status} >
        <GameStatusDisplay 
          movelist={movelist} 
          gameNumber={gameNumber}
          playMode={gameNumber % 2 === 1 ? PlayModeEnum.humanGoesFirst : PlayModeEnum.botGoesFirst}
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={heights.record} >
        <WinLossDrawDisplay 
          playMode={playMode}
          winLossDrawRecord={winLossDrawRecord}
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={heights.buttons} >
        <PlayVsBotButtons 
          movelist={movelist}
          handleNewGameClick={handleNewGameClick}
          difficultyMode={difficultyMode}
          changeDifficultyMode={changeDifficultyMode}
          letBotGoFirst={letBotGoFirst}
        />
      </CenteredFlexBox>
    </Box>
  )
}

type PlayVsBotButtonsProps = {
  movelist: MovelistType;
  handleNewGameClick: Function;
  difficultyMode: DifficultyModesEnum;
  changeDifficultyMode: Function;
  letBotGoFirst: Function;
}

function PlayVsBotButtons(props: PlayVsBotButtonsProps) {
  const { movelist, handleNewGameClick, difficultyMode, changeDifficultyMode, letBotGoFirst } = props
  const fifteenGameData = gamesData.filter(items => "The Fifteen Game" === items.title)[0]

  // TODO 
  // Material Icons actually has a better selection here than Font Awesome. 
  // Find out if that is compatible with type IconDefinition and if not fix it. 
  // https://mui.com/material-ui/material-icons/?query=undo

  function DifficultyModeButton(props: {mode: DifficultyModesEnum}) {
    const { mode } = props
    return (
      <Grid item xs={4} >
        <GameButton 
          label={mode}
          selected={difficultyMode === mode}
          onClick={() => changeDifficultyMode(mode)}
        />
      </Grid> 
    )
  }

  return (
    <Grid container
      spacing={2}
      width='100%' 
      maxWidth='min(600px, 90%)'
    >
      <DifficultyModeButton mode={DifficultyModesEnum.easy} />
      <DifficultyModeButton mode={DifficultyModesEnum.medium} />
      <DifficultyModeButton mode={DifficultyModesEnum.hard} />
      <Grid item xs={4} sm={6} >
        <GameButton 
          label='Home'
          icon={faHouse}
          linkTo={fifteenGameData.linkTo}
        />
      </Grid> 
      <Grid item xs={8} sm={6} >
        {
          movelist.length === 0 ? (
            <GameButton 
              label='Let Bot Go First'
              icon={faRobot}
              onClick={letBotGoFirst} 
            />
          ) : (
            <GameButton 
              label='Play Again!'
              icon={faRotateLeft}
              onClick={handleNewGameClick} 
              disabled={!gameOver(movelist)} 
            />
          )
          
        }
      </Grid> 
      
      
      {/* <Box id='button-container' m={1} >
        <Box display='flex' justifyContent='space-between' height={40} mb={1}  > 
          <DifficultyModeButton thisButtonsMode='easy'   difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode} />
          <DifficultyModeButton thisButtonsMode='medium' difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode} marginX={1} />
          <DifficultyModeButton thisButtonsMode='hard'   difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode}  />
        </Box> 
        <Box display='flex' justifyContent='space-between' height={40} >
          <HomeButton />
          <BotGoFirstButton moveList={moveList} letBotGoFirst={letBotGoFirst} />
          <NewGameButton moveList={moveList} handleNewGameClick={handleNewGameClick} />
        </Box>
      </Box> */}

    </Grid>
  )
}