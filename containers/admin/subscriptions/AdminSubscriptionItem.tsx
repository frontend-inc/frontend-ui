import React from 'react'
import { Label, ResourceListItem } from '../../../components'
import * as COLORS from '@mui/material/colors'

type AdminSubscriptionItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminSubscriptionItem: React.FC<AdminSubscriptionItemProps> = (props) => {
	const {
		resource: subscription,
		handleClick,
		handleEdit,
		handleDelete,
	} = props

	return (
		<ResourceListItem
			icon="CreditCard"
			primary={subscription?.name}
			secondary={subscription?.display_price}
			secondaryAction={
				subscription?.label && <Label label={subscription?.label} />
			}
			color={COLORS.amber[500]}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminSubscriptionItem
