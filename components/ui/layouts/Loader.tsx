import React from 'react'
import { Backdrop, LinearProgress } from '@mui/material'
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
	return (
		<Backdrop open={easeLoading} sx={sx.backdrop}>
			<LinearProgress color="primary" sx={sx.progress} />
		</Backdrop>
	)
}

export default Loader

const sx = {
	backdrop: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		zIndex: (theme) => theme.zIndex.modal + 1,
	},
	progress: {
		height: '4px',
		width: '100vw',
		bgcolor: 'transparent',
		color: 'primary.dark',
		borderRadius: '4px',
	},
}
