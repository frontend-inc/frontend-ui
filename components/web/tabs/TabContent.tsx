import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

type TabItemProps = {
	title: string
	description: string
	image?: string
	active: boolean
}

const TabItem: React.FC<TabItemProps> = (props) => {
	const { title, description, image, active = false } = props

	if (!active) return null
	return (
		<Stack
			direction={{
				sm: 'row',
				xs: 'column-reverse',
			}}
			spacing={2}
			sx={sx.root}
		>
			{image && (
				<Box sx={sx.imageContainer}>
					<img
						alt={title}
						src={image}
						height={256}
						width={256}
						style={{
							width: '100%',
							objectFit: 'contain',
						}}
					/>
				</Box>
			)}
			<Stack sx={sx.content} spacing={1}>
				<Typography variant="subtitle1" color="text.primary">
					{title}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					{description}
				</Typography>
			</Stack>
		</Stack>
	)
}

export default TabItem

const sx = {
	root: {
		px: 2,
	},
	imageContainer: {
		width: 256,
		height: 256,
		overflow: 'hidden',
	},
	content: {
		width: '100%',
	},
}
