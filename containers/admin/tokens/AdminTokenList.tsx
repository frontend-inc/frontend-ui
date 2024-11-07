'use client'

import React from 'react'
import { ResourceList } from '../../../components'

import { useAdmin } from '../../../hooks'
import { AdminTokenItem } from '../../../containers'
import AdminTokenForm from './AdminTokenForm'

const AdminTokenList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			url={`${apiUrl}/tokens`}
			name="token"
			enableCreate
			enableEdit
			enableSearch
			enableDelete
			filterOptions={[
				{
					label: 'Admin API Key',
					name: 'admin',
					options: [
            { label: 'Admin Key', value: true },
            { label: 'Public Key', value: false },
          ]
				},
			]}
			edit={AdminTokenForm}
			create={AdminTokenForm}
			component={AdminTokenItem}
			emptyIcon="Key"
			emptyTitle="No API Keys"
			emptyDescription="No API keys yet."
		/>
	)
}

export default AdminTokenList
