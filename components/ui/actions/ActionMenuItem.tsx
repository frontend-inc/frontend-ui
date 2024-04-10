import React from 'react'
import { MenuItem } from '@mui/material'
import { useActions } from '../../../hooks'
import { ActionType } from '../../../types'
import { Icon } from '../..'

type ActionMenuItemProps = {
	action: ActionType
	variant?: 'text' | 'outlined' | 'contained'
	color?: 'primary' | 'secondary'
	resource: any
	rest?: any
}

const ActionMenuItem: React.FC<ActionMenuItemProps> = (props) => {
	const { action, resource, ...rest } = props

	const { icon, label = 'View' } = action || {}

	const { handleClick } = useActions({
		action,
		resource,
	})

	const onClick = (ev) => {
		handleClick(ev)
	}

	return (
    <MenuItem 
      onClick={onClick}
      {...rest}
    >
			{label}
		</MenuItem>
	)
}

export default ActionMenuItem
