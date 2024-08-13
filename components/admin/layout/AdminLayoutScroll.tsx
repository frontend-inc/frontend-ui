import React from 'react'
import { Box } from '@mui/material'

type AdminLayoutScrollProps = {
	children: React.ReactNode
	ref?: any
	pb?: number
}

const AdminLayoutScroll: React.FC<AdminLayoutScrollProps> = (props) => {
	const { children, ref, pb = 0 } = props || {}

	return (
		<Box
			ref={ref && ref}
			sx={{
				...sx.root,
				pb: pb,
			}}
		>
			{children}
		</Box>
	)
}

export default AdminLayoutScroll

const sx = {
	root: {
		height: 'calc(100vh - 50px)',
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
}
