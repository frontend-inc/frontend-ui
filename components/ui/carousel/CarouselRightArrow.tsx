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
		right: 0,
		top: 20,
		transform: 'translateY(-50%)',
		bgcolor: 'secondary.main',
		'&:hover': {
			bgcolor: 'secondary.dark',
		},
	},
}
