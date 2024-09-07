import React from 'react'
import { Button, IconButton, Typography, Box, Chip } from '@mui/material'
import { Close } from '@mui/icons-material'

type ShopifySearchTagsProps = {
	tags?: any
	handleClick: any
	handleClearAll: any
}

const ShopifySearchTags: React.FC<ShopifySearchTagsProps> = (props) => {
	const { tags = [], handleClick, handleClearAll } = props
	if (!tags) return null
	return (
		<Box sx={sx.searchTags}>
			{tags?.map((tag, index) => (
				<Chip
					key={index}
					label={
						<Box sx={sx.chip}>
							<Typography variant="caption">{tag}</Typography>
							<IconButton sx={sx.iconButton} onClick={() => handleClick(tag)}>
								<Close sx={sx.icon} />
							</IconButton>
						</Box>
					}
					variant="outlined"
					onClick={() => handleClick(tag)}
					sx={sx.chip}
				/>
			))}
			<Button onClick={handleClearAll} variant="text">
				Clear All
			</Button>
		</Box>
	)
}

export default ShopifySearchTags

const sx = {
	searchTags: {
		mb: 3,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: '10px',
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	chip: {
		textTransform: 'uppercase',
	},
	icon: {
		color: 'primary.main',
		height: '20px',
		width: '20px',
	},
	iconButton: {
		p: 0,
		'&:hover': {
			backgroundColor: 'transparent',
		},
		ml: '6px',
	},
}
