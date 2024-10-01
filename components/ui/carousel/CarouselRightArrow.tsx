import React from 'react'
import { IconButton } from '@mui/material'
import { Icon } from '../../../components'

const CarouselRightArrow: React.FC = (props) => {
	return (
		<IconButton {...props} sx={sx.root}>
			<Icon name="ChevronRight" />
		</IconButton>
	)
}

export default CarouselRightArrow

const sx = {
	root: {
		position: 'absolute',
		right: 24,
    top: '28%',    
    height: 48,
    width: 48,
    boxShadow: 4,
    opacity: 0.8,	
		bgcolor: 'background.paper',
		'&:hover': {
      opacity: 1.0,
			bgcolor: 'background.paper',
		},
	},
}
