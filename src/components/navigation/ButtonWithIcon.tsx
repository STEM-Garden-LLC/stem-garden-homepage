// MUI
import { Box, Button } from '@mui/material';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


// CUSTOM COMPONENTS
import { ButtonLabel } from '../typography';
import PictureRow from '../components/PictureRow';
// import WhatWeGrowSection from './WhatWeGrowSection';
// import { Footer, ScrollToTopButton } from '../../components/navigation';



type ButtonWithIconProps = {
  text: string;
  textColor: string;
  href: string;
  fontFamily?: string;
  align?: string;
  // startIcon?: IconProps;
  // endIcon?: IconProps;
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
  // iconSize?: string;
}

export default function ButtonWithIcon(props: ButtonWithIconProps) {
  const { 
    text,
    textColor, 
    href,
    fontFamily = 'roboto', 
    align = 'center',
    startIcon,
    endIcon, 
  } = props

  const iconSize = 'lg'
  const iconBgColor = "darkGrey" 


  return (
    <Button 
      href={href} 
      variant="outlined"
      sx={{ 
        color: "white", 
        border: "solid white 1px", 
        marginY: 1,  
        padding: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'

      }} 
    >
      {
        startIcon ? (
          <Box paddingX={2} >
            <FontAwesomeIcon icon={startIcon} color={textColor} size={iconSize} />
          </Box>
        ) : (
          <></>
        )
      }
      <ButtonLabel text={text} textColor={textColor} />
      {
        endIcon ? (
          <Box paddingX={2} >
            <FontAwesomeIcon icon={endIcon} color={textColor} size={iconSize} />
          </Box>
        ) : (
          <></>
        )
      }
    </Button>
  )
}


// <Button 
          //   href="contact-us" 
          //   variant="outlined"
          //   sx={{ color: "white", border: "solid white 1px", margin: 1  }} 
          //   children={
          //     <ButtonLabel 
          //       text="Contact Us" 
          //       endIcon={faArrowCircleRight} 
          //     />
          //   } 
          // />