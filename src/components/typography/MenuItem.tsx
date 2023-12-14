import { useContext } from 'react'

// TYPES
import { TypographyProps} from '../../@types/TypographyProps';

// MUI
import { Typography } from '@mui/material';

import { ColorThemeContext } from "../../context/ColorThemeContext";

export default function MenuItem(props: TypographyProps) {
  const { text, textColor, align, gutterBottom } = props
  const { colorTheme } = useContext(ColorThemeContext)

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
      }}
    />
  )
}
