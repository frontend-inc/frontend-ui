import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminSubscriptionForm: React.FC<ResourceFormProps> = (props) => {
	return (
		<ResourceForm
			{...props}
			fields={[
				{ name: 'label', label: 'Label', variant: 'string' },
				{ name: 'name', label: 'Name', variant: 'string' },
				{
					name: 'description',
					label: 'Description',
					variant: 'text',
				},
				{ name: 'price', label: 'Price', variant: 'number' },
				{
					name: 'interval',
					label: 'Subscription Interval',
					variant: 'select',
					options: [
						{ label: 'Daily', value: 'day' },
						{ label: 'Weekly', value: 'week' },
						{ label: 'Monthly', value: 'month' },
						{ label: 'Yearly', value: 'year' },
					],
				},
				{
					name: 'features',
					label: 'Plan features',
					variant: 'array',
				},
			]}
		/>
	)
}

export default AdminSubscriptionForm
