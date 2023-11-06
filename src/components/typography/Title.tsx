import { useContext } from 'react'
import { Typography } from '@mui/material';

import { AppContext } from "../../context/AppContext";

export default function Title(props: TypographyProps) {
  const { text, textColor, gutterBottom } = props
  const { colorTheme } = useContext(AppContext)

  const padding = (gutterBottom) ? "0 0 1.5rem" : "0"
  const color = textColor ? textColor : (colorTheme === "dark") ? "white" : "black"
  const shadow = (textColor === "white") ? '0.15rem 0.15rem 0.3rem black' : 'none'

  return (
    <Typography 
      color={color}
      align="center" 
      sx={{
        padding: padding, 
        textShadow: shadow,
        fontWeight: 200,
        fontSize: '2.4rem',
        lineHeight: '3.0rem',
        '@media (min-width: 450px)': {
          fontSize: '3.8rem',
          lineHeight: '4.3rem',
        },
        '@media (min-width: 600px)': {
          fontSize: '4.0rem',
          lineHeight: '4.5rem',
        },
        '@media (min-width: 900px)': {
          fontSize: '4.5rem',
          lineHeight: '4.8rem', 
        },
      }}
    >
      { text }
    </Typography>
  )
}