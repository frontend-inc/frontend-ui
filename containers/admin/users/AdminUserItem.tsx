import React from 'react'
import { Typography } from '@mui/material'
import { Label, UserAvatar, ResourceListItem } from '../../../components'
import { ResourceProps } from '../../../components/cms/resources/ResourceItem'
import { useAuth } from 'frontend-js'

const AdminUserItem: React.FC<ResourceProps> = (props) => {
	const { resource: user, handleClick, handleEdit, handleDelete } = props
	const { currentUser } = useAuth()

	return (
		<ResourceListItem
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
		/>
	)
}

export default AdminUserItem
