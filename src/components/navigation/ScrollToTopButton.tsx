// CONTEXT
import { useContext } from 'react'
import { AppContext } from "../../context/AppContext";
import { ColorThemeContext } from "../../context/ColorThemeContext";

// TYPES
import { TextColorEnum } from "../../@types/TypographyProps";
import { ColorThemeEnum } from "../../@types/ColorTheme";


import { HashLink } from 'react-router-hash-link';
import { Box, Fade, Tooltip } from '@mui/material';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

import { useScrollPosition } from "../../hooks";
import { ButtonLabel } from "../typography";


export default function ScrollToTopButton() {
  const scrollPosition = useScrollPosition()
  const { containerWidth } = useContext(AppContext)
  const { colorTheme } = useContext(ColorThemeContext)
  const bgcolor = colorTheme === ColorThemeEnum.light ? TextColorEnum.white : TextColorEnum.black

  const iconSize = containerWidth < 450 ? 'xl' : 
    containerWidth < 600 ? '2x' :
    containerWidth < 900 ? '3x' : '3x'

  return (
    <Fade in={(scrollPosition > 500)} >
      <Box 
        display="flex"
        position='fixed' 
        bottom='1.0rem' 
        right='1.0rem' 
        flexDirection='row' 
        justifyContent='start' 
        alignItems='center' 
        zIndex={9000}
        bgcolor={bgcolor}
        borderRadius="50%"
      >
        <Tooltip title="Scroll to top" arrow>
          <HashLink smooth to="#top">
            <ButtonLabel text="" iconPadding={0} startIcon={faArrowCircleUp} iconSize={iconSize} />
          </HashLink>
        </Tooltip>      
      </Box>
    </Fade>
    
  )
}