import React from 'react'
import { Button as MuiButton } from '@mui/material'

type ButtonProps = {
	component?: any
	variant?: 'text' | 'outlined' | 'contained'
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error'
	size?: 'small' | 'medium' | 'large'
	fullWidth?: boolean
	buttonText?: string
}

const Button: React.FC<ButtonProps> = (props) => {
	const { variant, color, size, fullWidth, buttonText } = props

	return (
		<MuiButton
			variant={variant}
			size={size}
			color={color}
			fullWidth={fullWidth}
		>
			{buttonText}
		</MuiButton>
	)
}

export default Button
