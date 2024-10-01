import React from 'react'
import { IconButton } from '@mui/material'
import { Icon } from '../..'

const CarouselLeftArrow: React.FC = (props) => {
	return (
		<IconButton {...props} sx={sx.root}>
			<Icon name="ChevronLeft" color='text.primary' />
		</IconButton>
	)
}

export default CarouselLeftArrow

const sx = {
	root: {
		position: 'absolute',
		left: 20,
    top: '28%',  
    height: {
      sm: 48,
      xs: 32
    },
    width: {
      sm: 48,
      xs: 32
    },
    boxShadow: 4,
    opacity: 0.8,    
		bgcolor: 'background.paper',
		'&:hover': {
      opacity: 0.9,
      bgcolor: 'background.paper',
		},
	},
}
