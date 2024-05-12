import React from 'react'
import { Stack } from '@mui/material'
import ActionButton from './ActionButton'
import ActionMenuItem from './ActionMenuItem'
import { ActionType } from '../../../types'
import { MenuButton } from '../../../components'

type ActionsProps = {
	actions: ActionType[]
	resource: any
	numVisible?: number
	color?: string
	justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

const Actions: React.FC<ActionsProps> = (props) => {
	const { color, actions, resource, numVisible = 2, justifyContent } = props
	return (
		<Stack
			sx={{
				...sx.root,
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
				{actions?.slice(0, numVisible)?.map((action, index) => (
					<ActionButton key={index} action={action} resource={resource} />
				))}
			</Stack>
			{actions?.length > numVisible && (
				<MenuButton color={color}>
					{actions?.slice(numVisible, actions.length)?.map((action, index) => (
						<ActionMenuItem key={index} action={action} resource={resource} />
					))}
				</MenuButton>
			)}
		</Stack>
	)
}

export default Actions

const sx = {
	root: {
		width: '100%',
		justifyContent: 'space-between',
	},
	buttons: {
		width: '100%',
		justifyContent: 'flex-start',
	},
}
