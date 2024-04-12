import React from 'react'
import { CircularProgress } from '@mui/material'

type IconLoadingProps = {
	loading: boolean
	color?: string
}
const IconLoading: React.FC<IconLoadingProps> = (props) => {
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

export default IconLoading

const sx = {
	loader: {
		color: 'primary.contrastText',
	},
}
