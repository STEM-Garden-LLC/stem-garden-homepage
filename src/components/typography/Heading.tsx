
// CONTEXT
import { useContext } from 'react'
import { ColorThemeContext } from "../../context/ColorThemeContext";

// TYPES
import { ColorsEnum } from '../../@types/Colors';
import { TypographyProps } from '../../@types/TypographyProps';

// MUI
import { Typography } from '@mui/material';

export default function Heading(props: TypographyProps) {
  const { text, textColor, align, fontWeight, gutterBottom } = props
  const { colorTheme } = useContext(ColorThemeContext)

  const padding = (gutterBottom) ? "0 0 0.4rem" : "0"
  // Color can be set manually. If unset light/dark mode default is used.
  const color = textColor ? textColor : (colorTheme === "dark") ? ColorsEnum.white : ColorsEnum.black

  const fontSizes = {
    xs: '1.1rem',
    sm: '1.3rem',
    md: '1.5rem',
    lg: '1.6rem'
  }

  const lineHeights = {
    xs: '1.6rem',
    sm: '2.0rem',
    md: '2.3rem',
    lg: '2.3rem'
  }

  return (
    <Typography 
      noWrap
      children={text}
      color={color}
      align={align} 
      p={padding}
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
  )
}
