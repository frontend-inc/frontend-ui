import React from 'react'
import { Label, ResourceListItem } from 'frontend-ui/components'
import * as COLORS from '@mui/material/colors'
import { Typography } from '@mui/material'

type AdminSubscriptionPlanItemProps = {
	resource: any
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminSubscriptionPlanItem: React.FC<AdminSubscriptionPlanItemProps> = (props) => {
	const {
		resource: subscriptionPlan,
		handleClick,
		handleEdit,
		handleDelete,
	} = props

	return (
		<ResourceListItem
			icon="CreditCard"
			title={<Typography variant="body1">{subscriptionPlan?.name}</Typography>}
			displayFields={[
				{
					label: 'Price',
					variant: 'string',
					name: 'display_price',
				},
			]}
			secondaryActions={
				subscriptionPlan?.label && <Label label={subscriptionPlan?.label} />
			}
			color={COLORS.amber[500]}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			resource={subscriptionPlan}
		/>
	)
}

export default AdminSubscriptionPlanItem
