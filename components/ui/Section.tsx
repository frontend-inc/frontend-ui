import React from 'react'
import { Box } from '@mui/material'

type SectionProps = {
	children: React.ReactNode
	bgcolor?: string
	p?: number
	styles?: any
}

const Section: React.FC<SectionProps> = (props) => {
	const { children, bgcolor, p = 4, styles = {} } = props

	return (
		<Box
			sx={{
				bgcolor,
				p: p,
				...styles,
			}}
		>
			{children}
		</Box>
	)
}

export default Section
