import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Container, BrandLogos, Label, Image } from '../..'

export type SpotlightListProps = {
	label?: string
	image?: string
	logos?: {
		image: string
		title: string
	}[]
	primary?: string | React.ReactNode
	secondary?: React.ReactNode
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	children?: React.ReactNode
	slots?: {
		image?: any
		content?: any
	}
}

const Spotlight: React.FC<SpotlightListProps> = (props) => {
	const {
		image,
		label,
		primary,
		secondary,
		actions,
		logos = [],
		secondaryAction,
		children,
		slots = {
			image: {},
		},
	} = props || {}

	return (
		<Box sx={sx.root}>
			<Container maxWidth="md">
				<Stack sx={sx.container} spacing={6}>
					<Stack sx={sx.header} spacing={3}>
						<Box>
							<Label label={label} />
						</Box>
						<Typography color="text.primary" variant="h1" sx={sx.header}>
							{primary}
						</Typography>
						{secondary}
						{actions}
						{logos?.length > 0 && <BrandLogos logos={logos} />}
					</Stack>
					{children}
					<Box sx={sx.imageContainer}>
						<Image
              disableBorderRadius
							src={image}
							alt={primary}
							height={500}
							objectFit="contain"
							{...slots.image}
						/>
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}

export default Spotlight

const sx = {
	root: {
		pt: 8,
		pb: 0,
		height: 'auto',
		width: '100%',
		background: (theme) =>
			`radial-gradient(ellipse 100% 95% at center bottom, ${theme.palette.primary.main}, rgba(0, 0, 0, 1))`,
	},
	container: {
		px: 2,
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	header: {
		maxWidth: 600,
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
    overflow: 'hidden',
		borderRadius: theme => `${2 * theme.shape.borderRadius}px ${2 * theme.shape.borderRadius}px 0 0`,
		boxShadow: 6,
	},
	logos: {
		p: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		height: 64,
		width: 64,
	},
}
