import { useState, useEffect, createContext, useContext } from "react";

// COMPONENTS
import { Box, Container } from "@mui/material"
import { ThemedBackground } from "@/components/backgrounds";
import { Title, TextSection } from '@/components/typography'
import { GameButton } from "@/components";
import { ViewEnum } from "./connectFourTypes";

// ICONS
import { faGear } from '@fortawesome/free-solid-svg-icons';


// DATA
import { rulesSection, suggestedUseSection, thanksSection } from "@/data/connectFourGameData";


// import { ConnectFourContextProvider } from "./ConnectFourContext";
// import ConnectFourController from './ConnectFourController';

export default function ConnectFourRoot() {
  const [view, setView] = useState(ViewEnum.welcome) 


  const [moveList, setMoveList] = useState([])  // The ids of the cells claimed in order with -1 indicating skipped turns


  return (
    <ThemedBackground border >
      {
        view === ViewEnum.welcome ? <ConnectFourWelcome /> :
        view === ViewEnum.settings ? <ConnectFourSettings /> : <ConnectFourGame />
      }
    </ThemedBackground>
  )
}


function ConnectFourWelcome() {
  return (
    <Container>
      <Title text="Math Fact" gutterTop />
      <Title text="Connect Four" gutterBottom />

      <GameButton 
        label="Choose Game Settings"  
        icon={faGear}
      />
      
      <TextSection data={rulesSection.data} />
      <TextSection data={suggestedUseSection.data} />
      <TextSection data={thanksSection.data} />


      
    </Container>
  )
}

function ConnectFourSettings() {
  return (
    <Container>
      <Title text="Choose Game Settings" />
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