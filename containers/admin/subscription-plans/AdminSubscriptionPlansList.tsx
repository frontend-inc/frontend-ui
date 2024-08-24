import React from 'react'
import { ResourceList } from '../../../components'

import { useAdmin } from '../../../hooks'
import { AdminSubscriptionPlanItem } from '../../../containers'
import AdminSubscriptionPlanForm from './AdminSubscriptionPlanForm'

const AdminSubscriptionPlansList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			url={`${apiUrl}/subscription_plans`}
			name="subscription_plan"
			enableSearch
			enableCreate
			enableEdit
			enableDelete
			sortOptions={[
				{ name: 'name', label: 'Name' },
				{ name: 'price', label: 'price' },
			]}
			edit={AdminSubscriptionPlanForm}
			create={AdminSubscriptionPlanForm}
			component={AdminSubscriptionPlanItem}
		/>
	)
}

export default AdminSubscriptionPlansList