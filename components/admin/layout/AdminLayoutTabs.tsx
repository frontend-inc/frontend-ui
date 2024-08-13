import React from 'react'
import { Box } from '@mui/material'

type AdminLayoutTabsProps = {
	children: React.ReactNode
}

const AdminLayoutTabs: React.FC<AdminLayoutTabsProps> = (props) => {
	const { children } = props || {}

	return (
		<Box sx={sx.root}>
			<Box sx={sx.icons}>{children}</Box>
		</Box>
	)
}

export default AdminLayoutTabs

const sx = {
	root: {
		width: '60px',
		height: '100vh',
		bgcolor: 'background.main',
	},
	icons: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: {
			xs: '5px',
			sm: 0,
		},
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}
