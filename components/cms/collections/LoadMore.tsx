import React from 'react'
import { Box, Button } from '@mui/material'
import { Waypoint } from 'react-waypoint'
import { ExpandMore } from '@mui/icons-material'

type LoadMoreProps = {
	enableInfiniteLoad?: boolean
	page?: number
	numPages?: number
	loadMore: () => void
}

const LoadMore: React.FC<LoadMoreProps> = (props) => {
	const { enableInfiniteLoad = false, page = 1, numPages = 1, loadMore } = props

	return (
		<Box sx={sx.root}>
			{page < numPages && (
				<>
					{enableInfiniteLoad && <Waypoint onEnter={loadMore} />}
					<Button
            sx={ sx.loadMore }
						color="primary"
						onClick={loadMore}
						endIcon={<ExpandMore />}
					>
						Load More
					</Button>
				</>
			)}
		</Box>
	)
}

export default LoadMore

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
  loadMore: {
    color: 'text.secondary',
    bgcolor: 'tertiary.main',
    '&:hover': {
    },
  }
}
