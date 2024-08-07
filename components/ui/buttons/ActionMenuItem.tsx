import React from 'react'
import { MenuItem } from '@mui/material'
import { useButtons } from '../../../hooks'
import { ButtonType } from '../../../types'

type ActionMenuItemProps = {
	action: ButtonType
	variant?: 'text' | 'outlined' | 'contained'
	color?: 'primary' | 'secondary'
	resource: any
	rest?: any
}

const ActionMenuItem: React.FC<ActionMenuItemProps> = (props) => {
	const { action, resource, ...rest } = props

	const { icon, label = 'View' } = action || {}

	const { handleClick } = useButtons({
		action,
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
