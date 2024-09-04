import React from 'react'
import { Stack, Typography } from '@mui/material'
import UnsplashLogo from './UnsplashLogo'

const PoweredByUnsplash: React.FC = () => {
	return (
		<Stack direction="row" spacing={1} sx={sx.root}>
			<Typography variant="body2" color="text.secondary">
				Powered by
			</Typography>
			<UnsplashLogo />
		</Stack>
	)
}

export default PoweredByUnsplash

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
}
