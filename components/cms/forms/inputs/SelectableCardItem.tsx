import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity } from '../../../../components'

type SelectableCardItemProps = {
	title: string
	description: string
	image: string
	handleClick: () => void
	selected: boolean
}

const SelectableCardItem: React.FC<SelectableCardItemProps> = (props) => {
	const {
		title,
		description,
		image,
		handleClick,
		selected = false,
	} = props || {}

	return (
		<TouchableOpacity handleClick={handleClick}>
			<Stack
				spacing={1}
				sx={{
					...sx.root,
					...(selected && sx.selected),
				}}
			>
				<Box sx={sx.imageContainer}>
					<Image src={image} height={200} alt={title} disableBorderRadius />
				</Box>
				<Stack spacing={1} sx={sx.content}>
					<Stack spacing={0}>
						<Typography color="text.primary" variant="body1">
							{title}
						</Typography>
						{description && (
							<Typography color="text.secondary" variant="body2">
								{description}
							</Typography>
						)}
					</Stack>
				</Stack>
			</Stack>
		</TouchableOpacity>
	)
}

export default SelectableCardItem

const sx = {
	root: {
		width: '100%',
		border: '3px solid',
		borderColor: 'divider',
		borderRadius: 1,
		overflow: 'hidden',
		minWidth: '200px',
	},
	selected: {
		border: '3px solid',
		borderColor: 'primary.main',
	},
	imageContainer: {
		width: '100%',
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
	},
	gradient: {
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '50%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
		},
	},
	content: {
		minHeight: '60px',
		p: 1,
		pt: 0,
	},
	title: {
		minHeight: '50px',
	},
	description: {
		maxWidth: '320px',
	},
}
