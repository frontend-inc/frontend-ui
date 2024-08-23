import React from 'react'
import { UserAvatar, ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'
import { MetafieldType } from '../../../types'

type AdminUserShowProps = ResourceShowProps & {
  metafields?: MetafieldType[]
}

const AdminUserShow: React.FC<AdminUserShowProps> = (props) => {	

  const { 
    resource, 
    loading, 
    open, 
    handleClose, 
    metafields = [],
    enableEdit,
    enableDelete, 
    handleDelete,
    handleEdit,
  } = props || {}

	let fields = [
		{ label: 'First name', name: 'first_name', variant: 'string' },
		{ label: 'Last name', name: 'last_name', variant: 'string' },
		{ label: 'Email', name: 'email', variant: 'string' },
    ...metafields
	]

	return (    
    <ResourceDetails
      loading={loading}
      open={ open }
      handleClose={ handleClose }
      avatar={ 
        <UserAvatar 
          user={ resource } 
          size={ 96 }
        />
      }      
      primary={ resource?.name }
      secondary={`@${resource?.username}`}        
      label={ resource?.role }
      enableEdit={ enableEdit }
      enableDelete={ enableDelete }
      handleEdit={ handleEdit }
      handleDelete={ handleDelete }
      resource={ resource }
      fields={ fields }
    />
	)
}

export default AdminUserShow
