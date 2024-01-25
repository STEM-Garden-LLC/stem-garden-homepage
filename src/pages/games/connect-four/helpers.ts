// This file contains helpers that only take the moveList and derive more
// helpful representations of that data like gameStatus and boardData
import { intersect } from "@/helpers/math";
import { chooseRandomFromArray } from '@/helpers/randomization';
// OUTCOME MAP
import cellsInLineJSON from './cells_in_line.json'
import linesThatIncludeCellJSON from './lines_that_include_cell.json'

import { MovelistType, PlayersEnum, GameStatusEnum, ColorsEnum } from "./connectFourTypes";

// Low-level Constants
const cellsPerCol = 6;
const cellsPerRow = 7;
// const totalCells = cellsPerCol * cellsPerRow;
const numberOfLines = 69;

// Returns one of 'playerOnesTurn', 'playerTwosTurn', 'playerOneWins', 'playerTwoWins', 'gameOverDraw'
// This function efficiently checks to see if the last move created a win for the player who made it.
// If not it checks to see if the board was filled by the last move.
// If not then that game must continue this method returns whose turn it is. 
export function getGameStatus(moveList: MovelistType) {
  // return early, no need to look for a win before player one has made four moves
  if (nonSkippedTurns(moveList).length < 7) {  
    return (moveList.length % 2 === 0) ? 'playerOnesTurn' : 'playerTwosTurn'
  }
  let lastPlayerToMove = (moveList.length % 2 === 1) ? "playerOne" : "playerTwo"
  let lastPlayersMoves = moveList.filter((move, turn) => turn % 2 !== moveList.length % 2)
  
  let cellsInLine = Object.create(cellsInLineJSON)
  let linesThatIncludeCell =  Object.create(linesThatIncludeCellJSON)

  let lastMoveMade = moveList.slice(-1)[0]
  let linesAffectedByLastMove = linesThatIncludeCell[lastMoveMade]
  console.log(`linesAffectedByLastMove --> ${linesAffectedByLastMove}`);
  for (let i = 0; i < linesAffectedByLastMove.length; i++) {
    let line = linesAffectedByLastMove[i]
    let cells = cellsInLine[line]
    if (intersect(cells, lastPlayersMoves).length === 4) {
      return (lastPlayerToMove === 'playerOne') ? 'playerOneWins' : 'playerTwoWins'
    }
  }
  if (boardIsFull(moveList)) {
    return 'gameOverDraw'
  }
  else {
    return (moveList.length % 2 === 0) ? 'playerOnesTurn' : 'playerTwosTurn'
  }
}

export function gameIsOver(gameStatus: GameStatusEnum) {
  return ([
    GameStatusEnum.playerOneWins,
    GameStatusEnum.playerTwoWins,
    GameStatusEnum.gameOverDraw
  ].includes(gameStatus))
}

export function nextPlayer(movelist: MovelistType) {
  return (movelist.length % 2 === 0 ? PlayersEnum.playerOne : PlayersEnum.playerTwo)
}

export function nextPlayerColor(movelist: MovelistType) {
  return (movelist.length % 2 === 0 ? ColorsEnum.playerOne : ColorsEnum.playerTwo)
}

// export function getLowestUnclaimedCells(moveList: MovelistType) {
//   // let lowestUnclaimedCells = gameBoardConstants.columnNumbers
//   let lowestUnclaimedCells = [0, 1, 2, 3, 4, 5, 6]
//   moveList.forEach(move => {
//     if (move !== -1) {
//       const col = move % 7
//       lowestUnclaimedCells[col] = (move + 7)
//     }
//   })
//   return lowestUnclaimedCells
// }

export function getLowestUnclaimedCell(moveList: MovelistType, columnIndex: number) {
  // let lowestUnclaimedCells = gameBoardConstants.columnNumbers
  let lowestUnclaimedCells = [0, 1, 2, 3, 4, 5, 6]
  moveList.forEach(move => {
    if (move !== -1) {
      const col = move % 7
      lowestUnclaimedCells[col] = (move + 7)
    }
  })
  return lowestUnclaimedCells[columnIndex]
}

export function getBoardData(moveList: MovelistType) {
  let data = new Array(42).fill("unclaimed")
  moveList.forEach((move, turn) => {
    if (move !== -1) {
      let player = turn % 2 === 0 ? "playerOne" : "playerTwo"
      data[move] = player
    }
  })
  return data
}

export function boardIsFull(moveList: MovelistType) {
  if (moveList.length < 42) {
    return false
  }
  else {
    return (nonSkippedTurns(moveList).length === 42)
  }
}

function nonSkippedTurns(moveList: MovelistType) {
  return moveList.filter(cellId => cellId !== -1)
}


export function getBotMove(moveList: MovelistType) {
  let wins = getWinningMovesForBot(moveList)
  let blocks = getDefensiveMovesForBot(moveList)
  let legalMoves = getLegalMoves(moveList)

  let winningMoves = intersect(wins, legalMoves)
  let blockingMoves = intersect(blocks, legalMoves)

  if (winningMoves.length > 0) {
    console.log(`Bot found Winning move "${wins}" in legal options ${legalMoves}`);
    return chooseRandomFromArray(winningMoves)
  }
  else if (blockingMoves.length > 0) {
    console.log(`Choosing bot move with threats: ${blocks} and legal options ${legalMoves}`);
    return chooseRandomFromArray(blockingMoves)
  }
  else {
    console.log(`Choosing RANDOM bot move with NO ways to win and NO ways to block.`);
    return chooseRandomFromArray(legalMoves)
  }
}


function getLegalMoves(moveList: MovelistType) {
  return getLowestUnclaimedCells(moveList).filter(cell => cell < 42)
}

// TODO: Check in on this. Resolved errors but not tested
function getDefensiveMovesForBot(moveList: MovelistType) {
  let cellsInLine = Object.create(cellsInLineJSON)
  let threats: number[] = []
  let humansMoves = playerOnesMoves(moveList)
  for (let lineId = 0; lineId < numberOfLines; lineId++) {
    let cells: number[] = Array.from(cellsInLine[lineId.toString()])
    if (intersect(cells, humansMoves).length === 3) {
      console.log(`Found Threat in Line ${lineId}: ${cellsInLine}`);
      threats = threats.concat(cells.filter(cellId => !humansMoves.includes(cellId)))
    }
  }
  console.log(`Found Threats: ${threats}`);
  return threats
}



// export function getWinningMovesForBot(moveList: MovelistType) {
//   let wins = []
//   let botsMoves = playerTwosMoves(moveList)
//   for (let lineId = 0; lineId < numberOfLines; lineId++) {
//     let cells = cellsInLine[lineId]
//     if (intersect(cells, botsMoves).length === 3) {
//       wins = wins.concat(cells.filter(cellId => !moveList.includes(cellId)))
//     }
//   }
//   console.log(`Found Wins: ${wins}`);
//   return wins
// }


function playerOnesMoves(moveList: MovelistType) {
  return moveList.filter((move, turn) => turn % 2 === 1)
}
function playerTwosMoves(moveList: MovelistType) {
  return moveList.filter((move, turn) => turn % 2 === 0)
}


