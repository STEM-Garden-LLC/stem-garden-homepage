import { useContext } from 'react'

// TYPES
import { TypographyProps} from '../../@types/TypographyProps';

// MUI
import { Typography } from '@mui/material';

import { AppContext } from "../../context/AppContext";

export default function Subtitle(props: TypographyProps) {
  const { text, textColor, align, gutterBottom } = props
  const { colorTheme } = useContext(AppContext)

  const padding = (gutterBottom) ? "0 0 0.5rem" : "0"
  const color = textColor ? textColor : (colorTheme === "dark") ? "white" : "black"

  return (
    <Typography 
      children={text}
      color={color}
      p={padding}
      sx={{
        align: align,
        // textShadow: '0.12rem 0.12rem 0.2rem black',
        fontWeight: 400,
        fontSize: '1.4rem',
        lineHeight: '2.2rem',
        '@media (min-width: 450px)': {
          fontSize: '1.6rem',
          lineHeight: '2.0rem',
        },
        '@media (min-width: 600px)': {
          fontSize: '1.9rem',
          lineHeight: '2.3rem',
        },
        '@media (min-width: 900px)': {
          fontSize: '2.2rem',
          lineHeight: '2.8rem', 
        },
      }}
    />
  )
}
