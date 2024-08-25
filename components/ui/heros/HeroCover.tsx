import React from 'react'
import { Stack } from '@mui/material'
import {
	Cover,
} from '../..'
import { HeroCardProps } from './HeroCard'

const HeroCover: React.FC<HeroCardProps> = (props) => {
	const {		
    image,
    primary,
    secondary,
    actions,
    secondaryAction,
	} = props || {}
	
	return (
		<Stack sx={sx.root} spacing={4}>
			<Cover image={image} height={400} title={primary} enableOverlay />
			<Stack spacing={3} sx={sx.header}>
				{ actions }
				{ secondaryAction }
				{ secondary }
			</Stack>			
		</Stack>
	)
}

export default HeroCover

const sx = {
	root: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	header: {
		px: 2,
		maxWidth: 500,
		width: '100%',		
	},
	content: {
		px: 2,
		width: '100%',
		pb: 4,
		maxWidth: {
			sm: 500,
			xs: '100%',
		},
	},
	text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	caption: {
		color: 'text.secondary',
	},
	buttons: {
		justifyContent: 'center',
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	imageContainer: {
		width: '100%',
		borderRadius: 1,
	},
}
