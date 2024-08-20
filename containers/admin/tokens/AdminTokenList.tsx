import React from 'react'
import { Resources } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminTokenItem } from '../../../containers'

const AdminTokenList: React.FC = () => {

  const { apiUrl } = useAdmin()

  return( 
    <Resources
      url={`${apiUrl}/tokens`}
      name="token"
      enableCreate
      enableEdit
      enableSearch
      enableDelete
      filterOptions={[
        {
          label: 'Admin API Key',
          field: 'admin',
          variant: 'boolean',
        },
      ]}
      fields={[
        {
          label: 'Name',
          name: 'name',
          variant: 'string',
          placeholder: 'Enter name ...',
        },
        {
          label: 'Admin',
          name: 'admin',
          variant: 'boolean',
        },
      ]}
      component={AdminTokenItem}
      emptyIcon="Key"
      emptyTitle="No API Keys"
      emptyDescription="No API keys yet."
    />
  )
}

export default AdminTokenList