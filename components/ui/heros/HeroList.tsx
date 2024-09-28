import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Image } from '../..'
import { HeroCardProps } from './HeroCard'

const HeroList: React.FC<HeroCardProps> = (props) => {
	const {
		image,
		label,
		primary,
		secondary,
		actions,
		secondaryAction,
		children,
		slots = {
			image: {},
		},
	} = props || {}

	return (
		<Stack sx={sx.root} spacing={4}>
			{secondaryAction}
			<Typography color="text.primary" variant="h3">
				{primary}
			</Typography>
			<Box sx={sx.imageContainer}>
				<Image
					src={image}
					alt={primary}
					height={400}
					label={label}
					{...slots.image}
				/>
			</Box>
			{actions}
			<Box sx={sx.content}>{secondary}</Box>
			{children}
		</Stack>
	)
}

export default HeroList

const sx = {
	root: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		pb: 2,
	},
	header: {
		maxWidth: 500,
		width: '100%',
		textAlign: 'center',
	},
	content: {
		width: '100%',
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
