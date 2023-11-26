// MUI
import { Box, Container } from '@mui/material';

export default function ThemedBackground(props: any) {
  const { children } = props
  
  return (
    <Box sx={{ width: '100vw' }} >
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
