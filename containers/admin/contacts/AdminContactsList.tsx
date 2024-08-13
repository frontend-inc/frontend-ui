
import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminContactItem } from '../../../containers'

const AdminContactsList: React.FC = () => {

  const { apiUrl } = useAdmin()

  return(
    <ResourceList
      enableBorder={false}
      url={`${apiUrl}/contacts`}
      name="contact"
      enableSearch
      enableCreate
      enableEdit
      enableDelete
      sortOptions={[
        { name: 'created_at', label: 'Date' },
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'Email' },
        { name: 'phone', label: 'Phone' },
        { name: 'company', label: 'Company' },
      ]}
      fields={[
        { name: 'name', label: 'Name', variant: 'string' },
        { name: 'email', label: 'Email', variant: 'string' },
        { name: 'phone', label: 'Phone', variant: 'string' },
        { name: 'company', label: 'Company', variant: 'string' },
        { name: 'message', label: 'Message', variant: 'text' },
      ]}
      component={AdminContactItem}
    />
  )
}

export default AdminContactsList