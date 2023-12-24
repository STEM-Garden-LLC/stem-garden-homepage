import { useContext } from 'react'

// TYPES
import { TypographyProps, FontWeightEnum } from '../../@types/TypographyProps';

// MUI
import { Typography } from '@mui/material';

import { ColorThemeContext } from "../../context/ColorThemeContext";

export default function Subtitle(props: TypographyProps) {
  const { text, textColor, align, fontWeight = FontWeightEnum.normal, gutterBottom } = props
  const { colorTheme } = useContext(ColorThemeContext)

  const padding = (gutterBottom) ? "0 0 0.5rem" : "0"
  const color = textColor ? textColor : (colorTheme === "dark") ? "white" : "black"

  const fontSizes = {
    xs: '1.4rem',
    sm: '1.6rem',
    md: '1.9rem',
    lg: '2.2rem'
  }

  const lineHeights = {
    xs: '1.8rem',
    sm: '2.0rem',
    md: '2.3rem',
    lg: '2.8rem'
  }

  return (
    <Typography 
      children={text}
      color={color}
      p={padding}
      sx={{
        textAlign: align,
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
  )
}
