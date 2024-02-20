import React from 'react'
import { Box, Typography } from '@mui/material'

const NoSearchResults: React.FC = () => {
	return (
		<Box sx={sx.root}>
			<Typography mb={2} variant="h5" color="textPrimary">
				No search results
			</Typography>
			<Typography variant="subtitle2" color="textPrimary">
				Please try another query.
			</Typography>
		</Box>
	)
}

export default NoSearchResults

const sx = {
	root: {
		p: 4,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},
}
