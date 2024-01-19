import { useContext } from 'react'
import { Typography } from '@mui/material';

import { ColorThemeContext } from "../../context/ColorThemeContext";

// TYPES
import { ColorsEnum } from '../../@types/Colors';
import { TypographyProps } from '../../@types/TypographyProps';

export default function Paragraph(props: TypographyProps) {
  const { text, textColor, align = 'left', gutterBottom } = props
  const { colorTheme } = useContext(ColorThemeContext)

  // const color = textColor ? textColor : (colorTheme === "dark") ? "white" : "black"
  const color = textColor ? textColor : (colorTheme === "dark") ? ColorsEnum.white : ColorsEnum.black

  const padding = (gutterBottom) ? "0.3rem 0 1.0rem" : "0.3rem 0 0"

  const fontSizes = {
    xs: '0.95rem',
    sm: '1.0rem',
    md: '1.1rem',
    lg: '1.1rem'
  }

  const lineHeights = {
    xs: '1.1rem',
    sm: '1.2rem',
    md: '1.3rem',
    lg: '1.4rem'
  }

  return (
    <Typography 
      children={text}
      color={color}
      padding={padding}
      align={align}
      sx={{
        fontWeight: 200,
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
