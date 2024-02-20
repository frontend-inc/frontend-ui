import React from 'react'
import { Button } from '@mui/material'

type ButtonProps = {
	children: any
	variant?: 'text' | 'outlined' | 'contained'
	color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
	onClick?: (ev: any) => void
}

const TextButton: React.FC<ButtonProps> = (props) => {
	const { children, variant, color, ...rest } = props
	return (
		<Button sx={sx.button} {...rest}>
			{children}
		</Button>
	)
}

export default TextButton

const sx = {
	button: {
		bgcolor: 'transparent',
		color: 'text.primary',
		'&:hover': {
			bgcolor: 'transparent',
		},
	},
}
