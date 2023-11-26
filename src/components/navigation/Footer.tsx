// MUI
import { 
    Box, 
    Container,
    Typography,
    Button,
} from "@mui/material"

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

  return (
    <Box
      sx={{
        position: "static",
        width: '100vw',
        height: '8rem',
        paddingTop: '2rem',
        backgroundColor: "primary.main", 
        color: "white",
      }}
    >
      <Container
        maxWidth='md' 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}    
      >
        <Typography>
          &copy; 2023 The STEM Garden LLC
        </Typography>
        <Box display='flex' paddingTop='1rem' >
          <Button
            children='Contact'
            variant='outlined'
            href='contact'
            sx={{ 
              height: '2rem', 
              color: 'white', 
              border: 'solid white 1px',
              marginRight: '1rem'
            }}
          />
          <a href="https://www.instagram.com/nola_stem_garden/" >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <Box paddingRight='1rem' />
          <a href="https://www.linkedin.com/company/the-stem-garden-llc/" >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
        </Box>
    </Container>
    </Box>
  )
}


