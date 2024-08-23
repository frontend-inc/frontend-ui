import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { SortableResourceList, ResourceList, Drawer } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminActionItem, AdminZapItem } from '../../../containers'
import { ACTION_TYPES } from '../../../constants'
import AdminZapForm from '../zaps/AdminZapForm'
import AdminActionForm from './AdminActionForm'

const AdminActionsList: React.FC = () => {
	const { apiUrl } = useAdmin()

	const [open, setOpen] = useState(false)
	const [activeAction, setActiveAction] = useState()

	const handleClick = (action) => {
		setActiveAction(action)
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Stack p={2} direction="column" spacing={2}>
			<ResourceList
				url={`${apiUrl}/actions`}
				name="app_action"
				enableSearch
				enableCreate
				enableEdit
				enableDelete
				query={{
					sort_by: 'action_type',
					sort_direction: 'asc',
				}}
				filterOptions={[
					{
						label: 'Type',
						field: 'action_type',
						variant: 'multiple_choice',
						options: ACTION_TYPES,
					},
				]}
				edit={AdminActionForm}
				create={AdminActionForm}
				handleClick={handleClick}
				component={AdminActionItem}
				emptyIcon="Hook"
				emptyTitle="No actions"
				emptyDescription="No actions yet."
			/>
			<Drawer open={open} handleClose={handleClose}>
				<SortableResourceList
					enableBorder
					direction="column"
					//@ts-ignore
					url={`${apiUrl}/actions/${activeAction?.id}/zaps`}
					name="zap"
					enableSearch
					enableCreate
					enableEdit
					enableDelete
					query={{
						sort_by: 'position',
						sort_direction: 'asc',
					}}
					edit={AdminZapForm}
					create={AdminZapForm}
					component={AdminZapItem}
					emptyIcon="Zap"
					emptyTitle="No zaps"
					emptyDescription="No zaps yet."
				/>
			</Drawer>
		</Stack>
	)
}

export default AdminActionsList
