
import React from 'react'
import { SortableResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminRoleItem } from '../../../containers'
import AdminRoleForm from './AdminRoleForm'

const AdminRolesList: React.FC = () => {

  const { apiUrl } = useAdmin()

  return(
    <SortableResourceList
      url={`${apiUrl}/roles`}
      name="role"
      enableCreate
      enableEdit
      enableSearch
      enableDelete
      query={{
        sort_by: 'position',
        sort_direction: 'asc',
      }}      
      create={ AdminRoleForm }
      edit={ AdminRoleForm }
      component={AdminRoleItem}
      emptyIcon="Users"
      emptyTitle="No roles"
      emptyDescription="No user roles yet."
    />
  )
}

export default AdminRolesList