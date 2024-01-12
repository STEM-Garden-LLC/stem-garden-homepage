import { intersect } from "../../../helpers/math";

import { 
  MovelistType, 
  GameStatusEnum, 
  OutcomesEnum,
  CardClaimStatusEnum,
  PlayModeEnum,
} from './fifteenGameTypes'
  
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



export function getCardClaimStatus(cardId: string, movelist: MovelistType, playMode: PlayModeEnum) {
  let turn = movelist.indexOf(cardId)
  if (turn === -1) {
    return CardClaimStatusEnum.unclaimed
  }
  else if (playMode === PlayModeEnum.playerOneGoesFirst || playMode === PlayModeEnum.humanGoesFirst) {
    return (turn % 2 === 0) ? CardClaimStatusEnum.playerOne : CardClaimStatusEnum.playerTwo
  }
  else {
    return (turn % 2 === 1) ? CardClaimStatusEnum.playerOne : CardClaimStatusEnum.playerTwo
  }
}

export function playModeIsHumanVsHuman(playMode: PlayModeEnum) {
  return (
    playMode === PlayModeEnum.playerOneGoesFirst || 
    playMode === PlayModeEnum.playerTwoGoesFirst
  )
} 
  
export function playModeIsHumanVsBot(playMode: PlayModeEnum) {
  return (
    playMode === PlayModeEnum.humanGoesFirst || 
    playMode === PlayModeEnum.botGoesFirst
  )
} 

export function status(movelist: MovelistType) {
  if (firstPlayerWins(movelist)) {
    return GameStatusEnum.firstPlayerWins
  }
  else if (secondPlayerWins(movelist)) {
    return GameStatusEnum.secondPlayerWins
  }
  else if (movelist.length === 9) {
    return GameStatusEnum.draw
  }
  else {
    return nextPlayer(movelist)
  }
}

export function nextPlayer(movelist: MovelistType) {
  return (movelist.length % 2 === 0) ? GameStatusEnum.firstPlayerToMove : GameStatusEnum.secondPlayerToMove
}

export function gameOver(movelist: MovelistType) {
  return (movelist.length === 9 || gameHasBeenWon(movelist))
}

function gameHasBeenWon(movelist: MovelistType) {
  return (firstPlayerWins(movelist) || secondPlayerWins(movelist)) 
}

export function firstPlayerWins(movelist: MovelistType) {
  return sumsOfThree(firstPlayersMoves(movelist)).includes(15)
}

export function secondPlayerWins(movelist: MovelistType) {
  return sumsOfThree(secondPlayersMoves(movelist)).includes(15)
}

export function gameDrawn(movelist: MovelistType) {
  return (movelist.length === 9 && !gameHasBeenWon(movelist))
}


export function numbersInWin(movelist: MovelistType) {
  let Xs = firstPlayersMoves(movelist)
  let Os = secondPlayersMoves(movelist)
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
  let outcome = firstPlayerWins(movelist) ? 
    GameStatusEnum.firstPlayerWins : 
    secondPlayerWins(movelist) ?
    GameStatusEnum.secondPlayerWins : 
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
    
    if (gameStatus === GameStatusEnum.firstPlayerToMove) {
      outcome = childrensOutcomes.includes(OutcomesEnum.firstPlayerWins) ? 
        OutcomesEnum.firstPlayerWins :
        childrensOutcomes.includes(OutcomesEnum.draw) ?
        OutcomesEnum.draw : OutcomesEnum.secondPlayerWins
    }
    else if (gameStatus === GameStatusEnum.secondPlayerToMove) {
      outcome = childrensOutcomes.includes(OutcomesEnum.secondPlayerWins) ? 
        OutcomesEnum.secondPlayerWins :
        childrensOutcomes.includes(OutcomesEnum.draw) ?
        OutcomesEnum.draw : OutcomesEnum.firstPlayerWins
    }
    return outcome
}

////////////////////////////////////////////////////////////////
// Isolate each players' claimed numbers: ARRAY(NUM)
////////////////////////////////////////////////////////////////
export function firstPlayersMoves(movelist: MovelistType) {
  let firstPlayersMoves = ''
  for (let c = 0; c < movelist.length; c++) {
    if (c % 2 === 0) {
      firstPlayersMoves = firstPlayersMoves.concat(movelist.charAt(c))
    }
  }
  return firstPlayersMoves.split('').map(s => Number(s))
}

export function secondPlayersMoves(movelist: MovelistType) {
  let secondPlayersMoves = ''
  for (let c = 0; c < movelist.length; c++) {
    if (c % 2 === 1) {
      secondPlayersMoves = secondPlayersMoves.concat(movelist.charAt(c))
    }
  }
  return secondPlayersMoves.split('').map(s => Number(s))
}

export function movelistToNumberArray(movelist: MovelistType) {     // "123" --> [1,2,3]
  const array : number[] = Array.from(movelist).map(e => Number(e)) ?? []
  return array
}

export function getChildren(movelist: MovelistType) {
  let children: MovelistType[] = []
  getValidMoves(movelist).forEach(move => children.push(movelist.concat(move.toString())))
  return children
}

export function getValidMoves(movelist: MovelistType) {
  return (gameOver(movelist)) ? [] : availableNumbers(movelist)
}

export function availableNumbers(movelist: MovelistType) {
  let availableNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
  for (let i = 0; i < movelist.length; i++) {
    availableNumbers.delete(Number(movelist.charAt(i)))
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

// const listOfPossiblePositions = getListOfPossiblePositions()
// function getListOfPossiblePositions() {
//   // Returns an array of arrays of strings
//   // Layer 1) indices 0 thru 9 correspond to the lengths of the move lists contained there
//   // Layer 2) an array containing all valid move lists of that length
//   // Layer 3) Move List string representations
//   let positionsList = [['']]
//   for (let parentLength = 0; parentLength < 9; parentLength++) {
//     let parentPositions: MovelistType[] = positionsList[parentLength]
//     let childPositions: MovelistType[] = parentPositions.map(parent => getChildren(parent)).flat()
//     positionsList.push(childPositions)
//   }
//   console.log(`Positions List: ${positionsList}`)
//   return positionsList
// }


// export const outcomeMap = generatePositionToOutcomeMap()
// export async function generatePositionToOutcomeMap() {
//   let outcomeMap = new Map()
//   let list = listOfPossiblePositions
//   for (let length = 9; length >= 0; length--) {
//     let positions = list[length]
//     for (let p = 0; p < positions.length; p++) {
//       let movelist = positions[p]
//       outcomeMap.set(movelist, outcome(movelist, outcomeMap))
//     }
//   }
//   return outcomeMap
// }

