import React from 'react'
import { MenuItem } from '@mui/material'
import { useButtons } from '../../../hooks'
import { ButtonType, UserType } from '../../../types'

type ActionMenuItemProps = {
	button: ButtonType
  user?: UserType
	variant?: 'text' | 'outlined' | 'contained'
	color?: 'primary' | 'secondary'
	resource: any
	rest?: any
}

const ActionMenuItem: React.FC<ActionMenuItemProps> = (props) => {
	const { button, resource, ...rest } = props

	const { icon, label = 'View' } = button || {}

	const { handleClick } = useButtons({
		button,
		resource,
	})

	const onClick = (ev) => {
		handleClick(ev)
	}

	return (
		<MenuItem onClick={onClick} {...rest}>
			{label}
		</MenuItem>
	)
}

export default ActionMenuItem
