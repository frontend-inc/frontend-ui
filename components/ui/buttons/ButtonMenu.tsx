import React from 'react'
import { MenuItem } from '@mui/material'
import { useButtons } from '../../../hooks'
import { ActionType } from '../../../types'

type ButtonMenuProps = {	
  resource: any
  action: ActionType
  actionId?: number
  path?: string
  icon?: string 
  label: string
	variant?: 'text' | 'outlined' | 'contained'
	color?: 'primary' | 'secondary'		
  onClick?: (ev: any) => void
}

const ButtonMenu: React.FC<ButtonMenuProps> = (props) => {
	const { onClick, resource, action, actionId, path, label } = props	

	const { handleClick } = useButtons({
		action,
    actionId,
    path,
    resource,
	})

	return (
		<MenuItem onClick={onClick ? onClick : handleClick }>
			{label}
		</MenuItem>
	)
}

export default ButtonMenu
