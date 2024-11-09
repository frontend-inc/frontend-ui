'use client'

import React from 'react'
import {
	FieldRating,
	UserAvatar,
	Label,
	ResourceListItem,
} from '../../../components'
import { truncate } from '../../../helpers'
import { Typography } from '../../../components/core'

type AdminReviewListItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminReviewListItem: React.FC<AdminReviewListItemProps> = (props) => {
	const { resource: review, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			disableImage
			primary={<FieldRating size="sm" value={review?.rating} />}
			secondary={
				<Typography variant="body2" className="text-muted-foreground">
					{truncate(review?.title, 40)}
				</Typography>
			}
			avatar={<UserAvatar user={review?.user} />}
			secondaryAction={review?.flagged && <Label label="Flagged" />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminReviewListItem
