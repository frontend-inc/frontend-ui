import React from 'react'
import { Stack } from '@mui/material'
import ButtonAction from './ButtonAction'
import ButtonMenu from './ButtonMenu'
import { ButtonType } from '../../../types'
import { UserType } from 'frontend-js'
import { MenuButton } from '../..'

type ButtonActionsProps = {
	buttons: ButtonType[]
	resource: any
	user?: UserType
	numVisible?: number
	color?: string
	size?: 'small' | 'medium' | 'large'
	justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

const ButtonActions: React.FC<ButtonActionsProps> = (props) => {
	const {
		color,
		buttons,
		resource,
		user,
		numVisible = 2,
		size,
		justifyContent,
	} = props

	const buildButtonPath = (button, resource, user) => {
		let { action_type: action, path } = button
		if (action == 'navigate_user') {
			action = 'navigate'
			path = `${path}/${user?.username}`
		} else if (action == 'navigate_cms') {
			action = 'navigate'
			path = `${path}/${resource?.handle}`
		}
		return { action, path }
	}

	return (
		<Stack
			sx={{
				...sx.root,
				justifyContent,
			}}
			direction="row"
			spacing={0}
		>
			{buttons?.slice(0, numVisible)?.length > 0 && (
				<Stack
					sx={{
						...sx.buttons,
						justifyContent,
					}}
					direction={{ sm: 'row', xs: 'column' }}
					spacing={1}
				>
					{buttons?.slice(0, numVisible)?.map((button, index) => {
						let { action, path } = buildButtonPath(button, resource, user)
						return (
							<ButtonAction
								key={index}
								color={button?.color}
								icon={button?.icon}
								action={action}
								actionId={button?.action_id}
								path={path}
								//@ts-ignore
								onClick={button?.onClick}
								variant={button?.variant || 'contained'}
								size={size}
								resource={resource}
							>
								{button?.label}
							</ButtonAction>
						)
					})}
				</Stack>
			)}
			{buttons?.length > numVisible && (
				<MenuButton color={color}>
					{buttons?.slice(numVisible, buttons.length)?.map((button, index) => {
						let { action, path } = buildButtonPath(button, resource, user)
						return (
							<ButtonMenu
								key={index}
								action={action}
								path={path}
								actionId={button?.action_id}
								label={button?.label}
								icon={button?.icon}
								color={button?.color}
								onClick={button?.onClick}
								resource={resource}
							/>
						)
					})}
				</MenuButton>
			)}
		</Stack>
	)
}

export default ButtonActions

const sx = {
	root: {
		justifyContent: 'space-between',
	},
	buttons: {
		width: '100%',
		justifyContent: 'flex-start',
	},
}
