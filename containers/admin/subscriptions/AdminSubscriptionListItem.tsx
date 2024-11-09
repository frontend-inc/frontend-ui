'use client'

import React from 'react'
import { ResourceListItem } from '../../../components'
import { Badge } from 'frontend-shadcn'

type AdminSubscriptionListItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminSubscriptionListItem: React.FC<AdminSubscriptionListItemProps> = (
	props
) => {
	const {
		resource: subscription,
		handleClick,
		handleEdit,
		handleDelete,
	} = props

	return (
		<ResourceListItem
			disableImage
			icon="CreditCard"
			primary={subscription?.name}
			secondary={subscription?.display_price}
			secondaryAction={
				subscription?.label && <Badge>{subscription?.label}</Badge>
			}
			color={'bg-amber-500'}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminSubscriptionListItem
