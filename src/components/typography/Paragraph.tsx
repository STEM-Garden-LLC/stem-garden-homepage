import { useContext } from 'react'
import { Typography } from '@mui/material';

import { ColorThemeContext } from "../../context/ColorThemeContext";

// TYPES
import { TypographyProps, TextColorEnum } from '../../@types/TypographyProps';


export default function Paragraph(props: TypographyProps) {
  const { text, textColor } = props
  const { colorTheme } = useContext(ColorThemeContext)

  // const color = textColor ? textColor : (colorTheme === "dark") ? "white" : "black"
  const color = textColor ? textColor : (colorTheme === "dark") ? TextColorEnum.white : TextColorEnum.black


  return (
    <Typography 
      children={text}
      color={color}
      p="0.7rem 0"
      align='left'
      sx={{
        fontWeight: 200,
        fontSize: '0.95rem',
        lineHeight: '1.2rem',
        '@media (min-width: 600px)': {
          fontSize: '1.1rem',
          lineHeight: '1.3rem',
        },
        '@media (min-width: 900px)': {
          fontSize: '1.2rem',
          lineHeight: '1.4rem',
        },
      }}
    />
  )
}
