import React from 'react'
import { Stack } from '@mui/material'
import ButtonAction from './ButtonAction'
import { ButtonType } from '../../../types'
import { UserType } from 'frontend-js'

type ButtonActionsProps = {
	buttons: ButtonType[]
	resource?: any
	user?: UserType
	numVisible?: number
	color?: string
	size?: 'small' | 'medium' | 'large'
	justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

const ButtonActions: React.FC<ButtonActionsProps> = (props) => {
	const { buttons, size, justifyContent } = props

	return (
		<Stack
			sx={{
				...sx.root,
				justifyContent,
			}}
			direction="row"
			spacing={0}
		>
			{buttons?.length > 0 && (
				<Stack
					sx={{
						...sx.buttons,
						justifyContent,
					}}
					direction={{ sm: 'row', xs: 'column' }}
					spacing={1}
				>
					{buttons.map((button, index) => {
						return (
							<ButtonAction
								key={index}
								color={button?.color}
								icon={button?.icon}
								path={button?.path}
								url={button?.url}
								//@ts-ignore
								size={size}
								onClick={button?.onClick}
								variant={button?.variant || 'contained'}
							>
								{button?.label}
							</ButtonAction>
						)
					})}
				</Stack>
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
