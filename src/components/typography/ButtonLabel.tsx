// CONTEXT
import { useContext } from 'react'
import { AppContext } from "../../context/AppContext";

// TYPES
import { TypographyProps } from '../../@types/TypographyProps';

// MUI
import { Box, Typography } from '@mui/material';

// Font Awesome
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

// interface ButtonLabelProps extends TypographyProps {
//   iconSize?: string;
//   startIcon?: IconDefinition;
//   endIcon?: IconDefinition;
// }
interface ButtonLabelProps extends TypographyProps {
  iconSize?: SizeProp;
  iconPadding?: number;
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
}

export default function ButtonLabel(props: ButtonLabelProps) {
  const { 
    text, 
    startIcon,
    endIcon,
    iconSize = 'lg',
    iconPadding = 2,
    align = 'center' 
  } = props

  const { colorTheme } = useContext(AppContext)

  const textColor = (colorTheme === "dark") ? "white" : "black"
  // const iconSize = 'lg'

  
  return (
    <>
      {
        startIcon ? (
          <Box paddingX={iconPadding} >
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
          '@media (min-width: 450px)': {
            fontSize: '1.3rem',
            lineHeight: '2.0rem',
          },
          '@media (min-width: 600px)': {
            fontSize: '1.4rem',
            lineHeight: '2.1rem',
          },
          '@media (min-width: 900px)': {
            fontSize: '1.5rem',
            lineHeight: '2.2rem',
          },
        }}
      />
      {
        endIcon ? (
          <Box paddingX={iconPadding} >
            <FontAwesomeIcon icon={endIcon} color={textColor} size={iconSize} />
          </Box>
        ) : (
          <></>
        )
      }
    </>


  )
}
