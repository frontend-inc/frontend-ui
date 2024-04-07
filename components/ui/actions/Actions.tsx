import React from 'react'
import { Stack } from '@mui/material'
import ActionButton from './ActionButton'
import { ActionType } from '../../../types'

type ActionsProps = {
	actions: ActionType[]
	resource: any
}

const Actions: React.FC<ActionsProps> = (props) => {
	const { actions, resource } = props

	return (
		<Stack direction="row" spacing={1}>
			{actions.map((action, index) => (
				<ActionButton
					key={index}
					color={index == 0 ? 'primary' : 'secondary'}
					action={action}
					resource={resource}
				/>
			))}
		</Stack>
	)
}

export default Actions
