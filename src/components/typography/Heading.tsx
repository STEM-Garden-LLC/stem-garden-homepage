import { useContext } from 'react'
import { Typography } from '@mui/material';

import { AppContext } from "../../context/AppContext";

export default function Heading(props: TypographyProps) {
  const { text, textColor, align, gutterBottom } = props
  const { colorTheme } = useContext(AppContext)

  const padding = (gutterBottom) ? "0 0 0.4rem" : "0"
  const color = textColor ? textColor : (colorTheme === "dark") ? "white" : "black"

  return (
    <Typography 
      noWrap
      children={text}
      color={color}
      align={align} 
      p={padding}
      sx={{
        fontWeight: 200,
        fontSize: '1.1rem',
        lineHeight: '1.6rem',
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
  )
}
