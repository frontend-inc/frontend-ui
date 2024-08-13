import React from 'react'
import { Label, ResourceListItem } from 'frontend-ui/components'

type AdminRoleItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminRoleItem: React.FC<AdminRoleItemProps> = (props) => {
  const { resource: role, handleEdit, handleDelete } = props || {}

	return (
    <ResourceListItem
      enableBorder
      sortable
      icon="User"
      color="primary.main"
      resource={{
        title: role?.label,
        ...role,
      }}
      displayFields={[{ name: 'name', label: 'Name', variant: 'string' }]}
      secondaryActions={role?.internal ? <Label label="System" /> : null}
      handleEdit={!role?.internal ? handleEdit : undefined}
      handleDelete={!role?.internal ? handleDelete : undefined}
    />
	)
}

export default AdminRoleItem
