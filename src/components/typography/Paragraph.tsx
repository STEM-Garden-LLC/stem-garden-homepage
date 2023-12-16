import { useContext } from 'react'
import { Typography } from '@mui/material';

import { ColorThemeContext } from "../../context/ColorThemeContext";

// TYPES
import { ColorsEnum } from '../../@types/Colors';
import { TypographyProps } from '../../@types/TypographyProps';

export default function Paragraph(props: TypographyProps) {
  const { text, textColor, align = 'left' } = props
  const { colorTheme } = useContext(ColorThemeContext)

  // const color = textColor ? textColor : (colorTheme === "dark") ? "white" : "black"
  const color = textColor ? textColor : (colorTheme === "dark") ? ColorsEnum.white : ColorsEnum.black


  return (
    <Typography 
      children={text}
      color={color}
      padding="0.3rem 0rem"
      align={align}
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
