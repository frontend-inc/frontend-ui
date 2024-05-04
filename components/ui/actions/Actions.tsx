import React from 'react'
import { Stack } from '@mui/material'
import ActionButton from './ActionButton'
import ActionMenuItem from './ActionMenuItem'
import { ActionType } from '../../../types'
import { MenuButton } from '../../../components'

type ActionsProps = {
	actions: ActionType[]
	resource: any
	justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

const Actions: React.FC<ActionsProps> = (props) => {
	const { actions, resource, justifyContent = 'center' } = props
	return (
		<Stack
			sx={{
				justifyContent,
			}}
			direction="row"
			spacing={1}
		>
			<Stack
				sx={{
					...sx.buttons,
					justifyContent,
				}}
				direction={{ sm: 'row', xs: 'column' }}
				spacing={1}
			>
				{actions?.slice(0, 2)?.map((action, index) => (
					<ActionButton key={index} action={action} resource={resource} />
				))}
			</Stack>
			{actions?.length > 2 && (
				<MenuButton>
					{actions?.slice(2, actions.length)?.map((action, index) => (
						<ActionMenuItem key={index} action={action} resource={resource} />
					))}
				</MenuButton>
			)}
		</Stack>
	)
}

export default Actions

const sx = {
	buttons: {
		width: '100%',
	},
}
