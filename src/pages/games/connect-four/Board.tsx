import React, { useContext } from 'react'
import { Box } from '@mui/material'

// My Components
import { Column } from "./Column";
import { InfoHeaderRow } from "./InfoHeaderRow";
import { RoundedBorder } from "./RoundedBorder";

// CONTEXT 
import { ConnectFourContext } from '../ConnectFourContext';

export function GameBoard(props) {
  const { handleColumnClick } = props
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { columnNumbers, boardSideLength } = gameBoardConstants
  // console.log(`RENDERING GAME BOARD with MOVE LIST: ${moveList}`);
  return (
    <Box id="game_board"
      position='relative'
      height={boardSideLength}
      width={boardSideLength}
      display='flex'
      flexDirection='row'
      alignItems='flex-end'
    >
      <InfoHeaderRow />  
      {columnNumbers.map((columnIndex) => {
        return (
          <Column 
            key={columnIndex}
            index={columnIndex}
            handleColumnClick={handleColumnClick}
          />
        )
      })}
      <RoundedBorder />
    </Box>
  )
}

import React, { useContext } from 'react'
import { Box, Typography, Zoom } from '@mui/material'

// CONTEXT 
import { ConnectFourContext } from '../ConnectFourContext';

export function InfoHeaderRow(props) {
  const { gameIsOver, gameStatus, gameBoardConstants } = useContext(ConnectFourContext)
  const { oneSeventh } = gameBoardConstants

  let message = ""
  if (gameIsOver) {
    message = (gameStatus === "playerOneWins" ? "Red Wins!" : "Yellow Wins!")
  }
  
  return (
    <Box id='infoHeaderRow'
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: oneSeventh,
        zIndex: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Zoom in={message !== ""} style={{ transitionDelay: '300ms' }} >
        <Typography color='connectFour.text' variant='h2' align='center' >
          {message}
        </Typography>
      </Zoom>
    </Box>
  )
}

import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'

// My Components
import { Chip } from "./Chip";
import { ColumnOfSquaresWithHoles } from "./ColumnOfSquaresWithHoles";

import { ConnectFourContext } from '../ConnectFourContext';


export function Column(props) {
  const { index, handleColumnClick } = props
  const { gameIsOver, nextPlayer, gameBoardConstants } = useContext(ConnectFourContext)
  const { columnLetters, oneSeventh } = gameBoardConstants

  let columnLetter = gameIsOver ? '' : columnLetters[index]
  
  return (
    <Box id="column" 
      onClick={() => handleColumnClick(index)}
      position='relative'
      width={oneSeventh}
      height='100%'
      sx={{
        '&:hover #hoverChip': {
          backgroundColor: `connectFour.${nextPlayer}`,
        },
      }}
    >
      <HoverChip columnLetter={columnLetter} />
      <ChipContainer index={index} />
      <ColumnOfSquaresWithHoles />
    </Box>
  );
}

function HoverChip(props) {
  const { columnLetter } = props
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { oneSeventh, chipSizeRelativeToSquare } = gameBoardConstants

  return (
    <Box id="hoverChipContainer"
      height={oneSeventh}
      zIndex={8}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Box id="hoverChip"
        bgcolor='background'
        width={chipSizeRelativeToSquare}
        height={chipSizeRelativeToSquare}
        borderRadius='50%'
        zIndex={8}
        display='flex'
        justifyContent='center'
        alignItems='flex-end'
        fontSize='2rem'
      >
        <Typography variant='h4' color='connectFour.text'  >
          {columnLetter}  
        </Typography>
      </Box>
    </Box>
  )
}

function ChipContainer(props) {
  const { index } = props
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { oneSeventh, sixSevenths, rowNumbers,  } = gameBoardConstants

  const containerRef = React.useRef(null);
  const cellsInColumn = rowNumbers.map(row => index + 7 * row)

  return (
    <Box 
      ref={containerRef}
      width='100%'
      position='absolute'
      top={oneSeventh}
      bgcolor='transparent'
      height={sixSevenths}
      zIndex={8}
      display='flex'
      flexDirection='column-reverse'
    >
      {cellsInColumn.map(cellId => {
        return (
          <Chip
            key={cellId}
            id={cellId}
            containerRef={containerRef}
          />
        )
      })}
    </Box>
  )
}

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, Slide } from '@mui/material'

// CONTEXT 
import { ConnectFourContext } from '../ConnectFourContext';

export function Chip(props) {
  const { id, containerRef } = props
  const { boardData, gameBoardConstants } = useContext(ConnectFourContext)
  const { zIndex, oneSixth, chipSizeRelativeToSquare } = gameBoardConstants

  const color = boardData[id]
  let bgcolor = `connectFour.${color}`
  return (
    <Slide 
      in={color !== 'unclaimed'}
      timeout={300}
      direction="down"
      container={containerRef.current}
      // easing="easing.parabolicAcceleration"
    >
      <Box id="transparentSquareFrame"
        width='100%'
        height={oneSixth}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box id="chip"
          borderRadius='50%'
          zIndex={zIndex.board}
          bgcolor={bgcolor}
          width={chipSizeRelativeToSquare}
          height={chipSizeRelativeToSquare}
        />
      </Box>
    </Slide>
  )
}
Chip.propTypes = {
  id: PropTypes.number.isRequired,
  containerRef: PropTypes.object.isRequired
}

import React, { useContext } from 'react'
import { Box } from '@mui/material'

import { AppContext } from "../../../../../AppContext";

export function MaxSquareArea(props) {
  const { maxSquareSideLength } = useContext(AppContext)
  return (
    <Box 
      children={props.children}
      display='flex'
      flexDirection='column'
      alignItems='center'
      height={maxSquareSideLength}
      width={maxSquareSideLength}
      position='relative'
    />
  )
}

import React, { useContext } from 'react'
import { Box } from '@mui/material'
import { ConnectFourContext } from "../ConnectFourContext";

export function RoundedBorder(props) {
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { oneSeventh, sixSevenths } = gameBoardConstants
  
  return (
    <Box 
      id='rounded_border'
      boxSizing='content-box'
      position='absolute'
      top={oneSeventh}
      left='-9px'
      width='calc(100% - 2px)'
      height={sixSevenths}
      border="10px solid"
      borderColor="board.main"
      borderRadius="10px"
      borderTop={0}
    />
  )
}

import React, { useContext } from 'react'
import { Box, Button } from '@mui/material'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Undo } from "@mui/icons-material";

import { ConnectFourContext } from '../ConnectFourContext';

export function NewGameAndUndoButtons(props) {
  const { openSettingsModal, undoMove } = props
  const { gameBoardConstants } = useContext(ConnectFourContext)
  const { buttonContainerHeight } = gameBoardConstants

  return (
    <Box 
      height={buttonContainerHeight}
      width='100%'
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      px={4}
    >
      <NewGameButton  openSettingsModal={openSettingsModal} />
      <UndoMoveButton undoMove={undoMove} />
    </Box>
  )
}

function NewGameButton(props) {
  const { openSettingsModal } = props
  return (
    <Button
      variant="contained"
      startIcon={<FontAwesomeIcon icon={faArrowRotateLeft} size='lg' />}
      onClick={() => openSettingsModal()}
      sx={{
        flex: '1 0 25%',
        mx: 1
      }}
    >
      New&nbsp;Game
    </Button>
  )
}

function UndoMoveButton(props) {
  const { undoMove } = props
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

