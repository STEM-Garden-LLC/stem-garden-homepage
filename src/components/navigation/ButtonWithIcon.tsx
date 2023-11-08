// MUI
import { Box, Button } from '@mui/material';

// Font Awesome
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'


// CUSTOM COMPONENTS
import { ButtonLabel } from '../typography';

type ButtonWithIconProps = {
  text: string;
  href: string;
  textColor?: string;
  fontFamily?: string;
  align?: string;
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
  // iconSize?: string;
}

export default function ButtonWithIcon(props: ButtonWithIconProps) {
  const { 
    text,
    href,
    startIcon,
    endIcon, 
  } = props


  return (
    <Button 
      href={href} 
      variant="outlined"
      sx={{ 
        color: "white", 
        border: "solid white 1px", 
        maxWidth: '400px',  
        marginX: 'auto',  
        marginY: 2,  
        padding: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'

      }} 
    >
      <ButtonLabel 
        text={text} 
        startIcon={startIcon}
        endIcon={endIcon} 
      />
    </Button>
  )
}
