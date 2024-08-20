
import React from 'react'
import { Resources } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminTeamItem } from '../../../containers'

const AdminTeamsList: React.FC = () => {

  const { apiUrl } = useAdmin()

  return(
    <Resources
      enableBorder
      url={`${apiUrl}/teams`}
      name="team"
      enableSearch
      enableEdit
      sortOptions={[
        { name: 'name', label: 'Name' },
        { name: 'created_at', label: 'Date' },
      ]}
      fields={[
        { name: 'image', label: 'Logo', variant: 'image' },
        { name: 'name', label: 'Name', variant: 'string' },
      ]}
      component={AdminTeamItem}
    />
  )
}

export default AdminTeamsList