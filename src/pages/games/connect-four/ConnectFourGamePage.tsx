import { useState, useEffect, createContext, useContext } from "react";

// COMPONENTS
import { Box, Container, List, Checkbox, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import { Title, Heading, TextSection } from '@/components/typography'
import { GameButton } from "@/components";
import { ConnectFourBoard } from "./Board";
import { NewGameButton, UndoMoveButton } from "./Buttons";


// ICONS
import { faGear } from '@fortawesome/free-solid-svg-icons';


// DATA
import { rulesSection, suggestedUseSection, thanksSection } from "@/data/connectFourGameData";
import { sampleQuestion } from "./questionGenerators/sampleQuestion";

// TYPES
import { AlignEnum } from '@/@types'
import { ViewEnum, QuestionTypesEnum, TimeLimitTypesEnum, GameStatusEnum, MathQuestionObject, InputTypeEnum } from "./connectFourTypes";


// HELPERS 
import { getGameStatus, gameIsOver, getLowestUnclaimedCell, nextPlayerColor } from "./helpers";
import { chooseRandomFromArray } from "@/helpers/randomization";
import { generateQuestion } from './questionGenerators/generateQuestion';
import { MathQuestionModal } from "./MathQuestionModal";

// import { ConnectFourContextProvider } from "./ConnectFourContext";
// import ConnectFourController from './ConnectFourController';

export default function ConnectFourGamePage() {
  const [view, setView] = useState(ViewEnum.welcome) 

  const [questionTypes, setQuestionTypes] = useState([QuestionTypesEnum.addTwoSingleDigitNumbers]) 
  const [timeLimitType, setTimeLimitType] = useState(TimeLimitTypesEnum.noTimeLimit)

  const [movelist, setMovelist] = useState([])  // The ids of the cells claimed in order with -1 indicating skipped turns
  const [gameStatus, setGameStatus] = useState(GameStatusEnum.playerOnesTurn)  // The ids of the cells claimed in order with -1 indicating skipped turns


  return (
    <>
      {
        view === ViewEnum.welcome ? <ConnectFourWelcome setView={setView} /> :
        view === ViewEnum.settings ? <ConnectFourSettings questionTypes={questionTypes} setQuestionTypes={setQuestionTypes} timeLimitType={timeLimitType} setTimeLimitType={setTimeLimitType} setView={setView} /> : 
        <ConnectFourGame questionTypes={questionTypes} timeLimitType={timeLimitType} movelist={movelist} setMovelist={setMovelist} gameStatus={gameStatus} />
      }
    </> 
  )
}


function ConnectFourWelcome(props: any) {
  const { setView } = props

  return (
    <Container>
      <Title text="Math Fact" gutterTop />
      <Title text="Connect Four" gutterBottom />
      <GameButton 
        label="Choose Game Settings"  
        icon={faGear}
        onClick={() => setView(ViewEnum.settings)}
      />
      <Box p={2} />
      <TextSection data={rulesSection.data} />
      <TextSection data={suggestedUseSection.data} />
      <TextSection data={thanksSection.data} />
    </Container>
  )
}

function ConnectFourSettings(props: any) {
  const { questionTypes, setQuestionTypes, timeLimitType, setTimeLimitType, setView } = props

  const questionTypesArray = [
    QuestionTypesEnum.addTwoSingleDigitNumbers,
    QuestionTypesEnum.addSingleDigitToDoubleDigit,
    QuestionTypesEnum.addTwoDoubleDigitNumbers
  ]

  const timeLimitTypesArray = [
    TimeLimitTypesEnum.noTimeLimit,
    TimeLimitTypesEnum.fiveSecondsPerQuestion,
    TimeLimitTypesEnum.tenSecondsPerQuestion,
    TimeLimitTypesEnum.fiveMinutesForTheGame,
    TimeLimitTypesEnum.tenMinutesForTheGame,
  ]
  
  const toggleQuestionType = (value: QuestionTypesEnum) => () => {
    const currentIndex = questionTypes.indexOf(value);
    const newQuestionTypes = [...questionTypes];

    if (currentIndex === -1) {
      newQuestionTypes.push(value);
    } else {
      newQuestionTypes.splice(currentIndex, 1);
    }

    setQuestionTypes(newQuestionTypes);
  };

  // const setTimeLimitType = (value: TimeLimitTypesEnum) => () => {
  //   const currentIndex = questionTypes.indexOf(value);
  //   const newQuestionTypes = [...questionTypes];

  //   if (currentIndex === -1) {
  //     newQuestionTypes.push(value);
  //   } else {
  //     newQuestionTypes.splice(currentIndex, 1);
  //   }

  //   setQuestionTypes(newQuestionTypes);
  // };


  return (
    <Container>
      <Title text="Settings" gutterTop gutterBottom />

      <Heading text="Question Types" align={AlignEnum.left} />
      <List sx={{ padding: 2, display: 'flex', flexDirection: 'column' }} >
        {questionTypesArray.map((value, index) => {
          return (
            <FormControlLabel 
              key={index} 
              value={value} 
              control={<Checkbox  />} 
              checked={questionTypes.indexOf(value) !== -1}
              label={value} 
              onClick={toggleQuestionType(value)}
            />
          );
        })}
      </List>
     

      <Heading text="Time Limits" align={AlignEnum.left} />
      <List sx={{ paddingLeft: 2 }}>
      <RadioGroup
          aria-labelledby="time-limit-radio-buttons"
          defaultValue={TimeLimitTypesEnum.noTimeLimit}
          name="radio-buttons-group"
        >
          {timeLimitTypesArray.map((value, index) => {
            return (
              <FormControlLabel 
                key={index} 
                value={value} 
                control={<Radio />} 
                label={value} 
              />
            );
          })}
        </RadioGroup>
      </List>

      <GameButton 
        label="Start Game"  
        onClick={() => setView(ViewEnum.playGame)}
      />

    </Container>
  )
}


function ConnectFourGame(props: any) {
  const { questionTypes, timeLimitType, movelist, setMovelist, gameStatus } = props

  const [activeCell, setActiveCell] = useState(-1)
  const [question, setQuestion] = useState(sampleQuestion)
  const [ questionModalOpen, setQuestionModalOpen] = useState(false)

  function handleColumnClick(columnIndex: number) {
    console.log(`handleColumnClick for col ${columnIndex} with MOVE LIST: ${movelist}`);
    if (gameIsOver(gameStatus)) {
      console.log(`handleColumnClick() had NO EFFECT since game is already over!`)
      return 
    }
    let cell = getLowestUnclaimedCell(movelist, columnIndex)
    if (cell === -1) {
      console.log(`handleColumnClick() had NO EFFECT since column is full!`)
      return
    }
    let topic = chooseRandomFromArray(questionTypes)
    let question = generateQuestion(topic)
    console.log(`${JSON.stringify(question, null, 4)}`)
    setQuestion(question)
    setActiveCell(cell)
    setQuestionModalOpen(true)
  }

  function openMathQuestionModal() {
    // let difficulty = determineDifficulty()
    // generateQuestion(chooseRandomFromArray(questionTypes)).then(newQuestion => {
      let question = generateQuestion(topic)
      // setQuestion(question)
      setQuestionModalOpen(true)
  }

  // function handleAnswerSubmit(playersAnswer: string) {
  //   const answerIsCorrect = (Number(playersAnswer.trim()) === question.correctAnswer)
  //   const answerFeedback = answerIsCorrect ? 
  //     chooseRandomFromArray(waysToSayCorrect) : 
  //     `Nope. It was ${question.correctAnswer}.`
  //     // setHeaderText(answerFeedback)

  //   let moveToAdd = (answerIsCorrect) ? activeCell : -1
  //   let updatedMoveList = movelist.concat(moveToAdd)
  //   let updatedGameStatus = getGameStatus(updatedMoveList)
  //   console.log(`updated game status : ${updatedGameStatus}`);
  //   // Close the question modal after the player has had time too see the feedback
  //   setTimeout(() => { 
  //     setQuestionModalOpen(false)
  //   }, 1400);
  //   setTimeout(() => {
  //     setMovelist(updatedMoveList)
  //   }, 1850)
  // }

  function handleNewGameClick() {
    setMovelist([])
  }

  function handleUndoMoveClick() {
    setMovelist(movelist.slice(0,-1))
  }

  function PlayGameViewButtons() {
    return (
      <Box paddingTop={4} >
        <NewGameButton handleNewGameClick={handleNewGameClick} />
        <UndoMoveButton handleUndoMove={handleUndoMoveClick} />
      </Box>
    )
  }

  return (
    <Box sx={{
      minHeight: '85vh',
      display:"flex",
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
    }} >
      {/* <Title text="Play Connect Four" />
      <Heading text={questionTypes} />
      <Heading text={timeLimitType} /> */}
      <ConnectFourBoard 
        movelist={movelist}
        gameStatus={gameStatus}
        handleColumnClick={handleColumnClick}
      />
      <MathQuestionModal 
        open={questionModalOpen} 
        question={question} 
        // handleAnswerSubmit={handleAnswerSubmit} 
        borderColor={nextPlayerColor(movelist)} />
      <PlayGameViewButtons />
    </Box>
  )
}
