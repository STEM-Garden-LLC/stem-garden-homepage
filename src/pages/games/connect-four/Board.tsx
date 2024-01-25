import React, { useContext } from 'react'
import { AppContext } from '@/context';



// CONTEXT 
import { ConnectFourContext } from './ConnectFourContext';


// COMPONENTS
import { Subtitle } from '@/components/typography'
import { Box, Zoom, Slide } from '@mui/material'

// HOOKS 
import { useHover } from '@/hooks';

// TYPES
import { ColorsEnum, ColumnProps, GameBoardProps, GameStatusEnum, HeaderRowProps, PlayersEnum } from './connectFourTypes'
import { nextPlayer, nextPlayerColor, gameIsOver } from './helpers';

// GAME BOARD CONSTANTS
const oneSixth = '16.665%'
const oneSeventh = '14.287%'
const sixSevenths = '85.714%'
const chipSizeRelativeToSquare = '84%'
const rowNumbers = [0, 1, 2, 3, 4, 5]
const columnNumbers = [0, 1, 2, 3, 4, 5, 6]
const columnLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
// const boardSideLength = (maxSquareSideLength - 96)
const buttonContainerHeight = 96
const zIndex = {
  board: '200',
  chip: '100'
}

export function ConnectFourBoard(props: GameBoardProps) {
  const { movelist, handleColumnClick, gameStatus } = props
  const { containerWidth, availableHeight } = useContext(AppContext)
  
  const height = availableHeight > containerWidth * 1.2  ? containerWidth - 32 : availableHeight - 32

  return (
    <Box id="game_board"
      position='relative'
      height={height}
      width='calc(100% - 32px)'
      display='flex'
      flexDirection='row'
      alignItems='flex-end'
    >
      <InfoHeaderRow gameStatus={gameStatus} />  
      {columnNumbers.map((columnIndex: number) => {
        return (
          <Column 
            key={columnIndex}
            index={columnIndex}
            movelist={movelist}
            handleColumnClick={handleColumnClick}
            gameIsOver={gameIsOver(gameStatus)}
            gameStatus={gameStatus}
          />
        )
      })}
      <RoundedBorder />
    </Box>
  )
}

export function InfoHeaderRow(props: HeaderRowProps) {
  // const { gameStatus } = useContext(ConnectFourContext)
  const { gameStatus } = props

  let message = gameIsOver(gameStatus) ? gameStatus : ""
  
  
  return (
    <Box id='infoHeaderRow'
      sx={{
        position: 'absolute',
        top: 0,
        left: '0',
        width: '100%',
        height: oneSeventh,
        zIndex: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Zoom in={message !== ""} style={{ transitionDelay: '300ms' }} >
        <Box>
          <Subtitle text={message}  />
        </Box>
      </Zoom>
    </Box>
  )
}




export function Column(props: ColumnProps) {
  const { index, movelist, handleColumnClick, gameStatus } = props
  let columnLetter = gameIsOver(gameStatus) ? '' : columnLetters[index]
  
  return (
    <Box id="column" 
      onClick={() => handleColumnClick(index)}
      position='relative'
      width={oneSeventh}
      height='100%'
      sx={{
        '&:hover #hoverChip': {
          backgroundColor: nextPlayerColor(movelist),
        },
      }}
    >
      <HoverChip columnLetter={columnLetter} />
      <ChipContainer index={index} />
      <ColumnOfSquaresWithHoles />
    </Box>
  );
}

function HoverChip(props: { columnLetter: string}) {
  const { columnLetter } = props

  return (
    <Box id="hoverChipContainer"
      height={oneSeventh}
      zIndex={8}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Box id="hoverChip"
        bgcolor={ColorsEnum.unclaimed}
        width={chipSizeRelativeToSquare}
        height={chipSizeRelativeToSquare}
        borderRadius='50%'
        zIndex={zIndex.chip}
        display='flex'
        justifyContent='center'
        alignItems='flex-end'
        fontSize='2rem'
        
      >
        <Subtitle text={columnLetter} gutterBottom />
      </Box>
    </Box>
  )
}

function ChipContainer(props: { index: number}) {
  const { index } = props

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

export function Chip(props: { id: number, containerRef: any} ) {
  const { id, containerRef } = props

  // const { boardData, gameBoardConstants } = useContext(ConnectFourContext)

  const boardData: PlayersEnum[] = []
  
  // const { zIndex, oneSixth, chipSizeRelativeToSquare } = gameBoardConstants

  const color = boardData[id]
  let bgcolor = `connectFour.${color}`
  return (
    <Slide 
      in={color !== PlayersEnum.unclaimed}
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

function RoundedBorder() {
  return (
    <Box 
      id='rounded_border'
      boxSizing='content-box'
      position='absolute'
      top={oneSeventh}
      left='-10px'
      width='100%'
      height={sixSevenths}
      border="10px solid"
      borderColor={ColorsEnum.board}
      borderRadius="10px"
      borderTop={0}
    />
  )
}

function ColumnOfSquaresWithHoles() {

  return (
    <Box id="columnOfSquares"
      position='absolute'
      top={oneSeventh}
      bgcolor='transparent'
      width='100%'
      height={sixSevenths}
      zIndex={zIndex.board}
      display='flex'
      flexDirection='column-reverse'
    >
      {rowNumbers.map(num => {
        return (
          <Box id="squareWithHole"
            key={num}
            overflow='hidden'
            width='100%'
            height={oneSixth}
            display='flex'
            justifyContent='center'
            alignItems='center'
            boxShadow='0px 1px 1px 1px #0039cb'
          >
            <Box id="hole"
              boxShadow="0 0 0 99px #0039cb"
              borderRadius='50%'
              bgcolor='transparent'
              width={chipSizeRelativeToSquare}
              height={chipSizeRelativeToSquare}
            />
          </Box>
        )
      })}
    </Box>
  )
}