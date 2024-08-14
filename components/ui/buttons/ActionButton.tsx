import React from 'react'
import { Button } from '@mui/material'
import { useButtons } from '../../../hooks'
import { ButtonType, UserType } from '../../../types'
import { IconLoading, Icon } from '../..'

type ActionProps = {
	button: ButtonType
	resource: any
  user?: UserType
	rest?: any
}

const ActionButton: React.FC<ActionProps> = (props) => {
	const { button, user, resource, ...rest } = props

	const { icon, label = 'View' } = button || {}

	const { loading, handleClick } = useButtons({
		button,
		resource,
    user
	})

	const onClick = (ev) => {
		handleClick(ev)
	}

	return (
		<Button
			fullWidth
			sx={sx.button}
			startIcon={
        <>
        <IconLoading loading={loading} />
				{(!loading && icon) && (
					<Icon
						name={icon}
						size={20}
						color={
							button?.color == 'primary'
								? 'primary.contrastText'
								: 'secondary.contrastText'
						}
					/>
				)}
        </>
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
