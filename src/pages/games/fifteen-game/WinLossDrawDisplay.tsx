
// COMPONENTS
import { Box } from '@mui/material';
import { Heading } from '@components/typography'

// HELPERS
import { playModeIsHumanVsHuman, playModeIsHumanVsBot } from './fifteenGameHelpers';

// TYPES 
import { FifteenGameColorsEnum, PlayModeEnum, PlayersEnum, OutcomesEnum } from './fifteenGameTypes';
import { CenteredFlexBox } from '@/components';

type WinLossDrawDisplayProps = {
  playMode: PlayModeEnum;
  winLossDrawRecord: number[];
}

export default function WinLossDrawDisplay(props: WinLossDrawDisplayProps) {
  const { 
    playMode,
    winLossDrawRecord,
  } = props

  
  
  if (playModeIsHumanVsHuman(playMode)) {
    return (
      <CenteredFlexBox column >
        <OutcomeRow 
          label={PlayersEnum.playerOne}
          score={winLossDrawRecord[0]} 
          tileColor={FifteenGameColorsEnum.playerOne}
        />
        <OutcomeRow 
          label={PlayersEnum.playerTwo}
          score={winLossDrawRecord[1]} 
          tileColor={FifteenGameColorsEnum.playerTwo}
        />
        <OutcomeRow 
          label="Draw"
          score={winLossDrawRecord[2]} 
          tileColor={FifteenGameColorsEnum.transparent}
        />
      </CenteredFlexBox>
    )
  }
  else if (playModeIsHumanVsBot(playMode)) {
    return (
      <CenteredFlexBox column >
        <OutcomeRow 
          label="Human"
          tileColor={FifteenGameColorsEnum.playerOne}
          score={winLossDrawRecord[0]} />
        <OutcomeRow 
          label="Bot"
          tileColor={FifteenGameColorsEnum.playerTwo}
          score={winLossDrawRecord[1]} />
        <OutcomeRow 
          label="Draw"
          tileColor={FifteenGameColorsEnum.transparent}
          score={winLossDrawRecord[2]} />
      </CenteredFlexBox>
    )
  }
}
  
type OutcomeRowProps =  {
  label: OutcomesEnum | string,
  tileColor: FifteenGameColorsEnum,
  score: number, 
}

function OutcomeRow(props: OutcomeRowProps) {
  const { label, tileColor, score } = props
  
  return (
    <Box display='flex' justifyContent='space-between' width='100%' >
      <CenteredFlexBox paddingRight='3rem' >
        <Box 
          width='1.2rem'
          height='1.2rem'
          borderRadius='15%'
          margin='0 .5rem 0 0'
          bgcolor={tileColor}
        />
        <Heading text={`${label}: `} />
      </CenteredFlexBox>
      <Heading text={`${score}`} />
    </Box>
  )
} 
