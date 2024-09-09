import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Image } from '../..'

export type PDPProps = {
	label?: string
	image?: string
	price?: string
	compareAtPrice?: string
	availableForSale?: boolean
	primary?: string
	secondary?: React.ReactNode
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	children?: React.ReactNode
	slots?: {
		image?: any
		content?: any
	}
}

const PDP: React.FC<PDPProps> = (props) => {
	const {
		label,
		image,
		primary,
		secondary,
		price,
		compareAtPrice,
		availableForSale,
		actions,
		secondaryAction,
		slots = {
			image: {},
			content: {},
		},
	} = props || {}

	return (
		<Stack spacing={2}>
			{secondaryAction}
			<Box sx={sx.root}>
				<Stack
					sx={sx.container}
					direction={{
						md: 'row',
						xs: 'column',
					}}
					spacing={4}
				>
					<Stack spacing={2} direction="column" sx={sx.leftPanel}>
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
					</Stack>
					<Stack spacing={2} sx={sx.content} {...slots.content}>
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

export default PDP

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	rootBorder: {
		overflow: 'hidden',
		borderRadius: 1,
		border: '1px solid',
		borderColor: 'divider',
	},
	container: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			md: 'flex-start',
			xs: 'center',
		},
	},
	image: {
		height: {
			sm: 256,
			xs: 180,
		},
		width: {
			sm: 256,
			xs: 180,
		},
	},
	header: {
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
	contentBorder: {
		p: 2,
	},
	caption: {
		color: 'text.secondary',
	},
	buttons: {
		width: '100%',
	},
	imageContainer: {
		transition: 'all 0.5s ease-in-out',
		borderRadius: 1,
		width: '100%',
		minWidth: {
			sm: 420,
			xs: '100%',
		},
	},
	leftPanel: {
		width: '100%',
	},
	leftPanelBorder: {
		pb: 2,
	},
}
