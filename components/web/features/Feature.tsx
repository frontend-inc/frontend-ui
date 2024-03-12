import React from 'react'
import { Icon } from '../..'
import { Stack, Avatar, Typography } from '@mui/material'

type FeatureProps = {
	icon?: string
	title?: string
	description?: string
}

const Feature: React.FC<FeatureProps> = (props) => {
	const { icon, title, description } = props || {}
	return (
		<Stack direction="column" spacing={1} sx={sx.root}>
			{icon && (
				<Avatar sx={sx.avatar}>
					<Icon name={icon} color="primary.contrastText" size={24} />
				</Avatar>
			)}
			<Stack direction="column" spacing={0}>
				<Typography sx={sx.text} color="text.primary" variant="subtitle1">
					{title}
				</Typography>
				<Typography sx={sx.text} color="text.secondary" variant="body1">
					{description}
				</Typography>
			</Stack>
		</Stack>
	)
}

export default Feature

const sx = {
	root: {
		p: 2,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatar: {
		bgcolor: 'primary.main',
		height: '54px',
		width: '54px',
	},
	title: {
		textAlign: 'center',
		color: 'grey.900',
		'& span': {
			color: 'primary.main',
		},
	},
	text: {
		maxWidth: '280px',
		textAlign: 'center',
		'& span': {
			color: 'primary.main',
		},
	},
}
