import React from 'react'
import { UserAvatar, ResourceListItem } from '../../../components'

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
      primary={ contact?.name } 
      secondary={ contact?.email }
			avatar={<UserAvatar user={contact} />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminContactItem
