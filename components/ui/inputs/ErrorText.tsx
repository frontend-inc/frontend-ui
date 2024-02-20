import React from 'react'
import { Typography } from '@mui/material'

type ErrorTextProps = {
	error: string
}

const ErrorText: React.FC<ErrorTextProps> = (props) => {
	const { error } = props

	if (!error) return null
	return (
		<Typography variant="overline" sx={sx.root}>
			{error}
		</Typography>
	)
}

export default ErrorText

const sx = {
	root: {
		color: 'error.main',
		fontSize: '0.75rem',
	},
}
