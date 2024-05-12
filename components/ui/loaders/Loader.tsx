import React from 'react'
import { Stack } from '@mui/material'
import { CircularProgress } from '@mui/material'

type LoaderProps = {
	loading?: boolean
	delay?: number
}

const Loader: React.FC<LoaderProps> = (props) => {
	const { loading } = props

	if (!loading) return null
	return (
		<Stack direction="column" sx={sx.root}>
			<CircularProgress disableShrink color="primary" size={50} thickness={4} />
		</Stack>
	)
}

export default Loader

const sx = {
	root: {
		height: '100%',
		minHeight: 200,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circularProgress: {},
}
