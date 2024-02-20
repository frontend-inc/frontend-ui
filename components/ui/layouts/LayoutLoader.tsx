import React from 'react'
import { Backdrop, LinearProgress } from '@mui/material'
import { useDelayedLoading } from '../../../hooks'

type LayoutLoaderProps = {
	loading?: boolean
	children: any
	delay?: number
}

const LayoutLoader: React.FC<LayoutLoaderProps> = (props) => {
	const { loading = true, delay = 500, children } = props

	const { loading: easeLoading } = useDelayedLoading({
		loading,
		delay,
	})
	if (!easeLoading) return children
	return (
		<Backdrop open={easeLoading} sx={sx.backdrop}>
			<LinearProgress color="primary" sx={sx.progress} />
		</Backdrop>
	)
}

export default LayoutLoader

const sx = {
	backdrop: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		bgcolor: 'background.default',
		zIndex: (theme) => theme.zIndex.drawer + 1,
	},
	progress: {
		height: '4px',
		width: '220px',
		bgcolor: 'transparent',
		color: 'primary.dark',
		borderRadius: '4px',
	},
}
