import { intersect } from "../helpers/probability";



enum GameStatusEnum {
  playerOneWins = 'playerOneWins',
  playerTwoWins = 'playerTwoWins',
  draw = 'draw',
  playerOneToMove = 'playerOneToMove',
  playerTwoToMove = 'playerTwoToMove'

}

export type CardId = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export enum DifficultyModes {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard'
}
  
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

////////////////////////////////////////////////////////////////
//  Current Game Status: "xWins", "oWins", "draw",  "xNext", or "oNext"
////////////////////////////////////////////////////////////////
export function status(movelist: string) {
  if (playerOneWins(movelist)) {
    return (GameStatusEnum.playerOneWins)
  }
  else if (playerTwoWins(movelist)) {
    return (GameStatusEnum.playerTwoWins)
  }
  else if (movelist.length === 9) {
    return (GameStatusEnum.draw)
  }
  else {
    return nextPlayer(movelist)  // "xNext" || "oNext"
  }
}
////////////////////////////////////////////////////////////////
// Game Status Helpers: BOOLEAN
////////////////////////////////////////////////////////////////
export function nextPlayer(movelist: string) {
  return (movelist.length % 2 === 0) ? "xNext" : "oNext"
}

export function gameOver(movelist: string) {
  return (movelist.length === 9 || gameHasBeenWon(movelist))
}

function gameHasBeenWon(movelist: string) {
  return (playerOneWins(movelist) || playerTwoWins(movelist)) 
}

export function playerOneWins(movelist: string) {
  return sumsOfThree(playerOnesMoves(movelist)).includes(15)
}

export function playerTwoWins(movelist: string) {
  return sumsOfThree(playerTwosMoves(movelist)).includes(15)
}

export function gameDrawn(movelist: string) {
  return (movelist.length === 9 && !gameHasBeenWon(movelist))
}

export function moveNumber(movelist: string) {
    return (movelist.length + 1)
}

export function numbersInWin(movelist: string) {
  let Xs = playerOnesMoves(movelist)
  let Os = playerTwosMoves(movelist)
  let winningTrios = trioList.filter(trio =>
    intersect(trio, Xs).length === 3 || intersect(trio, Os).length === 3
  )
  return winningTrios.flat()
}

// Includes final and predicted
export function outcome(movelist: string, outcomeMap) {
  return (gameOver(movelist)) ? finalOutcome(movelist) : predictedOutcome(movelist, outcomeMap)
}

function finalOutcome(movelist: string) {
  let outcome = playerOneWins(movelist) ? 
    GameStatusEnum.playerOneWins : 
    playerTwoWins(movelist) ?
    GameStatusEnum.playerTwoWins : 
    movelist.length === 9 ?
    GameStatusEnum.draw : 
    Error
  
  return outcome
}


function predictedOutcome(movelist: string, outcomeMap: Map<string, string>) {
    let outcome = "error"

// TODO

    let childrensOutcomes = getChildren(movelist).map(child => outcomeMap.get(child))
    // console.log(`Position: ${position} --> childrensOutcomes: ${childrensOutcomes}`)
    if (nextPlayer(movelist) === "xNext") {
        if (childrensOutcomes.includes("xWins")) {
            outcome = "xWins"
        }
        else if (childrensOutcomes.includes("draw")) {
            outcome = "draw"
        }
        else {
            outcome = "oWins"
        }
    }
    else {
        if (childrensOutcomes.includes("oWins")) {
            outcome = "oWins"
        }
        else if (childrensOutcomes.includes("draw")) {
            outcome = "draw"
        }
        else {
            outcome = "xWins"
        }
    }
    return outcome
}

////////////////////////////////////////////////////////////////
// Isolate each players' claimed numbers: ARRAY(NUM)
////////////////////////////////////////////////////////////////
export function playerOnesMoves(movelist: string) {
  return moveListStringToArray(movelist).filter((move, turn) => turn % 2 === 0)
}
export function playerTwosMoves(movelist: string) {
  return moveListStringToArray(movelist).filter((move, turn) => turn % 2 === 1)
}

export function moveListStringToArray(movelist: string) {     // "123" --> [1,2,3]
  return Array.from(movelist)!.map(e => Number(e))
}

export function getChildren(movelist: string) {
  let children: string[] = []
  getValidMoves(movelist).forEach(move => children.push(movelist + move))
  return children
}

export function getValidMoves(movelist: string) {
  return (gameOver(movelist)) ? [] : availableNumbers(movelist)
}

export function availableNumbers(movelist: string) {
  let availableNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
  for (let i = 0; i < movelist.length; i++) {
    availableNumbers.delete(parseInt(movelist.charAt(i)))
  }
  return Array.from(availableNumbers)
}
export function getParent(movelist: string) {
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
  let positionsList = [[""]]
  for (let parentLength = 0; parentLength < 9; parentLength++) {
      let parentPositions = positionsList[parentLength]
      let childPositions = parentPositions.map(parent => getChildren(parent)).flat()
      positionsList.push(childPositions)
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

