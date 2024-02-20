import React from 'react'
import { Box, Button } from '@mui/material'

type LoadMoreProps = {
	loading?: boolean
	hasNextPage?: boolean
	handleSearch?: any
}

const LoadMore: React.FC<LoadMoreProps> = (props) => {
	const { loading = false, hasNextPage = false, handleSearch } = props

	if (!hasNextPage) return null
	return (
		<Box sx={sx.loadMoreContainer}>
			<Button
				variant="contained"
				color="secondary"
				onClick={handleSearch}
				disabled={loading}
			>
				Load More
			</Button>
		</Box>
	)
}

export default LoadMore

const sx = {
	loadMoreContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		my: 4,
	},
}
