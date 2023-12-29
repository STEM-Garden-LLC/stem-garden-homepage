import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { ColorThemeContext } from '../../context/ColorThemeContext';

// MUI
import { Box, Container } from '@mui/material';

// TYPES
import { ColorsEnum } from '../../@types/Colors';
import { ColorThemeEnum } from '../../@types/ColorTheme';

export default function ThemedBackground(props: any) {
  const { children, redBorder } = props
  const { navbarHeightPx } = useContext(AppContext)
  const { colorTheme } = useContext(ColorThemeContext)

  const bgColor = colorTheme === ColorThemeEnum.dark ? ColorsEnum.darkGrey : ColorsEnum.offWhite
  
  const border = redBorder ? 'solid red 1px' : 'none'

  return (
    <Box 
      sx={{ 
        width: '100vw', 
        minHeight: '100vh',
        paddingTop: `${navbarHeightPx}px`,
        backgroundColor: bgColor 
      }} 
    >
      <Container
        maxWidth='md' 
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          border: border
        }}    
      >     
        {children}
      </Container>
    </Box>
  )
}
