import React from 'react'
import { Typography } from '@mui/material'

type HelperTextProps = {
	text?: string
}

const HelperText: React.FC<HelperTextProps> = (props) => {
	const { text } = props || {}
	if (!text) return null
	return (
		<Typography variant="caption" sx={sx.root}>
			{text}
		</Typography>
	)
}

export default HelperText

const sx = {
	root: {
		color: 'text.secondary',
	},
}
