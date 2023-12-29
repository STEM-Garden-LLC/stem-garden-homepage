
// COMPONENTS
import { Box, Typography } from '@mui/material';
import { Heading } from '@components/typography'

// HELPERS
import { playModeIsHumanVsHuman, playModeIsHumanVsBot } from '../helpers/magicSquareHelpers';

// TYPES 
import { FifteenGameColorsEnum, PlayModeEnum, PlayersEnum } from '../helpers/magicSquareTypes';

type WinLossDrawDisplayProps = {
  playMode: PlayModeEnum;
  winLossDrawRecord: number[];
  humanVsHuman: boolean;
}

export default function WinLossDrawDisplay(props: WinLossDrawDisplayProps) {
  const { 
    playMode,
    winLossDrawRecord,
    humanVsHuman
  } = props

  
  
  if (playModeIsHumanVsHuman(playMode)) {
    return (
      <>
        <OutcomeRow 
          label={PlayersEnum.playerOne}
          score={winLossDrawRecord[0]} 
          humanVsHuman 
        />
        <OutcomeRow 
          label={PlayersEnum.playerTwo}
          score={winLossDrawRecord[1]} 
          humanVsHuman 
        />
        <OutcomeRow 
          label="Draw"
          score={winLossDrawRecord[2]} 
          humanVsHuman 
        />
      </>
    )
  }
  else if (playModeIsHumanVsBot(playMode)) {
    return (
      <>
        <OutcomeRow 
          label="Human"
          score={winLossDrawRecord[0]} />
        <OutcomeRow 
          label="Bot"
          score={winLossDrawRecord[1]} />
        <OutcomeRow 
          label="Draw"
          score={winLossDrawRecord[2]} />
      </>
    )
  }
}
  
type OutcomeRowProps =  {
  label: PlayersEnum | string,
  score: number, 
  humanVsHuman?: boolean
}

function OutcomeRow(props: OutcomeRowProps) {
  const { label, score } = props
  
  const tileColor = 
    label === GameOutcomesEnum.playerOneWins ? 
    FifteenGameColorsEnum.playerOne : 
    outcome === GameOutcomesEnum.playerTwoWins ?
    FifteenGameColorsEnum.playerTwo : 

  
  console.log(`Player: ${player}`)
  console.log(`Label: ${label}`)
  
  return (
    <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' >
      <Box 
        width='1.2rem'
        height='1.2rem'
        borderRadius='15%'
        margin='0 .5rem 0 0'
        backgroundColor={tileColor}
      />
      <Heading text={label} />
      <Typography align='right' variant='h5' marginLeft='auto' children={score} />
        
    </Box>
  )
} 
