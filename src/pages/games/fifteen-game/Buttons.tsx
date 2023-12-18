import { Box, Button, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRotateLeft, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

import { gameOver } from "../helpers/magicSquareHelpers";


type GameButtonProps = {
  label: string,
  onClick: Function,
  active?: boolean
}


export function BotGoFirstButton(props) {
  const { moveList, letBotGoFirst } = props
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => letBotGoFirst()}
      disabled={moveList.length !== 0}
      sx={{ flexGrow: 2, mx: 1 }}
    >
      <Typography children="Let" variant="button" display={{ xs: 'none', sm: 'block' }}  />
      <Typography children="Bot Go First" variant="button" noWrap />
    </Button>
  )
}

export function DifficultyModeButton(props) {
  const { thisButtonsMode, difficultyMode, changeDifficultyMode } = props
  const selected = (thisButtonsMode === difficultyMode)
  return (
    <Button
      children={thisButtonsMode}
      sx={{flexGrow: 1, border: selected ? 'solid white 3px' : 'none', marginX: 2 }}
      variant={'contained'}
      onClick={() => changeDifficultyMode(thisButtonsMode)}
    />
  )
}

export function HomeButton() {
  return (
    <Button
      component={RouterLink}
      to='../'
      variant="contained"
      color="primary"
      sx={{ flexGrow: 1 }}
    >
      <Box display="flex" alignContent="center" >
        <FontAwesomeIcon icon={faHouse} size='lg' />
      </Box>
      <Typography children="Home" variant="button" ml={1} display={{ xs: 'none', sm: 'block' }}  />
    </Button>
  )
}


export function NewGameButton(props) {
  const { 
    moveList, 
    handleNewGameClick
  } = props

  return (
    <Button
      onClick={() => handleNewGameClick()}
      variant="contained"
      color="primary"
      disabled={!gameOver(moveList)}
      sx={{ flexGrow: 2 }}
    >
      <Box mr={1} display={{ xs: 'none', sm: 'flex' }} alignContent="center" >
        <FontAwesomeIcon icon={faRotateLeft} size='lg' />
      </Box>
      <Typography children="Play&nbsp;Again!" variant="button" noWrap />
    </Button>
  )
}

export function UndoMoveButton(props) {
  const { moveList, handleUndoClick } = props

  const disabled = (moveList.length === 0 || gameOver(moveList))
  
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => handleUndoClick()}
      disabled={disabled}
      sx={{ flexGrow: 2, mx: 1 }}
    >
      <Box mr={1} display="flex" alignContent="center" >
        <FontAwesomeIcon icon={faAnglesLeft} size='lg' />
      </Box>
      Undo
    </Button>
  )
}



 
