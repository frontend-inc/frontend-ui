import React from 'react'
import { Box, CircularProgress } from '@mui/material'

type LoaderProps = {
	size?: number
}

const Loader: React.FC<LoaderProps> = (props) => {
	const { size = 32 } = props

	return (
		<Box sx={sx.root}>
			<CircularProgress disableShrink color="primary" size={size} />
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
}
