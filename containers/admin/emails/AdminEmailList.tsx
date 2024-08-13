import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminEmailItem } from '../../../containers'

const AdminEmailsList = () => {

  const { apiUrl } = useAdmin()

  return(
      <ResourceList
        url={`${apiUrl}/emails`}
        name="email"
        enableCreate
        enableEdit
        enableSearch
        enableDelete
        query={{
          sort_by: 'name',
          sort_direction: 'asc',
        }}
        fields={[
          { label: 'Name', name: 'name', variant: 'string' },
          { label: 'Subject', name: 'subject', variant: 'string' },
          { label: 'Body', name: 'body', variant: 'text' },
        ]}
        component={AdminEmailItem}
        emptyIcon="MessageSquare"
        emptyTitle="No email templates"
        emptyDescription="No email templates yet."
      />          
  )
}

export default AdminEmailsList 