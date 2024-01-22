import { useState, useEffect, createContext, useContext } from "react";

// COMPONENTS
import { Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from "@mui/material"
import { ThemedBackground } from "@/components/backgrounds";
import { Title, Heading, TextSection } from '@/components/typography'
import { GameButton } from "@/components";

// ICONS
import { faGear } from '@fortawesome/free-solid-svg-icons';


// DATA
import { rulesSection, suggestedUseSection, thanksSection } from "@/data/connectFourGameData";

// TYPES
import { AlignEnum } from '@/@types'
import { ViewEnum, QuestionTypesEnum, TimeLimitTypesEnum } from "./connectFourTypes";


// import { ConnectFourContextProvider } from "./ConnectFourContext";
// import ConnectFourController from './ConnectFourController';

export default function ConnectFourGamePage() {
  const [view, setView] = useState(ViewEnum.welcome) 

  const [questionTypes, setQuestionTypes] = useState([QuestionTypesEnum.addTwoSingleDigitNumbers]) 
  const [timeLimitType, setTimeLimitType] = useState(TimeLimitTypesEnum.noTimeLimit)

  const [moveList, setMoveList] = useState([])  // The ids of the cells claimed in order with -1 indicating skipped turns


  return (
    <>
      {
        view === ViewEnum.welcome ? <ConnectFourWelcome setView={setView} /> :
        view === ViewEnum.settings ? <ConnectFourSettings questionTypes={questionTypes} setQuestionTypes={setQuestionTypes} timeLimitType={timeLimitType} setTimeLimitType={setTimeLimitType} /> : 
        <ConnectFourGame />
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
  const { questionTypes, setQuestionTypes, timeLimitType, setTimeLimitType } = props

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
      <List sx={{ border: "solid blue 1px" }}>
        {questionTypesArray.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              disablePadding
            >
              <ListItemButton role={undefined} onClick={toggleQuestionType(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={questionTypes.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Heading text="Time Limits" align={AlignEnum.left} />
      <List sx={{ border: "solid blue 1px" }}>
        {timeLimitTypesArray.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              disablePadding
            >
              <ListItemButton role={undefined} onClick={() => setTimeLimitType(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={timeLimitTypes.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

    </Container>
  )
}

function ConnectFourGame() {
  return (
    <ThemedBackground>
      <Title text="Connect Four Root" />
    </ThemedBackground>
  )
}