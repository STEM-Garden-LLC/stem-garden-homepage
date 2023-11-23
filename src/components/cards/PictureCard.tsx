/// <reference path='../@types/TypographyProps.ts'

import { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext';

// import { TextColorEnum } from '../@types/TypographyProps.ts';
import { PictureCardProps } from '../../@types/Cards'

// MUI
import { Box, Card, CardMedia } from '@mui/material';
import Carousel from 'react-material-ui-carousel'


// Router
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


// CUSTOM COMPONENTS
import { Heading } from '../../components/typography';

export default function PictureCard(props:PictureCardProps) {
  const { title, linkTo, linkType = 'RouterLink', imgUrl, cardWidth, cardHeight } = props
  
  const content = (
    <Box width={cardWidth} height='100%' padding={1} >
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
          image={imgUrl}
          alt={title}
          sx={{ 
            position: 'absolute', 
            top: 0,
            zIndex: 10
          }}
        />
        <Box 
          sx={{ 
            background: 'linear-gradient(0deg, rgba(32,32,32,1) 85%, rgba(32,32,32,0.5) 94%, rgba(32,32,32,0.1) 100%)',
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
          <Heading text={title} textColor="white" />
        </Box>
      </Card>
    </Box>
  )

  return (
    <>
      {linkType == 'RouterLink' ? 
        <RouterLink to={linkTo} children={content} /> : 
        <HashLink smooth to={linkTo} children={content} /> }
    </>
  )
}

