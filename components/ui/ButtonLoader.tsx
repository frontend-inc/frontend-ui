import React from 'react'
import { CircularProgress } from '@mui/material'

type ButtonLoaderProps = {
	loading: boolean
	color?: string
}
const ButtonLoader: React.FC<ButtonLoaderProps> = (props) => {
	const { loading = false, color = 'primary.contrastText' } = props
	if (!loading) return null
	return (
		<CircularProgress
			size={20}
			disableShrink
			sx={{
				...sx.loader,
				color,
			}}
		/>
	)
}

export default ButtonLoader

const sx = {
	loader: {
		color: 'primary.contrastText',
	},
}
