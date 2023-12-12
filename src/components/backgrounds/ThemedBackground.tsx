import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

// MUI
import { Box, Container } from '@mui/material';

export default function ThemedBackground(props: any) {
  const { children } = props
  const { colorTheme } = useContext(AppContext)

  const bgColor = colorTheme === 'dark' ? '#222' : '#FFF'
  
  return (
    <Box sx={{ width: '100vw', backgroundColor: bgColor }} >
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
