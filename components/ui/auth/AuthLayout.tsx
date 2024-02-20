import React from 'react'
import { Box } from '@mui/material'

type AuthLayoutProps = {
	children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
	const { children } = props
	return <Box sx={sx.root}>{children}</Box>
}

export default AuthLayout

const sx = {
	root: {
		height: '100vh',
		bgcolor: 'background.default',
	},
}
