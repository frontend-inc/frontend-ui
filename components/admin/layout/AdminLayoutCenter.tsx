import React from 'react'
import { Box } from '@mui/material'

type LayoutCenterProps = {
	children: React.ReactNode
}

const LayoutCenter: React.FC<AdminLayoutCenterProps> = (props) => {
	const { children } = props

	return (
      <Box sx={sx.root}>
        <Box sx={sx.content}>{children}</Box>
      </Box>
	)
}

export default LayoutCenter

const sx = {
	root: {
		bgcolor: 'background.default',
		width: '100%',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		height: '100%',
		overflowY: 'hidden',
	},
	open: {
		transform: {
			xs: 'translateX(-100%)',
			sm: 'translateX(0)',
		},
	},
	footer: {
		width: '100%',
	},
}
