import React from 'react'
import {
	FieldRating,
	UserAvatar,
	Label,
	ResourceListItem,
} from '../../../components'
import { truncate } from '../../../helpers'
import { Typography } from '@mui/material'

type AdminReviewItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminReviewItem: React.FC<AdminReviewItemProps> = (props) => {
	const { resource: review, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			primary={<FieldRating size="small" value={review?.rating} />}
			secondary={
				<Typography variant="body2" color="text.secondary">
					{truncate(review?.title, 40)}
				</Typography>
			}
			avatar={<UserAvatar user={review?.user} />}
			secondaryActions={review?.flagged && <Label label="Flagged" />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminReviewItem
