import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { ColorThemeContext } from '../../context/ColorThemeContext';

// MUI
import { Box, Container } from '@mui/material';

// TYPES
import { ColorsEnum } from '../../@types/Colors';
import { ColorThemeEnum } from '../../@types/ColorTheme';

export default function ThemedBackground(props: any) {
  const { children, border } = props
  const { navbarHeightPx } = useContext(AppContext)
  const { colorTheme } = useContext(ColorThemeContext)

  const bgColor = colorTheme === ColorThemeEnum.dark ? ColorsEnum.darkGrey : ColorsEnum.offWhite
  
  const redBorder = border ? 'solid red 1px' : 'none'

  return (
    <Box 
      sx={{ 
        width: '100%', // Set with % not vw 
        maxWidth: '100%', 
        minHeight: '100vh',
        paddingTop: `${navbarHeightPx}px`,
        backgroundColor: bgColor, 
        border: redBorder
      }} 
    >
      <Container
        maxWidth='md' 
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          border: redBorder
        }}    
      >     
        {children}
      </Container>
    </Box>
  )
}
