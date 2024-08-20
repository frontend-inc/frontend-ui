import React from 'react'
import { TeamAvatar, ResourceListItem } from '../../../components'

type AdminTeamItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminTeamItem: React.FC<AdminTeamItemProps> = (props) => {
	const { resource: team, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			primary={team?.name}
			avatar={<TeamAvatar team={team} />}			
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminTeamItem
