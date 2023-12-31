import { useContext } from 'react'
import { ColorThemeContext } from '../../context/ColorThemeContext';

// MUI
import { Box, Card, CardMedia } from '@mui/material';

// Router
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// TYPES
import { ColorsEnum } from '../../@types/Colors';
import { PictureCardProps } from '../../@types/Cards'
import { LinkTypeEnum } from '../../@types/Links'

// COMPONENTS
import { Heading } from '../../components/typography';

// HELPERS
import toTitleCase from '../../helpers/toTitleCase';

export default function PictureCard(props:PictureCardProps) {
  const { colorTheme } = useContext(ColorThemeContext)

  const { 
    title, 
    imageUrl, 
    cardWidth, 
    cardHeight,
    textColor = ColorsEnum.white,
    bgColor,
    linkTo = "", 
    linkType = LinkTypeEnum.RouterLink,  
  } = props
  
  // const color = textColor ? textColor : (colorTheme === "dark") ? ColorsEnum.white : ColorsEnum.black
  const bgColorRGB = bgColor ? bgColor :
    colorTheme === 'dark' ? '40,40,40' : '212,212,212'
  
  const content = (
    <Box width={cardWidth} height={cardHeight} >
      <Card raised 
        sx={{ 
          height: '100%',
          width: '100%',
          bgcolor: 'darkGrey',
          position: 'relative',
          borderRadius: '1rem',
        }}
      >
        <CardMedia
          component='img'
          image={imageUrl}
          alt={title}
          sx={{ 
            position: 'absolute', 
            top: 0,
            zIndex: 10
          }}
        />
        <Box 
          sx={{ 
            background: `linear-gradient(0deg, rgba(${bgColorRGB},1) 85%, rgba(${bgColorRGB},0.5) 94%, rgba(${bgColorRGB},0.1) 100%)`,
            position: 'absolute',
            bottom: 0,
            zIndex: 20,
            width: '100%',
            height: '23%',
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Heading text={toTitleCase(title)} textColor={textColor} />
        </Box>
      </Card>
    </Box>
  )

  return (
    <>
      {linkType === 'NotALink' ? <Box >{content}</Box> : 
        linkType === 'RouterLink' ? <RouterLink to={linkTo} children={content} /> : 
        <HashLink smooth to={linkTo} children={content} /> }
    </>
  )
}

