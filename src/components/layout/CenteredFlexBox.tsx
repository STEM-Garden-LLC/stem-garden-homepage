
import { Box } from '@mui/material';

export default function CenteredFlexBox(props: any) {
  const { border, height, width, maxHeight, maxWidth, column, ...other } = props
  
  return (
    <Box 
      border={border ? 'solid green 1px' : 'none'}
      display='flex'
      flexDirection={column ? 'column' : 'row'}
      alignItems='center'
      justifyContent='center'
      height={height} 
      width={width} 
      maxHeight={maxHeight} 
      maxWidth={maxWidth} 
      {...other}
    >
      
    </Box>
  )
}
