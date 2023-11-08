import { useContext } from 'react'
import { AppContext } from "../../context/AppContext";

import { Box, Typography } from '@mui/material';

// Font Awesome
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TypographyProps } from '../../@types/TypographyProps';

interface ButtonLabelProps extends TypographyProps {
  iconSize?: string;
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
}

export default function ButtonLabel(props: ButtonLabelProps) {
  const { 
    text, 
    startIcon,
    endIcon,
    align = 'center' 
  } = props

  const { colorTheme } = useContext(AppContext)

  const textColor = (colorTheme === "dark") ? "white" : "black"
  const iconSize = 'lg'

  
  return (
    <>
      {
        startIcon ? (
          <Box paddingX={2} >
            <FontAwesomeIcon icon={startIcon} color={textColor} size={iconSize} />
          </Box>
        ) : (
          <></>
        )
      }
      <Typography 
        noWrap
        children={text}
        color={textColor}
        align={align} 
        sx={{
          fontWeight: 700,
          fontSize: '1.2rem',
          lineHeight: '1.8rem',
          '@media (min-width: 600px)': {
            fontSize: '1.7rem',
          lineHeight: '2.1rem',
          },
          '@media (min-width: 900px)': {
            fontSize: '1.5rem',
          lineHeight: '1.8rem',
          },
        }}
      />
      {
        endIcon ? (
          <Box paddingX={2} >
            <FontAwesomeIcon icon={endIcon} color={textColor} size={iconSize} />
          </Box>
        ) : (
          <></>
        )
      }
    </>



    
  )
}
