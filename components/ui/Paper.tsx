import React from 'react'
import { Box } from '@mui/material'

type PaperProps = {
	children: React.ReactNode
	styles?: any
	p?: number
}

const Paper: React.FC<PaperProps> = (props) => {
	const { children, styles } = props

	return (
		<Box
			p={props.p || 2}
			sx={{
				...sx.root,
				...styles,
			}}
			{...props}
		>
			{children}
		</Box>
	)
}

export default Paper

const sx = {
	root: {
		width: '100%',
		borderRadius: (theme) => theme.shape.borderRadius,
		bgcolor: 'background.paper',
		boxShadow: 0,
		border: '1px solid',
		borderColor: 'divider',
	},
}
