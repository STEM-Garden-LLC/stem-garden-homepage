import { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from "@/context/AppContext";

import { 
  getBoardData,
  getGameStatus,
  getLowestUnclaimedCells
 } from "./helpers";

// import { testQuestion } from './questionGenerators/questionGenerator'
import { GameStatusEnum } from "../connect-four/connectFourTypes";

function testQuestion() {
  let vars = [1, 2, 3, 6]
  return {
      type: "missingSumThree",
      vars: vars,
      correctAnswer: vars[3],
      equationString: `${vars[0]} + ${vars[1]} + ${vars[2]} = __`,
      instructions: "Test Question",
      inputType: "textField",
  }
}

export const ConnectFourContext = createContext();
// ConnectFourContext.displayName("Connect Four Context")

export const ConnectFourContextProvider = (props: any) => {
  // const { maxSquareSideLength } = useContext(AppContext)

  

  const defaultSettings = {
    opponent: 'human',
    topics: ['combine', 'multiply'],    // One of 'doubleTriple', 'halfThird'
    difficultyMode: "increasing"        // One of "easy" "medium" "hard" "increasing"
  }
  const [settings, setSettings] = useState(defaultSettings)

  // GAME State
  const [moveList, setMoveList] = useState([])  // The ids of the cells claimed in order with -1 indicating skipped turns
  
  const [gameStatus, setGameStatus] = useState(GameStatusEnum.playerOnesTurn)
  // const [boardData, setBoardData] = useState(new Array(42).fill('unclaimed')) // Indices correspond to cell ids, each value is one of "unclaimed" "playerOne" or "playerTwo"
  // const [nextPlayer, setNextPlayer] = useState('playerOne')
  // const [gameIsOver, setGameIsOver] = useState(false)
  // const [lowestUnclaimedCells, setLowestUnclaimedCells] = useState(gameBoardConstants.columnNumbers)
  // const [playerOnesMoves, setPlayerOnesMoves] = useState([])
  // const [playerTwosMoves, setPlayerTwosMoves] = useState([])

  // const [openModal, setOpenModal] = useState("welcome") // Enum: "none", "question", "settings", "welcome"
  
  // Active cell is the cell that would be added to the move list if the question is answered correctly.
  const [activeCell, setActiveCell] = useState(null) 
  const [question, setQuestion] = useState(testQuestion())
  const [headerText, setHeaderText] = useState("")

  // const [isBotsTurn, setIsBotsTurn] = useState(false)

  useEffect(() => {
    const updatedGameStatus = getGameStatus(moveList)
    setGameStatus(updatedGameStatus)
    // setBoardData(getBoardData(moveList))
    // setNextPlayer((moveList.length % 2 === 0) ? "playerOne" : "playerTwo")
    // setGameIsOver(['gameOverDraw','playerOneWins', 'playerTwoWins'].includes(updatedGameStatus))

    // setPlayerOnesMoves(moveList.filter((cell, turn) => turn % 2 === 0).filter(cell => cell !== -1))
    // setPlayerTwosMoves(moveList.filter((cell, turn) => turn % 2 === 1).filter(cell => cell !== -1))

    // setLowestUnclaimedCells(getLowestUnclaimedCells(moveList))

    setActiveCell(null) 
    setHeaderText("")

  },[moveList])

  const connectFourContext = {
    settings, setSettings,
    moveList, setMoveList,
    
    gameStatus,
    // boardData,
    // nextPlayer,
    // gameIsOver,
    // playerOnesMoves,
    // playerTwosMoves,

    // lowestUnclaimedCells,

    // gameBoardConstants,


    // openModal, setOpenModal,
    activeCell, setActiveCell,
    question, setQuestion,
    headerText, setHeaderText,

    // isBotsTurn, setIsBotsTurn

  }

  return (
    <ConnectFourContext.Provider 
      value={connectFourContext} 
      children={props.children}
    />
  )
};
