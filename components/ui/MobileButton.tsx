import React from 'react'
import { Hidden, Button, IconButton } from '@mui/material'

type MobileButtonProps = {
	startIcon: React.ReactNode
	onClick: () => void
	variant?: 'text' | 'outlined' | 'contained'
	color?: 'primary' | 'secondary'
	children: React.ReactNode
}

const MobileButton: React.FC<MobileButtonProps> = (props) => {
	const { startIcon, onClick, color = 'primary', children, variant } = props

	return (
		<>
			<Hidden smDown>
				<Button
					variant={variant}
					color={color}
					startIcon={startIcon}
					onClick={onClick}
				>
					{children}
				</Button>
			</Hidden>
			<Hidden smUp>
				<IconButton color={color} onClick={onClick}>
					{startIcon}
				</IconButton>
			</Hidden>
		</>
	)
}

export default MobileButton
