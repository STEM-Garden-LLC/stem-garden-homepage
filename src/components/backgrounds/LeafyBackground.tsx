import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';


// MUI
import { Box, Container } from '@mui/material';

// ASSETS
import { 
  leafy_background, 
} from '../../assets/landing'

export default function LeafyTopSection(props: any) {
  const { children } = props
  const { narrowScreen, navbarHeightPx } = useContext(AppContext)

  const gradient = (narrowScreen) ?
    'linear-gradient(90deg, rgba(58,94,22,0.80) 0%, rgba(58,99,22,0.80) 100%)'
    : 'linear-gradient(90deg, rgba(58,94,22,0.30) 0%, rgba(58,94,22,0.80) 10%, rgba(58,94,22,0.80) 90%, rgba(58,99,22,0.30) 100%)'

  const leafyBackgroundStyles = {
    width: '100vw',
    minHeight: '90vh',
    paddingY: `${navbarHeightPx}px`,
    backgroundImage: `
      ${gradient},
      url(${leafy_background})
    `,
    backgroundPosition: 'center top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    position: 'relative',
    left: 0
  } 
  
  return (
    <Box sx={leafyBackgroundStyles}>
      <Container
        maxWidth='md' 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          paddingY: '3.0rem'
        }}    
      >
        {children}
      </Container>
    </Box>
  )
}

