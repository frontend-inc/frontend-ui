import React from 'react'
import { Button } from '@mui/material'
import { useButtons } from '../../../hooks'
import { ButtonType } from '../../../types'
import { Icon } from '../..'

type ActionProps = {
	button: ButtonType
	resource: any
	rest?: any
}

const ActionButton: React.FC<ActionProps> = (props) => {
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
		<Button
			fullWidth
			sx={sx.button}
			startIcon={
				icon && (
					<Icon
						name={icon}
						size={20}
						color={
							button?.color == 'primary'
								? 'primary.contrastText'
								: 'secondary.contrastText'
						}
					/>
				)
			}
			onClick={onClick}
			variant={button?.variant || 'contained'}
			color={button?.color || 'secondary'}
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
