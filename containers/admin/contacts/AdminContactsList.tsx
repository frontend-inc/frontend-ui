
import React from 'react'
import { Resources } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminContactItem } from '../../../containers'
import AdminContactForm from './AdminContactForm'

const AdminContactsList: React.FC = () => {

  const { apiUrl } = useAdmin()

  return(
    <Resources
      enableBorder={false}
      url={`${apiUrl}/contacts`}
      name="contact"
      enableSearch
      enableCreate
      enableEdit
      enableShow
      enableDelete
      sortOptions={[
        { name: 'created_at', label: 'Date' },
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'Email' },
        { name: 'phone', label: 'Phone' },
        { name: 'company', label: 'Company' },
      ]}
      displayFields={[
        { name: 'name', label: 'Name', variant: 'string' },
        { name: 'email', label: 'Email', variant: 'string' },
        { name: 'phone', label: 'Phone', variant: 'string' },
        { name: 'company', label: 'Company', variant: 'string' },
        { name: 'message', label: 'Message', variant: 'text' },
      ]}
      edit={ AdminContactForm }
      create={ AdminContactForm }
      component={AdminContactItem}
    />
  )
}

export default AdminContactsList