import { useContext } from "react";
import { ColorThemeContext } from "@/context/ColorThemeContext";

// HELPERS
import { intersect } from "@/helpers/math";
import { chooseRandomFromArray } from "@/helpers/randomization";
import { 
  sumsOfTwo, 
  complementOf, 
  gameOver, 
  firstPlayersMoves, 
  secondPlayersMoves, 
  nextPlayer, 
  availableNumbers 
} from "./magicSquareHelpers";


// TYPES
import { DifficultyModesEnum, GameStatusEnum, MovelistType, OutcomesEnum } from "./magicSquareTypes";


//////////////////////////////////////////////////////////////     
//  GET  BOT  MOVE  PROTOCOLS
////////////////////////////////////////////////////////////// 
export function getBotMove(difficultyMode: DifficultyModesEnum, movelist: MovelistType, humanGoesFirst: boolean, outcomeMap: Map<MovelistType, OutcomesEnum>) {
  const move = (difficultyMode === DifficultyModesEnum.easy) ? easyProtocol(movelist) : 
    difficultyMode === DifficultyModesEnum.medium ? mediumProtocol(movelist) :
    difficultyMode === DifficultyModesEnum.hard ? hardProtocol(movelist, humanGoesFirst, outcomeMap) : console.error(`getBotMove called with invalid difficulty mode!!!`)
  return move
}
// In EASY mode: Bot wins immediately if it can and otherwise selects a random move. 
function easyProtocol(movelist: MovelistType) {
  if (winningMoves(movelist).length > 0) {
    // console.log(`BOT FOUND IMMEDIATELY WINNING MOVES: ${winningMoves(movelist)}`)
    return chooseRandomFromArray(winningMoves(movelist))
  }
  else {
    return chooseRandomFromArray(availableNumbers(movelist))
  }
}
// In MEDIUM mode, Bot wins immediately if possible.
// In MEDIUM mode, Bot blocks any immediate threats but does not look any further ahead. 
function mediumProtocol(movelist: MovelistType) {
  let wins = winningMoves(movelist)
  let defensiveMoves = urgentDefensiveMoves(movelist)
  if (wins.length > 0) {
    // console.log(`BOT FOUND IMMEDIATELY WINNING MOVES: ${wins}`)
    return chooseRandomFromArray(wins)
  }
  else if (defensiveMoves.length > 0) {
    // console.log(`BOT FOUND URGENT DEFENSIVE MOVES: ${defensiveMoves}`)
    return chooseRandomFromArray(defensiveMoves)
  }
  else {
    return chooseRandomFromArray(availableNumbers(movelist))
  }
}

// In HARD mode Bot looks for forcing moves that will allow it to make double attacks on its next move.
// In HARD mode Bot avoids letting Player make forcing moves that will lead to double attacks.
function hardProtocol(movelist: MovelistType, humanGoesFirst: boolean, outcomeMap: Map<MovelistType, OutcomesEnum>) {
  let sorted = sortBotMoves(movelist, humanGoesFirst, outcomeMap)
  if (sorted.winningForBot.length > 0) {
    return chooseRandomFromArray(sorted.winningForBot)
  }
  else if (sorted.drawing.length > 0) {
    return chooseRandomFromArray(sorted.drawing)
  }
  else {
    return chooseRandomFromArray(sorted.winningForHuman)    
  }
}

/////////////////////////////////////////////////////////////////////////
// Coach & Bot Logic: Immediately Winning & Urgent Defensive Moves 
/////////////////////////////////////////////////////////////////////////
// For NEXT Player on NEXT turn
export function winningMoves(movelist: MovelistType) { 
  if (nextPlayer(movelist) === GameStatusEnum.firstPlayerToMove) {
    let complements = sumsOfTwo(firstPlayersMoves(movelist)).map(sum => complementOf(sum))
    return intersect(availableNumbers(movelist), complements)
  }
  else {
    let complements = sumsOfTwo(secondPlayersMoves(movelist)).map(sum => complementOf(sum))
    return intersect(availableNumbers(movelist), complements)
  }
}
export function urgentDefensiveMoves(movelist: MovelistType) {
  if (nextPlayer(movelist) === GameStatusEnum.firstPlayerToMove) {
    let complements = sumsOfTwo(secondPlayersMoves(movelist)).map(sum => complementOf(sum))
    return intersect(availableNumbers(movelist), complements)
  }
  else {
    let complements = sumsOfTwo(firstPlayersMoves(movelist)).map(sum => complementOf(sum))
    return intersect(availableNumbers(movelist), complements)
  }
}
export function doubleAttackingMoves(movelist: MovelistType) {
  let doubleAttackingMoves = availableNumbers(movelist).filter(num => urgentDefensiveMoves(movelist.concat(num)).length > 1)
  return doubleAttackingMoves
}
export function drawingMoves(movelist: MovelistType) { // For NEXT Player
  if (nextPlayer(movelist) === GameStatusEnum.firstPlayerToMove) {
    let complements = sumsOfTwo(firstPlayersMoves(movelist)).map(sum => complementOf(sum))
    return intersect(availableNumbers(movelist), complements)
  }
  else {
    let complements = sumsOfTwo(secondPlayersMoves(movelist)).map(sum => complementOf(sum))
    return intersect(availableNumbers(movelist), complements)
  }
}



function sortBotMoves(movelist: MovelistType, humanGoesFirst: boolean, outcomeMap: Map<MovelistType, String>) {
  let winningForBot: number[]= []
  let drawing: number[]= []
  let winningForHuman: number[]= []

  let validMoves = getValidMoves(movelist)
  validMoves.forEach(move => {
    let newPosition = movelist.concat(move.toString())
    let outcome = outcomeMap.get(newPosition)

    // We use Strings here instead of the OutcomesEnum because the JSON file that contains the outcomeMap is unaware of the Enum
    if (outcome === "draw") {
      drawing.push(move)
    }
    else if (outcome === "firstPlayerWins") {
      if (humanGoesFirst) {
        winningForHuman.push(move)
      }
      else {
        winningForBot.push(move)
      }
    }
    else if (outcome === "secondPlayerWins") {
      if (humanGoesFirst) {
        winningForBot.push(move)
      }
      else {
        winningForHuman.push(move)  
      }
    }
    else {
      console.error(`Error in sortBotMoves: could not sort ${move}`)
    }
  })
  return {
    "winningForBot": winningForBot,
    "drawing": drawing,
    "winningForHuman": winningForHuman,
  }
}


////////////////////////////////////////////////////////////////
// Get Children and Helpers:  An Array of movelist Strings
////////////////////////////////////////////////////////////////
export function getChildren(movelist: MovelistType) {
  let children: MovelistType[] = []
  getValidMoves(movelist).forEach(move => children.push(movelist + move))
  // this.validMoves(movelist).forEach(move => children.push(movelist + move))
  return children
}
function getValidMoves(movelist: MovelistType) {
  return (gameOver(movelist)) ? [] : availableNumbers(movelist)
}

export function getParent(movelist: MovelistType) {
  return movelist.slice(0, movelist.length - 1)
}

////////////////////////////////////////////////////////////////
// Opening Book
////////////////////////////////////////////////////////////////
// function getOpeningBookMove(movelist) {
//     console.assert(movelist.length < 2)
//     console.log(`BOT MAKING AN OPENING BOOK MOVE.`)

//     if (movelist.length === 0) {
//         return chooseRandomFromArray(availableNumbers(movelist))
//     }
//     else if (movelist[0] === 5) {
//         return chooseRandomFromArray([2, 4, 6, 8])
//     }
//     else if (movelist[0] % 2 === 0) {  // If player took a corner, bot must take center.
//         return [5]
//     }
//     else {
//         return chooseRandomFromArray(blockingMoves(movelist))
//     }
// }