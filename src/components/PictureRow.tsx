import React from 'react'
import { Box } from '@mui/material';

type PictureRowProps = {
    imgUrls: string[];
    roundedCorners?: boolean
}

export default function PictureRow(props: PictureRowProps) {
  const { imgUrls, roundedCorners = true } = props
  
  const sideLengthPercent = `${Math.floor(100 / imgUrls.length) - 2}%`
  const borderRadius = (roundedCorners) ? '5%' : 0

  return (
    <Box
      display='flex' 
      flexDirection='row' 
      justifyContent='space-between' 
      maxWidth='700px'
      margin='0.7rem auto'
    >
      {
        imgUrls.map((url, index) => {
          return (
            <SquareImage 
              key={index}
              imgUrl={url}  
              sideLengthPercent={sideLengthPercent}
              borderRadius={borderRadius}
            />
          )
        })
      }
    </Box>
  )
}

type SquareImageProps = {
    imgUrl: string;
    sideLengthPercent: string;
    borderRadius: string | number;
}

function SquareImage(props: SquareImageProps) {
  const { imgUrl, sideLengthPercent, borderRadius } = props


  const imageStyles = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderRadius: borderRadius
  }  

  return (
    <Box 
      width={sideLengthPercent} 
      paddingTop={sideLengthPercent}
      position='relative'
    >
      <Box 
        position='absolute'
        top='0'
        width='100%'
        padding='4px'
        height='100%'
        boxSizing='border-box'
      >
          <Box 
            sx={imageStyles}
         />
      </Box>
    </Box>
  )
}