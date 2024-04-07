import React from 'react'
import { Button } from '@mui/material'
import { useActions } from '../../../hooks'
import { ActionType } from '../../../types'
import { Icon } from '../..'

type ActionProps = {
	action: ActionType
	variant?: 'text' | 'outlined' | 'contained'
	color?: 'primary' | 'secondary'
	resource: any
	rest?: any
}

const ActionButton: React.FC<ActionProps> = (props) => {
	const { color, variant = 'contained', action, resource, ...rest } = props

	const { icon, label = 'View' } = action || {}

	const { handleClick } = useActions({
		action,
		resource,
	})

	const onClick = (ev) => {
		handleClick(ev)
	}

	return (
		<Button onClick={onClick} variant={variant} color={color} {...rest}>
			{label}
		</Button>
	)
}

export default ActionButton
