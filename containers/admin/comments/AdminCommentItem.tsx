import React from 'react'
import { UserAvatar, Label, ResourceListItem } from '../../../components'
import { truncate } from '../../../helpers'

type AdminCommentItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminCommentItem: React.FC<AdminCommentItemProps> = (props) => {
	const { resource: comment, handleClick, handleEdit, handleDelete } = props

	const getCommentUserName = (comment) => {
		return comment?.user?.first_name + ' ' + comment?.user?.last_name
	}

	return (
		<ResourceListItem
			resource={comment}
			title={getCommentUserName(comment)}
			displayFields={[
				{
					label: 'User',
					name: 'user.username',
					variant: 'string',
				},
				{
					label: 'Description',
					variant: 'text',
					name: 'body',
				},
			]}
			description={truncate(comment?.body)}
			avatar={<UserAvatar user={comment?.user} />}
			secondaryActions={comment?.flagged && <Label label="Flagged" />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminCommentItem
