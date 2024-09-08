import React from 'react'
import { Label, ResourceListItem } from '../../../components'
import * as COLORS from '@mui/material/colors'

type AdminSubscriptionPlanItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminSubscriptionPlanItem: React.FC<AdminSubscriptionPlanItemProps> = (
	props
) => {
	const {
		resource: subscriptionPlan,
		handleClick,
		handleEdit,
		handleDelete,
	} = props

	return (
		<ResourceListItem
			icon="CreditCard"
			primary={subscriptionPlan?.name}
			secondary={subscriptionPlan?.display_price}
			secondaryAction={
				subscriptionPlan?.label && <Label label={subscriptionPlan?.label} />
			}
			color={COLORS.amber[500]}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminSubscriptionPlanItem
