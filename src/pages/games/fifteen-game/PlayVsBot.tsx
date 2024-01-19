import { useState, useContext } from 'react'
import { AppContext } from '@/context/AppContext';


// COMPONENTS 
import { Box, Grid } from '@mui/material'
import Board from "./Board"
import GameStatusDisplay from './GameStatusDisplay'
import WinLossDrawDisplay from './WinLossDrawDisplay'
import { GameButton, CenteredFlexBox } from '@/components'


// HELPERS
import { status, gameOver } from './fifteenGameHelpers'
import { getBotMove } from './getBotMove'

// TYPES
import { CardId, PlayModeEnum, MovelistType, GameStatusEnum, DifficultyModesEnum } from "./fifteenGameTypes";

// DATA
import { gamesData } from '@/data'

// ICONS
import { faHouse, faRotateLeft, faRobot } from '@fortawesome/free-solid-svg-icons';

// OUTCOME MAP
import outcomeMapJSON from './magicSquareGamesOutcomeMap.json'




const defaultPlayMode: PlayModeEnum = PlayModeEnum.humanGoesFirst
const startingPosition: MovelistType = ""


export default function PlayVsBot() {
  const outcomeMap = new Map(Object.entries(outcomeMapJSON))

  // console.log(`OutcomeMap: ${Object.entries(outcomeMap)}`)


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
      if (gameOver(updatedMovelist)) {
        handleGameOver(updatedMovelist)
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
    setPlayMode(defaultPlayMode)
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
    board: '55%',
    status: '10%',
    record: '15%',
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
          playMode={playMode}
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
  const fifteenGameHomeLink = gamesData.filter(items => "The Fifteen Game" === items.title)[0].linkTo

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
          fullWidth
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
          linkTo={fifteenGameHomeLink}
          fullWidth
        />
      </Grid> 
      <Grid item xs={8} sm={6} >
        {
          movelist.length === 0 ? (
            <GameButton 
              label='Let Bot Go First'
              icon={faRobot}
              onClick={letBotGoFirst} 
              fullWidth
            />
          ) : (
            <GameButton 
              label='Play Again!'
              icon={faRotateLeft}
              onClick={handleNewGameClick} 
              disabled={!gameOver(movelist)} 
              fullWidth
            />
          )
          
        }
      </Grid> 
      
    </Grid>
  )
}