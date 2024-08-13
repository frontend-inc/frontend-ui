import React from 'react'
import { UserAvatar, Label, ResourceListItem } from '../../../components'

type ReviewItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminReviewItem: React.FC<ReviewItemProps> = (props) => {
	const { resource: review, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			resource={review}
			displayFields={[
				{
					label: 'Rating',
					variant: 'rating',
					name: 'rating',
				},
				{
					label: 'Description',
					variant: 'text',
					name: 'description',
				},
			]}
			avatar={<UserAvatar user={review?.user} />}
			secondaryActions={review?.flagged && <Label label="Flagged" />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminReviewItem
