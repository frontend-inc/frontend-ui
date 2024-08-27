import React from 'react'
import { Box, Button } from '@mui/material'
import { Waypoint } from 'react-waypoint'
import { Icon } from '../../../components'

type LoadMoreProps = {
	page: number
	numPages: number
	handlePaginate: () => void
	enableInfiniteLoad?: boolean
}

const LoadMore: React.FC<LoadMoreProps> = (props) => {
	const { page, numPages, handlePaginate, enableInfiniteLoad = false } = props

	return (
		<Box sx={sx.root}>
			{page < numPages && (
				<>
					{enableInfiniteLoad && <Waypoint onEnter={handlePaginate} />}
					<Button
						color="secondary"
						variant="contained"
						onClick={handlePaginate}
						endIcon={<Icon name="ChevronDown" color="secondary.contrastText" />}
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
