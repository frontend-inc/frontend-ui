'use client'

import React from 'react'
import { UserAvatar, ResourceListItem } from '../../../components'
import { Typography } from '../../../components'
import { Badge } from 'frontend-shadcn'

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
				<div className="flex flex-row space-x-2 items-center">					
					<Typography variant="body1">{contact?.name || 'Anonymous'}</Typography>					
					<Badge className="px-2 py-1">{contact?.source}</Badge>
				</div>
			}
			secondary={contact?.email}
			avatar={
				<UserAvatar
					user={{
						...contact,
						name: contact?.name || contact?.email || 'NA',
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
