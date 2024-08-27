import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { HeroCardProps } from './HeroCard'
import { AvatarImage } from '../..'

const HeroAvatar: React.FC<HeroCardProps> = (props) => {
	const { image, primary, secondary, actions, secondaryAction, slots } =
		props || {}

	return (
		<Stack spacing={2} direction="column" justifyContent="center">
			<Stack
				sx={sx.buttons}
				direction={{ sm: 'row', xs: 'column' }}
				spacing={1}
			>
				{secondaryAction}
			</Stack>
			<Box sx={sx.root}>
				<Stack
					sx={sx.container}
					direction={{ sm: 'row', xs: 'column' }}
					spacing={4}
				>
					<Stack sx={sx.leftPanel} spacing={2} direction="column">
						<Box sx={sx.imageContainer}>
							<AvatarImage
								image={image}
								alt={primary}
								height={200}
								{...slots.image}
							/>
						</Box>
						{actions}
					</Stack>
					<Stack spacing={1} sx={sx.content}>
						<Typography color="text.primary" variant="h4">
							{primary}
						</Typography>
						{secondary}
					</Stack>
				</Stack>
			</Box>
		</Stack>
	)
}

export default HeroAvatar

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	rootBorder: {
		overflow: 'hidden',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		border: '1px solid',
		borderColor: 'divider',
	},
	avatar: {
		height: '200px',
		width: '200px',
		backgroundImage: 'linear-gradient(45deg, #888888, #222222,#000000)',
	},
	gradient: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
		},
	},
	overlay: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'rgb(0,0,0,0.5)',
		},
	},
	container: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			sm: 'flex-start',
			xs: 'center',
		},
	},
	leftPanel: {
		width: {
			sm: 200,
			xs: '100%',
		},
	},
	leftPanelBorder: {
		pb: 2,
	},
	imageContainer: {
		width: '100%',
		height: '100%',
		borderRadius: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		width: '100%',
		textAlign: 'center',
	},
	content: {
		width: '100%',
	},
	contentBorder: {
		p: 2,
	},
	text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	caption: {
		color: 'text.secondary',
	},
	link: {
		cursor: 'pointer',
		color: 'text.secondary',
	},
	socialUrls: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	buttons: {
		width: '100%',
		justifyContent: {
			sm: 'flex-end',
			xs: 'center',
		},
	},
}
