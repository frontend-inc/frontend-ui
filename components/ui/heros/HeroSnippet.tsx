import React from 'react'
import { Paper, Box, Stack, Typography } from '@mui/material'
import { AvatarImage, Image } from '../..'
import { HeroCardProps } from './HeroCard'

type HeroSnippetProps = HeroCardProps & {
	circular?: boolean
	disableImage?: boolean
	slots?: {
		image?: any
	}
}

const HeroSnippet: React.FC<HeroSnippetProps> = (props) => {
	const {
		label,
		image,
		primary,
		secondary,
		actions,
		disableImage,
		circular,
		slots = {
			image: {},
		},
	} = props || {}

	return (
		<Paper elevation={0} sx={sx.paper}>
			<Stack direction="column" spacing={0} sx={sx.header}>
				{!disableImage && (
					<Box sx={sx.imageContainer}>
						{circular ? (
							<AvatarImage
								label={label}
								src={image}
								height={180}
								alt={primary}
								{...slots.image}
							/>
						) : (
							<Image
								label={label}
								src={image}
								height={220}
								alt={primary}
								{...slots.image}
							/>
						)}
					</Box>
				)}
				<Stack spacing={0.5} direction="column" p={2} width="100%">
					{actions}
					<Typography variant="subtitle1" color="text.primary">
						{primary}
					</Typography>
					{secondary}
				</Stack>
			</Stack>
		</Paper>
	)
}

export default HeroSnippet

const sx = {
	paper: {},
	container: {
		borderRadius: 1,
		overflow: 'hidden',
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			md: 'flex-start',
			xs: 'center',
		},
	},
	header: {
		width: '100%',
	},
	imageContainer: {
		width: '100%',
		borderRadius: (theme) =>
			`${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		display: 'flex',
		justifyContent: {
			xs: 'center',
			sm: 'flex-start',
		},
		alignItems: 'center',
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		bgcolor: 'rgb(0,0,0,0.5)',
	},
}
