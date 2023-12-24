
// CONTEXT
import { useContext } from 'react'
import { ColorThemeContext } from "../../context/ColorThemeContext";

// TYPES
import { ColorsEnum } from '../../@types/Colors';
import { TypographyProps, FontWeightEnum } from '../../@types/TypographyProps';

// MUI
import { Typography } from '@mui/material';

export default function Subheading(props: TypographyProps) {
  const { text, textColor, align, fontWeight = FontWeightEnum.normal, textWrap = false, gutterBottom } = props
  const { colorTheme } = useContext(ColorThemeContext)

  const padding = (gutterBottom) ? "0 0 2.0rem" : "0"
  // Color can be set manually. If unset light/dark mode default is used.
  const color = textColor ? textColor : (colorTheme === "dark") ? ColorsEnum.white : ColorsEnum.black
  const shadow = (color === ColorsEnum.white) ? '0.15rem 0.15rem 0.3rem black' : 'none'


  const fontSizes = {
    xs: '1.05rem',
    sm: '1.15rem',
    md: '1.2rem',
    lg: '1.3rem'
  }

  const lineHeights = {
    xs: '1.35rem',
    sm: '1.6rem',
    md: '1.8rem',
    lg: '2.1rem'
  }

  return (
    <Typography 
      // noWrap={}
      noWrap={!textWrap}
      children={text}
      color={color}
      align={align} 
      p={padding}
      sx={{
        textShadow: shadow,
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
