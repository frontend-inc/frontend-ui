import React from 'react'
import { Box, LinearProgress } from '@mui/material'
import { useDelayedLoading } from '../../../hooks'

type LoaderProps = {
	loading?: boolean
	delay?: number
}

const Loader: React.FC<LoaderProps> = (props) => {
	const { loading = true, delay = 500 } = props

	const { loading: easeLoading } = useDelayedLoading({
		loading,
		delay,
	})

	if (!easeLoading) return null
	return (
		<Box sx={sx.root}>
			<LinearProgress color="primary" sx={sx.progress} />
		</Box>
	)
}

export default Loader

const sx = {
	root: {
		p: 6,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
	progress: {
		height: '4px',
		width: '220px',
		bgcolor: 'transparent',
		color: 'primary.dark',
		borderRadius: '4px',
	},
}
