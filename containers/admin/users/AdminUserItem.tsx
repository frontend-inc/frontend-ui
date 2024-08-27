import React from 'react'
import { Typography } from '@mui/material'
import { Label, UserAvatar, ResourceListItem } from '../../../components'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'
import { useAuth } from 'frontend-js'

const AdminUserItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: user,
		selectable,
		selected,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		...rest
	} = props

	const { currentUser } = useAuth()

	return (
		<ResourceListItem
			selectable={selectable}
			selected={selected}
			primary={
				<Typography variant="body1" color="text.primary">
					{user?.name} <Label label={user.role} />
				</Typography>
			}
			secondary={`@${user?.username}`}
			secondaryActions={user.paid && <Label label={'Paid'} />}
			avatar={<UserAvatar user={user} />}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminUserItem
