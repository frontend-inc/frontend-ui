import React from 'react'
import { ResourceList } from '../../../components'
import { 
  AdminMediaForm, 
  AdminMediaItem,
  AdminMediaShow 
} from '../..'
import { useAdmin } from '../../../hooks' 

type AdminMediaListProps = {
  unsplashApiKey: string
}

const AdminMediaList: React.FC<AdminMediaListProps> = (props) => {
  const { unsplashApiKey } = props || {}
	const { apiUrl } = useAdmin()

  const slots = {
    create: {
      unsplashApiKey
    },
    edit: {
      unsplashApiKey
    },
    list: {
      unsplashApiKey
    }
  }

	return (
		<ResourceList
      grid 
			url={`${apiUrl}/storage`}
			name="storage"
			enableCreate
			enableDelete
      enableShow
			query={{
				sort_by: 'created_at',
				sort_direction: 'desc',
			}}
			edit={AdminMediaForm}
			create={AdminMediaForm}
			component={AdminMediaItem}
      show={ AdminMediaShow }
			emptyIcon="Image"
			emptyTitle="No uploads"
			emptyDescription="No uploads yet."
      slots={ slots }
		/>
	)
}

export default AdminMediaList
