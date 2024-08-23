import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity, LightDarkMode } from '../..'
import { CardProps } from './Card'

const CoverCard: React.FC<CardProps> = (props) => {
	const {
		label,
		primary,
		secondary,
		actions,
		secondaryAction,
		handleClick,
		image,
		height = 340,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	return (
		<LightDarkMode mode="dark">
			<Stack spacing={1} sx={sx.root} {...slots.item}>
				<TouchableOpacity handleClick={handleClick}>
					<Image
						label={label}
						src={image}
						height={height}
						alt={primary}
						{...slots.image}
					/>
				</TouchableOpacity>
				<Stack spacing={1} sx={sx.cover}>
					<Stack
						sx={sx.fullWidth}
						spacing={1}
						direction={'row'}
						alignItems="center"
					>
						<Box sx={sx.contentContainer}>
							<Stack sx={sx.content} direction="column" spacing={0}>
								<Box sx={sx.fullWidth}>
									<Typography color="text.primary" variant="subtitle1">
										{primary}
									</Typography>
									<Typography color="text.secondary" variant="body2">
										{secondary}
									</Typography>
									<Stack direction="row" sx={sx.buttons}>
										{actions}
										{secondaryAction}
									</Stack>
								</Box>
							</Stack>
						</Box>
					</Stack>
				</Stack>
			</Stack>
		</LightDarkMode>
	)
}

export default CoverCard

const sx = {
	root: {
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
		width: '100%',
		borderRadius: 1,
	},
	cover: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
		left: 0,
		zIndex: 1,
		p: 1,
	},
	description: {
		maxWidth: '320px',
	},
	button: {
		bgcolor: 'common.white',
		color: 'common.black',
		'&:hover': {
			color: 'common.black',
			bgcolor: 'common.white',
			opacity: 0.9,
		},
	},
	fullWidth: {
		width: '100%',
	},
	contentContainer: {
		px: 0,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	content: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	buttons: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
}
