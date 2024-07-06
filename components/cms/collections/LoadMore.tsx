import React, { useContext } from 'react'
import { ResourceContext } from 'frontend-js'
import { Box, Button } from '@mui/material'
import { Waypoint } from 'react-waypoint'
import { ExpandMore } from '@mui/icons-material'
import { Icon } from '../../../components'

type LoadMoreProps = {
	enableInfiniteLoad?: boolean
}

const LoadMore: React.FC<LoadMoreProps> = (props) => {
	const { enableInfiniteLoad = false } = props

  const { 
    page,
    numPages,
    loadMore 
  } = useContext(ResourceContext) as any

	return (
		<Box sx={sx.root}>
			{page < numPages && (
				<>
					{enableInfiniteLoad && <Waypoint onEnter={loadMore} />}
					<Button
						color="secondary"
						variant="contained"
						onClick={loadMore}
						endIcon={<Icon name="ChevronDown" />}
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
}
