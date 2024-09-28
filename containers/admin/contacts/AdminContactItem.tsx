import React from 'react'
import { Label, UserAvatar, ResourceListItem } from '../../../components'
import { Typography, Stack } from '@mui/material'

type AdminContactItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminContactItem: React.FC<AdminContactItemProps> = (props) => {
	const { resource: contact, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			primary={
				<Stack direction="row" spacing={1}>
					{contact?.name && (
						<Typography variant="body1" color="text.primary">
							{contact?.name}
						</Typography>
					)}
					<Label label={contact?.source} />
				</Stack>
			}
			secondary={contact?.email}
			avatar={
				<UserAvatar
					user={{
						...contact,
						name: contact?.name || contact?.email,
					}}
				/>
			}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminContactItem
