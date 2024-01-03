// CONTEXT
import { useContext } from 'react'
import { ColorThemeContext } from "../../context/ColorThemeContext";

// TYPES
import { TypographyProps} from '../../@types/TypographyProps';

// MUI
import { Typography } from '@mui/material';
import { ColorsEnum } from '../../@types/Colors';

interface TitleProps extends TypographyProps {
  gutterTop: boolean;
}

export default function Title(props: TitleProps) {
  const { text, textColor, gutterTop, gutterBottom } = props
  const { colorTheme } = useContext(ColorThemeContext)

  const paddingTop = (gutterTop) ? 5 : 0
  const paddingBottom = (gutterBottom) ? 5 : 0
  const color = textColor ? textColor : (colorTheme === "dark") ? "white" : "black"
  const shadow = (color === ColorsEnum.white) ? '0.15rem 0.15rem 0.3rem black' : 'none'

  return (
    <Typography 
      children={text}
      color={color}
      align="center" 
      sx={{
        paddingTop: paddingTop, 
        paddingBottom: paddingBottom, 
        textShadow: shadow,
        fontWeight: 200,
        fontSize: '2.4rem',
        lineHeight: '3.0rem',
        '@media (min-width: 450px)': {
          fontSize: '3.0rem',
          lineHeight: '3.6rem',
        },
        '@media (min-width: 600px)': {
          fontSize: '4.0rem',
          lineHeight: '4.5rem',
        },
        '@media (min-width: 900px)': {
          fontSize: '4.5rem',
          lineHeight: '5.0rem', 
        },
      }}
    />
  )
}