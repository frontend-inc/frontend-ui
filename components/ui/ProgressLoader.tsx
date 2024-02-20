import React from 'react'
import { LinearProgress, Box } from '@mui/material'

type ProgressLoaderProps = {
	size?: number
	styles?: any
	borderWidth?: number
}

const ProgressLoader: React.FC<ProgressLoaderProps> = (props) => {
	const { size = 48, styles = {}, borderWidth = 4 } = props

	return (
		<Box
			sx={{
				...sx.root,
				...styles,
			}}
		>
			<Box sx={sx.box}>
				<LinearProgress color="primary" sx={sx.progress} />
			</Box>
		</Box>
	)
}

export default ProgressLoader

const sx = {
	root: {
		p: 6,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	box: {
		position: 'relative',
	},
	progress: {
		height: '4px',
		width: '220px',
		bgcolor: 'transparent',
		color: 'primary.dark',
		borderRadius: '4px',
	},
}
