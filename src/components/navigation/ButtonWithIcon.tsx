// MUI
import { Button } from '@mui/material';

// Font Awesome
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'


// CUSTOM COMPONENTS
import { ButtonLabel } from '../typography';
import { useContext } from 'react';
import { ColorThemeContext } from '../../context/ColorThemeContext';

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
  const { text, href, startIcon, endIcon } = props
  const { colorTheme } = useContext(ColorThemeContext)

  const textColor = colorTheme === 'light' ? 'darkGrey' : 'white'

  return (
    <Button 
      href={href} 
      variant="outlined"
      sx={{ 
        color: textColor, 
        border: `solid ${textColor} 1px`, 
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
