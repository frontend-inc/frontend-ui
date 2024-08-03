import React from 'react'
import { Container, Box } from '@mui/material'

type AuthLayoutProps = {
	children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
	const { children } = props

	return (
    <Box sx={sx.root}>
      <Container maxWidth="sm">{children}</Container>
    </Box>
	)
}

export default AuthLayout

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
		bgcolor: 'background.default',
	},
}
