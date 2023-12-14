// CONTEXT
import { useContext } from 'react'
import { ColorThemeContext } from "../../context/ColorThemeContext";

// TYPES
import { TextColorEnum, TypographyProps } from '../../@types/TypographyProps';

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
    textColor,
    startIcon,
    endIcon,
    iconSize = 'lg',
    iconPadding = 2,
    align = 'center',
    fontWeight = 'bold'
  } = props

  const { colorTheme } = useContext(ColorThemeContext)

  const color = textColor ? textColor : (colorTheme === "dark") ? TextColorEnum.white : TextColorEnum.black


  const fontSizes = {
    xs: '1.2rem',
    sm: '1.3rem',
    md: '1.4rem',
    lg: '1.5rem'
  }

  const lineHeights = {
    xs: '1.8rem',
    sm: '2.0rem',
    md: '2.1rem',
    lg: '2.2rem'
  }
  
  return (
    <>
      {
        startIcon ? (
          <Box paddingX={iconPadding} >
            <FontAwesomeIcon icon={startIcon} color={color} size={iconSize} />
          </Box>
        ) : (
          <></>
        )
      }
      <Typography 
        noWrap
        children={text}
        color={color}
        align={align} 
        sx={{
          fontWeight: fontWeight,
          fontSize: fontSizes.xs,
          lineHeight: lineHeights.xs,
          '@media (min-width: 450px)': {
            fontSize: fontSizes.sm,
            lineHeight: lineHeights.sm,
          },
          '@media (min-width: 600px)': {
            fontSize: fontSizes.md,
            lineHeight: lineHeights.md,
          },
          '@media (min-width: 900px)': {
            fontSize: fontSizes.lg,
            lineHeight: lineHeights.lg, 
          },
        }}
      />
      {
        endIcon ? (
          <Box paddingX={iconPadding} >
            <FontAwesomeIcon icon={endIcon} color={color} size={iconSize} />
          </Box>
        ) : (
          <></>
        )
      }
    </>


  )
}
