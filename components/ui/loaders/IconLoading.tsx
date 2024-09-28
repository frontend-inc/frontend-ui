import React from 'react'
import { CircularProgress } from '@mui/material'

type IconLoadingProps = {
	color?: string
	size?: number
}
const IconLoading: React.FC<IconLoadingProps> = (props) => {
	const { size = 20, color = 'primary.contrastText' } = props
	return (
		<CircularProgress
			disableShrink
			sx={{
				...sx.loader,
				color,
			}}
			size={size}
		/>
	)
}

export default IconLoading

const sx = {
	loader: {
		color: 'primary.contrastText',
	},
}
