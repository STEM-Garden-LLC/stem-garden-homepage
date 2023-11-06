import { useContext } from 'react'
import { Typography } from '@mui/material';

import { AppContext } from "../../context/AppContext";

export default function ButtonLabel(props: TypographyProps) {
  const { text, textColor, align } = props
  const { colorTheme } = useContext(AppContext)
  
  const color = textColor ? textColor : (colorTheme === "dark") ? "white" : "black"

  return (
    <Typography 
      noWrap
      children={text}
      color={color}
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
  )
}
