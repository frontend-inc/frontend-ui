import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Image, ExpandableText } from '../..'

export type PDPProps = {
	label?: string
	image?: string
	price?: string
	compareAtPrice?: string
	description?: string
	primary?: string
	secondary?: React.ReactNode
	actions?: React.ReactNode
	addToCart?: React.ReactNode
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
		addToCart,
		price,
		compareAtPrice,
		description,
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
					<Stack spacing={2} sx={sx.rightPanel} {...slots.content}>
						<Typography color="text.primary" variant="h4">
							{primary}
						</Typography>
						<Stack direction="row" spacing={1}>
							<Typography color="text.primary" variant="subtitle1">
								{price}
							</Typography>
							{compareAtPrice && (
								<Typography
									color="text.secondary"
									variant="subtitle2"
									sx={sx.compareAtPrice}
								>
									{compareAtPrice}
								</Typography>
							)}
						</Stack>
						{secondary}
						{addToCart}
						<ExpandableText text={description || ''} />
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
	compareAtPrice: {
		textDecoration: 'line-through',
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
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
	},
	rightPanel: {
		width: {
      sm: '100%',
      xs: '100%',
    },
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
		borderRadius: 1,
		width: '100%',
		minWidth: {
			sm: 420,
			xs: '100%',
		},
    maxWidth: {
      sm: 640,
      xs: '100%',    
    }
	},		
	description: {
		whiteSpace: 'pre-line',
	},
}
