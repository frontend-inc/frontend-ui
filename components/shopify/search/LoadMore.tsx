import React from 'react'
import { Box, Button } from '@mui/material'
import { Icon } from '../../../components'

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
        endIcon={
          <Icon 
            name="ChevronDown" 
            color='secondary.contrastText' 
          />
        }
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
