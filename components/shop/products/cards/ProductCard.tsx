import React from 'react'
import { Box, Stack, Typography, Checkbox } from '@mui/material'
import { Image } from '../../..'

export type ProductCardProps = {
	ref?: any
	sortable?: boolean
	selectable?: boolean
	selected?: boolean
	avatar?: React.ReactNode
	image: string
	label?: string
	primary: string
	secondary?: string | React.ReactNode
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	handleSelect?: () => void
	height?: number
	slots?: {
		item?: any
		image?: any
	}
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
	const {
		ref,
		label,
		primary,
		secondary,
		actions,
		secondaryAction,
		handleClick,
		image,
		height = 240,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	return (
		<Stack
			ref={ref}
			spacing={0}
			sx={{
				...sx.root,
				width: '100%',
				minHeight: height + 80,
			}}
			{...slots.item}
		>
			<Box sx={sx.imageContainer}>
				<Image
					src={image}
					height={height}
					alt={primary}
					label={label}
					handleClick={handleClick}
					{...slots.image}
				/>
			</Box>
			<Stack spacing={0} sx={sx.cardContent}>
				<Box sx={sx.content}>
					<Typography sx={sx.title} color="text.primary" variant="subtitle1">
						{primary}
					</Typography>
					{secondary && (
						<Typography color="text.secondary" variant="body2">
							{secondary}
						</Typography>
					)}
				</Box>
				<Stack direction="row" justifyContent="space-between">
					{actions}
					{secondaryAction}
				</Stack>
			</Stack>
		</Stack>
	)
}

export default ProductCard

const sx = {
	root: {
		overflow: 'hidden',
		borderRadius: 1,
		width: '100%',
		minWidth: 280,
		transition: 'box-shadow 0.3s',
		bgcolor: 'background.paper',
		border: '1px solid',
		borderColor: 'divider',
		'&:hover': {
			boxShadow: 2,
		},
	},
	imageContainer: {
		height: 230,
		minHeight: 230,
		width: '100%',
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
	},
	cardContent: {
		p: 1,
		width: '100%',
		display: 'flex',
		height: '100%',
		justifyContent: 'space-between',
		alignItems: 'space-between',
	},
	content: {
		height: '100%',
	},
	title: {
		width: '100%',
	},
	user: {},
}
