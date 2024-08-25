import React from 'react'
import { Paper, Box, Stack, Typography } from '@mui/material'
import {
	Image,	
} from '../..'
import { HeroCardProps } from './HeroCard'

const HeroSnippet: React.FC<HeroCardProps> = (props) => {
	const {
		label,
    image,
    primary,
    secondary,
    actions,
    secondaryAction,
	} = props || {}

  return (
		<Paper elevation={0} sx={sx.paper}>
			<Stack direction="column" spacing={0} sx={sx.header}>
				<Box sx={sx.imageContainer}>
					<Image
						disableBorderRadius
						label={label}
						src={image}
						alt={primary}
						height={260}
					/>
				</Box>
				<Stack spacing={0.5} direction="column" p={2} width="100%">
					{ actions }
					<Typography variant="subtitle1" color="text.primary">
						{primary}
					</Typography>
					{ secondary }
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
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		bgcolor: 'rgb(0,0,0,0.5)',
	},
}
