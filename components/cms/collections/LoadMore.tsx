import React, { useContext } from 'react'
import { CollectionContext } from 'frontend-js'
import { Box, Button } from '@mui/material'
import { Waypoint } from 'react-waypoint'
import { ExpandMore } from '@mui/icons-material'
import { Icon } from '../../../components'

type LoadMoreProps = {
  page: number 
  numPages: number
  loadMore: () => void
	enableInfiniteLoad?: boolean
}

const LoadMore: React.FC<LoadMoreProps> = (props) => {
	const { 
    page,
    numPages,
    loadMore,
    enableInfiniteLoad = false 
  } = props

	return (
		<Box sx={sx.root}>
			{page < numPages && (
				<>
					{ enableInfiniteLoad && (
            <Waypoint 
              onEnter={loadMore} 
            />
          )}
					<Button
						color="secondary"
						variant="contained"
						onClick={loadMore}
						endIcon={
              <Icon 
                name="ChevronDown" 
                color='secondary.contrastText' 
              />
            }
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
