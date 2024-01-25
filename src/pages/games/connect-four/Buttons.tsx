
import { Box, Button } from '@mui/material'


// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Undo } from "@mui/icons-material";


export function NewGameButton(props: { handleNewGameClick: Function}) {
  const { handleNewGameClick, 
    // openNewGameConfirmationModal 
  } = props
  return (
    <Button
      variant="contained"
      startIcon={<FontAwesomeIcon icon={faArrowRotateLeft} size='lg' />}
      // onClick={() => setView(ViewEnum.settings)}
      onClick={() => handleNewGameClick()}
      
    >
      New&nbsp;Game
    </Button>
  )
}

export function UndoMoveButton(props: { handleUndoMove: Function}) {
  const { handleUndoMove } = props
  return (
    <Button
      variant="contained"
      startIcon={<Undo />}
      onClick={() => undoMove()}
      sx={{
        flex: '1 0 25%',
        mx: 1
      }}
    >
        Undo&nbsp;Move
    </Button>
  )
}

