import React from 'react'
import { Box } from '@mui/material'

type LayoutScrollProps = {
	children: React.ReactNode
	ref?: any
	pb?: number
}

const LayoutScroll: React.FC<LayoutScrollProps> = (props) => {
	const { children, ref, pb = 0 } = props || {}

	return (
		<Box
			ref={ref && ref}
			sx={{
				...sx.root,
				pb: pb,
			}}
			{...props}
		>
			{children}
		</Box>
	)
}

export default LayoutScroll

const sx = {
	root: {
		height: '100vh',
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
}
