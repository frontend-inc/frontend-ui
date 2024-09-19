import React from 'react'
import { CircularProgress } from '@mui/material'

type IconLoadingProps = {
	loading: boolean
	color?: string
  size?: number
}
const IconLoading: React.FC<IconLoadingProps> = (props) => {
	const { loading = false, size=20, color = 'primary.contrastText' } = props
	if (!loading) return null
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
