import React from 'react'
import { Container, Stack, Box, Typography } from '@mui/material'
import { Label, Image, BrandLogos } from '../..'
import { SpotlightListProps } from './SpotlightList'

const SpotlightCard: React.FC<SpotlightListProps> = (props) => {
	const {
		image,
		label,
		primary,
		secondary,
		actions,
		logos = [],
		children,
    styles={},
		slots = {
			image: {},
		},
	} = props || {}

	return (
		<Box sx={{ ...sx.root, ...styles }}>
			<Container maxWidth="lg">
				<Stack
					direction={{
						md: 'row',
						xs: 'column',
					}}
					spacing={6}
				>
					<Stack sx={sx.header} spacing={3}>
            { label && (
						<Box>
							<Label label={label} />
						</Box>
            )}
						<Typography color="text.primary" variant="h1" sx={sx.title}>
							{primary}
						</Typography>
						{secondary && secondary}
						{actions && actions}
						{logos?.length > 0 && <BrandLogos logos={logos} />}
					</Stack>
					<Box sx={sx.imageContainer}>
						<Image
							src={image}
							alt={primary}
							height={400}
							objectFit="cover"
							{...slots.image}
						/>
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}

export default SpotlightCard

const sx = {
	root: {
		pt: 20,
		py: 8,
		px: {
			md: 4,
			xs: 0,
		},
		height: 'auto',
		width: '100%',
	},
	container: {
		px: 2,
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	title: {
		textAlign: {
			md: 'left',
			xs: 'center',
		},
	},
	header: {
		alignItems: {
			md: 'flex-start',
			xs: 'center',
		},
		justifyContent: 'center',
		maxWidth: {
			md: 600,
			xs: '100%',
		},
		width: '100%',
	},
	content: {
		width: '100%',
		maxWidth: {
			md: 600,
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
		minWidth: {
			md: 400,
			xs: '100%',
		},
		borderRadius: 1,
		boxShadow: 6,
	},
	logos: {
		p: 2,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	logo: {
		height: 30,
		width: 120,
	},
}
