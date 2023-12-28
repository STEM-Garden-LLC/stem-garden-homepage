import { intersect } from "../helpers/probability";

import { 
  MovelistType, 
  GameStatusEnum, 
  GameOutcomesEnum,
  PlayersEnum,
  CardClaimStatusEnum,

} from './magicSquareTypes'
  
// Generate all sets of three that sum to 15
export const trioList = generateTrioList()
function generateTrioList() {
  let trioList = []
  // Let i represent the smallest of the three numbers
  for (let i = 1; i <= 7; i++) {
    // Iterate thru all possible values of j
    for (let j = i + 1; j <= 8; j++) {
      let k = complementOf(i + j)
      // Check if a k exists that would complete the trio
      if (k > j && k <= 9) {
        let newTrio = [i, j, k]
        trioList.push(newTrio)
      }
    }
  }
  return trioList
}

export function complementOf(sumOfTwo: number) {
  return (15 - sumOfTwo)
}



export function getCardClaimStatus(cardId: string, movelist: MovelistType) {
  console.log(`ML: ${movelist}`)
  console.log(`Type of ML first element: ${typeof(movelist[0])}`)
  
  let turn = movelist.indexOf(cardId)
  if (turn === -1) {
    return CardClaimStatusEnum.unclaimed
  }
  else {
    return (turn % 2 === 0) ? CardClaimStatusEnum.playerOne : CardClaimStatusEnum.playerTwo
  }
}

////////////////////////////////////////////////////////////////
//  Current Game Status: "xWins", "oWins", "draw",  "xNext", or "oNext"
////////////////////////////////////////////////////////////////
export function status(movelist: MovelistType) {
  if (playerOneWins(movelist)) {
    return (GameStatusEnum.playerOneWins)
  }
  else if (playerTwoWins(movelist)) {
    return (GameStatusEnum.playerTwoWins)
  }
  else if (movelist!.length === 9) {
    return (GameStatusEnum.draw)
  }
  else {
    return nextPlayer(movelist)
  }
}
////////////////////////////////////////////////////////////////
// Game Status Helpers: BOOLEAN
////////////////////////////////////////////////////////////////
export function nextPlayer(movelist: MovelistType) {
  return (movelist.length % 2 === 0) ? 
    GameStatusEnum.playerOneToMove : 
    GameStatusEnum.playerTwoToMove
}

export function gameOverFromMovelist(movelist: MovelistType) {
  return (movelist.length === 9 || gameHasBeenWon(movelist))
}
export function gameOverFromStatus(status: GameStatusEnum) {
  return ([
    GameStatusEnum.draw, 
    GameStatusEnum.playerOneWins, 
    GameStatusEnum.playerTwoWins
  ].includes(status))
}

function gameHasBeenWon(movelist: MovelistType) {
  return (playerOneWins(movelist) || playerTwoWins(movelist)) 
}

export function playerOneWins(movelist: MovelistType) {
  return sumsOfThree(playerOnesMoves(movelist)).includes(15)
}

export function playerTwoWins(movelist: MovelistType) {
  return sumsOfThree(playerTwosMoves(movelist)).includes(15)
}

export function gameDrawn(movelist: MovelistType) {
  return (movelist.length === 9 && !gameHasBeenWon(movelist))
}

export function moveNumber(movelist: MovelistType) {
    return (movelist.length + 1)
}

export function numbersInWin(movelist: MovelistType) {
  let Xs = playerOnesMoves(movelist)
  let Os = playerTwosMoves(movelist)
  let winningTrios = trioList.filter(trio =>
    intersect(trio, Xs).length === 3 || intersect(trio, Os).length === 3
  )
  return winningTrios.flat()
}

// Includes final and predicted
export function outcome(movelist: MovelistType, outcomeMap: Map<MovelistType, OutcomesEnum>) {
  return (gameOver(movelist)) ? finalOutcome(movelist) : predictedOutcome(movelist, outcomeMap)
}

function finalOutcome(movelist: MovelistType) {
  let outcome = playerOneWins(movelist) ? 
    GameStatusEnum.playerOneWins : 
    playerTwoWins(movelist) ?
    GameStatusEnum.playerTwoWins : 
    movelist.length === 9 ?
    GameStatusEnum.draw : 
    Error
  
  return outcome
}


function predictedOutcome(movelist: MovelistType, outcomeMap: Map<MovelistType, OutcomesEnum>) {
    let outcome

    const gameStatus = status(movelist)

    let childrensOutcomes = getChildren(movelist).map(child => outcomeMap.get(child))
    // console.log(`Position: ${position} --> childrensOutcomes: ${childrensOutcomes}`)
    
    if (gameStatus === GameStatusEnum.playerOneToMove) {
      outcome = childrensOutcomes.includes(GameOutcomesEnum.playerOneWins) ? 
        GameOutcomesEnum.playerOneWins :
        childrensOutcomes.includes(GameOutcomesEnum.draw) ?
        GameOutcomesEnum.draw : GameOutcomesEnum.playerTwoWins
    }
    else if (gameStatus === GameStatusEnum.playerTwoToMove) {
      outcome = childrensOutcomes.includes(GameOutcomesEnum.playerTwoWins) ? 
        GameOutcomesEnum.playerTwoWins :
        childrensOutcomes.includes(GameOutcomesEnum.draw) ?
        GameOutcomesEnum.draw : GameOutcomesEnum.playerOneWins
    }
    return outcome
}

////////////////////////////////////////////////////////////////
// Isolate each players' claimed numbers: ARRAY(NUM)
////////////////////////////////////////////////////////////////
export function playerOnesMoves(movelist: MovelistType) {
  // console.log(`Original Movelist: ${movelist}`)
  let playerOnesMoves = ''
  for (let c = 0; c < movelist.length; c++) {
    if (c % 2 === 0) {
      playerOnesMoves = playerOnesMoves.concat(movelist.charAt(c))
    }
  }
  // console.log(`Filtered Movelist: ${filteredMovelist}`)
  return playerOnesMoves
  // return playerOnesMoves
}
export function playerTwosMoves(movelist: MovelistType) {
  // console.log(`Original Movelist: ${movelist}`)
  let playerTwosMoves = ''
  for (let c = 0; c < movelist.length; c++) {
    if (c % 2 === 0) {
      playerTwosMoves = playerTwosMoves.concat(movelist.charAt(c))
    }
  }
  // console.log(`Filtered Movelist: ${filteredMovelist}`)
  return playerTwosMoves
}

export function movelistToNumberArray(movelist: MovelistType) {     // "123" --> [1,2,3]
  const array : number[] = Array.from(movelist).map(e => Number(e)) ?? []
  return array
}

export function getChildren(movelist: MovelistType) {
  let children: MovelistType[] = []
  getValidMoves(movelist).forEach(move => children.push(movelist.concat(move)))
  return children
}

export function getValidMoves(movelist: MovelistType) {
  return (gameOverFromMovelist(movelist)) ? [] : availableNumbers(movelist)
}

export function availableNumbers(movelist: MovelistType) {
  let availableNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
  for (let i = 0; i < movelist.length; i++) {
    availableNumbers.delete(movelist[i])
  }
  return Array.from(availableNumbers)
}

export function getParent(movelist: MovelistType) {
    return movelist.slice(0, movelist.length - 1)
}

////////////////////////////////////////////////////////////////
// Lowest Level Logic
////////////////////////////////////////////////////////////////

function sumsOfThree(playersMoves: number[]) {
  let sums: number[] = []
  if (playersMoves.length < 3) {
      return sums
  }
  for (let i = 0; i < playersMoves.length - 2; i++) {
    for (let j = i + 1; j < playersMoves.length - 1; j++) {
      for (let k = j + 1; k < playersMoves.length; k++) {
        let sum = playersMoves[i] + playersMoves[j] + playersMoves[k]
        sums.push(sum)
      }
    }
  }
  return sums
}
export function sumsOfTwo(playersMoves: number[]) {
  let sums: number[] = []
  if (playersMoves.length < 2) {
    return sums
  }
  for (let i = 0; i < playersMoves.length - 1; i++) {
    for (let j = i + 1; j < playersMoves.length; j++) {
      let sum = playersMoves[i] + playersMoves[j]
      sums.push(sum)
    }
  }
  return sums
}

////////////////////
//    SOLUTION    //
////////////////////

const listOfPossiblePositions = getListOfPossiblePositions()
function getListOfPossiblePositions() {
  // Returns an array of arrays of strings
  // Layer 1) indices 0 thru 9 correspond to the lengths of the move lists contained there
  // Layer 2) an array containing all valid move lists of that length
  // Layer 3) Move List string representations
  let positionsList = [[[]]]
  for (let parentLength = 0; parentLength < 9; parentLength++) {
    let parentPositions : MovelistType[] = positionsList[parentLength]
    // let childPositions = parentPositions.map(parent => getChildren(parent)).flat()
    // positionsList.push(childPositions)
  }
  return positionsList
}


// export const outcomeMap = generatePositionToOutcomeMap()
export async function generatePositionToOutcomeMap() {
  let outcomeMap = new Map()
  let list = listOfPossiblePositions
  for (let length = 9; length >= 0; length--) {
    let positions = list[length]
    for (let p = 0; p < positions.length; p++) {
      let movelist = positions[p]
      outcomeMap.set(movelist, outcome(movelist, outcomeMap))
    }
  }
  return outcomeMap
}

