import { Box, Button, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRotateLeft, faAnglesLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FifteenGameColorsEnum } from '@/pages/games/fifteen-game/fifteenGameTypes';
import { useContext } from 'react';
import { ColorThemeContext } from '@/context/ColorThemeContext';
import { ColorThemeEnum } from '@/@types';
import { ColorsEnum } from '@/@types/Colors';


type GameButtonProps = {
  label: string,
  icon?: IconDefinition,
  onClick?: Function,
  linkTo?: string,
  disabled?: boolean,
  selected?: boolean,
  hideLabel?: boolean,
}

export default function GameButton(props: GameButtonProps) {
  const { 
    label, 
    icon, 
    onClick = () => {}, 
    linkTo = '', 
    disabled = false, 
    selected = false,
    hideLabel = false
  } = props

  const { colorTheme } = useContext(ColorThemeContext)
  const borderColorIfSelected = (colorTheme === ColorThemeEnum.dark) ? ColorsEnum.white : ColorsEnum.lightGrey
  const border = selected ? `solid ${borderColorIfSelected} 3px` : `solid ${FifteenGameColorsEnum.transparent} 3px` 

  const display = hideLabel ? 'none' : 'block'


  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => onClick()}
      href={linkTo}
      disabled={disabled}
      sx={{ 
        border: border,
        // boxSizing: 'border-box',
        flexGrow: 2, 
        width: '100%'
      }}
    >
      {
        icon ? (
          <Box display="flex" alignContent="center" >
            <FontAwesomeIcon icon={icon} size='lg' />
          </Box>
        ) : (
          <></>
        )
      }
      <Typography children={label} variant="button" ml={1} display={display}  />
      {/* <ButtonLabel text={label} display={display}  />  Doesn't handle disabled */}
    </Button>
  )
}

// export function BotGoFirstButton(props: GameButtonProps) {
//   const { movelist, letBotGoFirst } = props
//   return (
//     <Button
//       variant="contained"
//       color="primary"
//       onClick={() => letBotGoFirst()}
//       disabled={movelist.length !== 0}
//       sx={{ flexGrow: 2, mx: 1 }}
//     >
//       <Typography children="Let" variant="button" display={{ xs: 'none', sm: 'block' }}  />
//       <Typography children="Bot Go First" variant="button" noWrap />
//     </Button>
//   )
// }

// export function DifficultyModeButton(props: GameButtonProps) {
//   const { label, selected, onClick: setDifficultyMode } = props
//   return (
//     <Button
//       children={label}
//       sx={{flexGrow: 1, border: selected ? 'solid white 3px' : 'none', marginX: 2 }}
//       variant={'contained'}
//       onClick={() => setDifficultyMode(label)}
//     />
//   )
// }

// export function HomeButton() {
//   return (
//     <Button
//       component={RouterLink}
//       to='../'
//       variant="contained"
//       color="primary"
//       sx={{ flexGrow: 1 }}
//     >
//       <Box display="flex" alignContent="center" >
//         <FontAwesomeIcon icon={faHouse} size='lg' />
//       </Box>
//       <Typography children="Home" variant="button" ml={1} display={{ xs: 'none', sm: 'block' }}  />
//     </Button>
//   )
// }


// export function NewGameButton(props: GameButtonProps) {
//   const { disabled, onClick: handleNewGameClick } = props

//   return (
//     <Button
//       onClick={() => handleNewGameClick()}
//       variant="contained"
//       color="primary"
//       // disabled={!gameOver(movelist)}
//       disabled={disabled}
//       sx={{ flexGrow: 2 }}
//     >
//       <Box mr={1} display={{ xs: 'none', sm: 'flex' }} alignContent="center" >
//         <FontAwesomeIcon icon={faRotateLeft} size='lg' />
//       </Box>
//       <Typography children="Play&nbsp;Again!" variant="button" noWrap />
//     </Button>
//   )
// }

// export function UndoMoveButton(props) {
//   const { movelist, handleUndoClick } = props

//   const disabled = (movelist.length === 0 || gameOver(movelist))
  
//   return (
//     <Button
//       variant="contained"
//       color="primary"
//       onClick={() => handleUndoClick()}
//       disabled={disabled}
//       sx={{ flexGrow: 2, mx: 1 }}
//     >
//       <Box mr={1} display="flex" alignContent="center" >
//         <FontAwesomeIcon icon={faAnglesLeft} size='lg' />
//       </Box>
//       Undo
//     </Button>
//   )
// }



 
