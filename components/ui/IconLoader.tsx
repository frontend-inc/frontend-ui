import React from 'react'
import { CircularProgress } from '@mui/material'

type IconLoaderProps = {
	loading?: boolean
	color?: string
}

const IconLoader: React.FC<IconLoaderProps> = (props) => {
	const { loading = false, color = 'primary.contrastText' } = props
	if (!loading) return null
	return (
		<CircularProgress
			size={20}
			sx={{
				...sx.root,
				color,
			}}
			disableShrink
		/>
	)
}

export default IconLoader

const sx = {
	root: {
		color: 'primary.contrastText',
	},
	outlined: {
		color: 'primary.main',
	},
}
