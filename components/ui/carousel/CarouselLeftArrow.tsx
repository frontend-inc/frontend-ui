import React from 'react'
import { IconButton } from '@mui/material'
import { Icon } from '../..'


const CarouselLeftArrow: React.FC = (props) => {

  return(
    <IconButton 
      { ...props }
      sx={sx.root}
    >
      <Icon name="ChevronLeft" />
    </IconButton>
  )
}

export default CarouselLeftArrow 

const sx = {
  root: {
    position: 'absolute',
    left: 0,
    top: 20,
    transform: 'translateY(-50%)',
    bgcolor: 'secondary.main',
    '&:hover': {
      bgcolor: 'secondary.dark',
    },
  },
}