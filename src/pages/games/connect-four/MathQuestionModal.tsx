import React, { useState, useContext } from 'react'

// COMPONENTS
import { Box, Button, Dialog, Zoom, Typography, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { Heading, Subtitle } from '@/components';

// CONTEXT 
import { AppContext } from "../../../../../AppContext";
import { ConnectFourContext } from "../ConnectFourContext";


// DATA
import { sampleQuestion } from "./questionGenerators/sampleQuestion";

// TYPES
import { QuestionModalProps, InputTypeEnum, AnswerInputComponentProps } from './connectFourTypes';

// HELPERS
import { ColorsEnum } from '@/@types/Colors';

// Style & Layout Constants
const instructionsHeight = "33%"
const equationHeight = "32%"
const inputHeight = "35%"

const ZoomTransition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
})

export function MathQuestionModal(props: QuestionModalProps) {
    const { open, question = sampleQuestion, borderColor } = props 
    const { vars,instruction, questionFormat } = question

    const [modalHeaderText, setModalHeaderText] = useState(instruction)
    
    const maxSquareSideLength = 300 
    
    function handleAnswerSubmit(playersAnswer: string) {
        const answerIsCorrect = (Number(playersAnswer.trim()) === question.correctAnswer)
        const answerFeedback = answerIsCorrect ? 
          chooseRandomFromArray(waysToSayCorrect) : 
          `Nope. It was ${question.correctAnswer}.`
          // setHeaderText(answerFeedback)
    
        let moveToAdd = (answerIsCorrect) ? activeCell : -1
        let updatedMoveList = movelist.concat(moveToAdd)
        let updatedGameStatus = getGameStatus(updatedMoveList)
        console.log(`updated game status : ${updatedGameStatus}`);
        // Close the question modal after the player has had time too see the feedback
        setTimeout(() => { 
          setQuestionModalOpen(false)
        }, 1400);
        setTimeout(() => {
          setMovelist(updatedMoveList)
        }, 1850)
      }

    return (
        <Dialog 
            // keepMounted
            disableEscapeKeyDown
            open={open}
            onBackdropClick={() => {}}  // disable close on bg click
            aria-describedby="math-question-dialog"
            // TransitionComponent={ZoomTransition}
            PaperProps={{
              sx: {
                border: `solid white 12px`,
                borderColor: borderColor,
                margin: `${0.05 * maxSquareSideLength}px`,
                // marginTop: `${navbarHeightPx}px`,
                height: `${0.9 * maxSquareSideLength}px`,
                width: `${0.9 * maxSquareSideLength}px`,
                maxWidth: '100%',
                borderRadius: '50%',
              }
            }}
        >
            {/* <HeaderText headerText={instruction} /> */}
            <Heading text={instruction} textColor={ColorsEnum.black} />

            <Subtitle text={questionFormat} textColor={ColorsEnum.black} />
            <AnswerInputComponent 
              // inputType={inputType}
              question={question}
              handleAnswerSubmit={handleAnswerSubmit}
            />
        </Dialog>
    )
}
  
function AnswerInputComponent(props: AnswerInputComponentProps) {
    const { question, handleAnswerSubmit } = props
    const { inputType } = question


    const [playersAnswer, setPlayersAnswer] = useState("")
    const answerIsNum = /^\d+$/.test(playersAnswer)
    const error = (playersAnswer.length > 0 && !answerIsNum)
    const handlePlayersAnswerChange = (event: any) => {
        let updatedAnswer = event.target.value.trim()
        setPlayersAnswer(updatedAnswer)
    }

    if (inputType === InputTypeEnum.textField) {
      return (
        <NumericalTextInput
            error={error}
            handleAnswerSubmit={handleAnswerSubmit}
        />
      )
    }
    else if (inputType === InputTypeEnum.compareMagnitude) {
      return (
        <CompareButtons 
            // handleSubmitButtonClick={() => handleAnswerSubmit(playersAnswer)}
        />
      )
    }
    else {
        console.error(`getInputComponent failed. Invalid inputType: ${inputType}`)
    }

    type NumericalTextInputProps = {
      // inputType: InputTypeEnum,
      // correctAnswer: number,
      handleAnswerSubmit: Function,
      error: boolean
    }

    function NumericalTextInput(props: NumericalTextInputProps) {
        const { error, handleAnswerSubmit } = props

        return (
            <Box sx={{
                height: inputHeight,
                width: '100%',
                padding: '0 20%',
            }}>
                <FormControl 
                    id="answer-input-form"
                    color="primary"
                    error={error}
                    sx={{
                        display: 'flex',
                        flexFlow: 'row nowrap',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}
                >
                    <InputLabel>{(error === false) ? "Your Answer" : "Enter a whole number"}</InputLabel>
                    <OutlinedInput
                        label={(error === false) ? "Your Answer" : "Enter a whole number"}
                        value={playersAnswer}
                        id="answer-input"
                        fullWidth
                        size="medium"
                        autoFocus
                        autoComplete='off'
                        type="tel"
                        // pattern='[0-9]*'
                        onChange={handlePlayersAnswerChange}
                        inputProps={{ 
                            style: { fontSize: '2rem', height: '2rem' }
                        }}
                        sx={{ width: '62%' }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" && playersAnswer !== "") {
                            handleAnswerSubmit(playersAnswer)
                          }
                        }}
                    />
                    <Button id="submit_button"
                      disabled={error || playersAnswer === "" }
                      onClick={() => handleAnswerSubmit(playersAnswer)}
                      variant='contained'
                      sx={{ 
                          ml: 1, 
                          px: 2.5,
                          lineHeight: '3rem',
                          width: '42%'
                      }}
                      children="Submit"
                    />
                </FormControl>
            </Box>
        )
    }
}


function CompareButtons(props) {
  // let { handleSubmitButtonClick } = props

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button />
      <Button />
      <Button />
    </Box>
  )
}
