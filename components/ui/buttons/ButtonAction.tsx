import React from 'react'
import { Button } from '@mui/material'
import { useButtons } from '../../../hooks'
import { ActionType } from '../../../types'
import { IconLoading, Icon } from '../..'

type ActionProps = {
	icon?: string
	color?: 'primary' | 'secondary'
	size?: 'small' | 'medium' | 'large'
	variant?: 'text' | 'outlined' | 'contained'
	action: ActionType
	actionId?: number
	path?: string
	resource?: any
	onClick?: () => void
	children: React.ReactNode
}

const ButtonAction: React.FC<ActionProps> = (props) => {
	const {
		children,
		icon,
		action,
		path,
		actionId,
		onClick,
		color = 'secondary',
		variant = 'contained',
		size = 'medium',
		resource,
		...rest
	} = props

	const { loading, handleClick } = useButtons({
		action,
		actionId,
		path,
		resource,
	})

	return (
		<Button
			fullWidth
			sx={sx.button}
			size={size}
			startIcon={
				<>
					<IconLoading loading={loading} />
					{!loading && icon && (
						<Icon
							name={icon}
							
							color={
								color == 'primary'
									? 'primary.contrastText'
									: 'secondary.contrastText'
							}
						/>
					)}
				</>
			}
			onClick={onClick ? onClick : handleClick}
			variant={variant}
			color={color}
			{...rest}
		>
			{children}
		</Button>
	)
}

export default ButtonAction

const sx = {
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}
