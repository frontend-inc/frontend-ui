import React from 'react'
import { IconButton } from '@mui/material'

type ButtonIconProps = {
	icon: any
	onClick: () => void
	size?: number
	disabled?: boolean
}

const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
	const { onClick, icon: Icon, size = 24, disabled = false } = props

	return (
		<IconButton onClick={onClick} disabled={disabled}>
			<Icon
				sx={{
					height: size,
					width: size,
				}}
			/>
		</IconButton>
	)
}

export default ButtonIcon
