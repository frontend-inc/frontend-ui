import React, { useContext } from 'react'
import { Backdrop, LinearProgress } from '@mui/material'
import { useDelayedLoading } from '../../../hooks'
import { AppContext } from '@frontend-mui/context'

type ContextLoaderProps = {
	loading?: boolean
	delay?: number
}

const ContextLoader: React.FC<ContextLoaderProps> = (props) => {
	const { loading } = useContext(AppContext)

	const { loading: easeLoading } = useDelayedLoading({
		loading,
	})

	return (
		<Backdrop open={easeLoading} sx={sx.backdrop}>
			<LinearProgress color="primary" sx={sx.progress} />
		</Backdrop>
	)
}

export default ContextLoader

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
