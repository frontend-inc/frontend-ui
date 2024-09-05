import React from 'react'
import { Box } from '@mui/material'

type ViewScrollProps = {
	children: React.ReactNode
}

const ViewScroll: React.FC<ViewScrollProps> = (props) => {
	const { children } = props || {}

	return (
		<Box sx={sx.root} {...props}>
			{children}
		</Box>
	)
}

export default ViewScroll

const sx = {
	root: {
		height: '100%',
		overflowX: 'hidden',
		overflowY: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
}
