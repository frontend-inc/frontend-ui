import React from 'react'
import { Button } from '@mui/material'
import { useActions } from '../../../hooks'
import { ActionType } from '../../../types'
import { Icon } from '../../../components'

type ActionProps = {
	action: ActionType
	resource: any
	rest?: any
}

const ActionButton: React.FC<ActionProps> = (props) => {
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
		<Button
			fullWidth
			sx={sx.button}
			startIcon={
				icon && (
					<Icon
						name={icon}
						size={20}
						color={
							action?.color == 'primary'
								? 'primary.contrastText'
								: 'secondary.contrastText'
						}
					/>
				)
			}
			onClick={onClick}
			variant={action?.variant || 'contained'}
			color={action?.color || 'secondary'}
			{...rest}
		>
			{label}
		</Button>
	)
}

export default ActionButton

const sx = {
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}
