import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { ColorThemeContext } from '../../context/ColorThemeContext';

// MUI
import { Box, Container } from '@mui/material';

export default function ThemedBackground(props: any) {
  const { children } = props
  const { navbarHeightPx } = useContext(AppContext)
  const { colorTheme } = useContext(ColorThemeContext)

  const bgColor = colorTheme === 'dark' ? '#222' : '#FFF'
  
  return (
    <Box 
      sx={{ 
        width: '100vw', 
        minHeight: '100vh',
        paddingTop: `${navbarHeightPx + 48}px`,
        backgroundColor: bgColor 
      }} 
    >
      <Container
        maxWidth='md' 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}    
      >     
        {children}
      </Container>
    </Box>
  )
}
