import React from 'react'
import { Box } from '@mui/material'

type CenterProps = {
	children: React.ReactNode
}

const Center: React.FC<CenterProps> = (props) => {
	const { children } = props
	return (
		<Box
			display="flex"
			width="100%"
			height="100%"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			{...props}
		>
			{children}
		</Box>
	)
}

export default Center
