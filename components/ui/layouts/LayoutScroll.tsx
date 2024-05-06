import React from 'react'
import { Box } from '@mui/material'

type LayoutScrollProps = {
	children: React.ReactNode
	ref?: any
	p?: number
}

const LayoutScroll: React.FC<LayoutScrollProps> = (props) => {
	const { children, ref, p = 0 } = props || {}

	return (
		<Box
			ref={ref && ref}
			sx={{
				...sx.root,
				p: p,
			}}
		>
			{children}
		</Box>
	)
}

export default LayoutScroll

const sx = {
	root: {
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
    height: '100%'
	},
}
