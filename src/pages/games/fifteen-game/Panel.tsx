import { Box, Container } from '@mui/material';

// My Components
import GameStatusDisplay from './GameStatusDisplay';
import WinLossDrawDisplay from "./WinLossDrawDisplay";
import { 
  HomeButton, 
  BotGoFirstButton, 
  NewGameButton, 
  DifficultyModeButton, 
  UndoMoveButton
} from '../../../components/buttons/GameButton'

export function FriendPanel(props) {
  const { 
    movelist, 
    gameNumber,
    handleNewGameClick, 
    winLossDrawRecord,
    handleUndoClick, 
  } = props

  const playMode = "play-vs-friend"  

  return (
    <Container 
      sx={{ 
        width: '100%',
        height: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box >
        <GameStatusDisplay 
          movelist={movelist} 
          gameNumber={gameNumber}
          playMode={playMode}
        />
        <WinLossDrawDisplay 
          gameNumber={gameNumber}
          winLossDrawRecord={winLossDrawRecord}
          playMode={playMode}
          // humanGoesFirst={humanGoesFirst}
        />
        
      </Box>
      <Box display='flex' justifyContent='space-between' height={40} >
        <HomeButton />
        <UndoMoveButton movelist={movelist} handleUndoClick={handleUndoClick} />
        <NewGameButton movelist={movelist} handleNewGameClick={handleNewGameClick} />
      </Box>
    </Container>
  )
}

export function BotPanel(props) {
  const { 
    movelist, 
    humanGoesFirst, 
    handleNewGameClick, 
    difficultyMode, 
    changeDifficultyMode, 
    letBotGoFirst,
    winLossDrawRecord,
  } = props

  const playMode = "play-vs-bot" 

  return (
    <Container 
      sx={{ 
        width: '100%',
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      disableGutters
    >
      <GameStatusDisplay 
        movelist={movelist} 
        playMode={playMode}
        humanGoesFirst={humanGoesFirst}
      />
      <WinLossDrawDisplay 
        winLossDrawRecord={winLossDrawRecord}
        humanGoesFirst={humanGoesFirst}
        playMode={playMode}
      />
        
      <Box id='button-container' m={1} >
        <Box display='flex' justifyContent='space-between' height={40} mb={1}  > 
          <DifficultyModeButton thisButtonsMode='easy'   difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode} />
          <DifficultyModeButton thisButtonsMode='medium' difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode} marginX={1} />
          <DifficultyModeButton thisButtonsMode='hard'   difficultyMode={difficultyMode} changeDifficultyMode={changeDifficultyMode}  />
        </Box> 
        <Box display='flex' justifyContent='space-between' height={40} >
          <HomeButton />
          <BotGoFirstButton movelist={movelist} letBotGoFirst={letBotGoFirst} />
          <NewGameButton movelist={movelist} handleNewGameClick={handleNewGameClick} />
        </Box>
      </Box>
    </Container>
  )
}



