import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminFormResponseItem from './AdminFormResponseItem'
import AdminFormResponseToolbar from './AdminFormResponseToolbar'
import AdminFormResponseShow from './AdminFormResponseShow'
import AdminFormResponseEdit from './AdminFormResponseEdit'

type AdminFormResponsesListProps = {
	formId: string
}

const AdminFormResponsesList: React.FC<
	AdminFormResponsesListProps
> = (props) => {
	const { formId } = props
	const { apiUrl } = useAdmin()
	const url = `${apiUrl}/forms/${formId}/form_responses`
	return (
		<ResourceList
			selectable
			url={url}
			name={'form_questions'}
			enableSearch      
      enableShow
      enableEdit 
			enableDelete
			toolbar={AdminFormResponseToolbar}
			component={AdminFormResponseItem}
      show={ AdminFormResponseShow }
      edit={ AdminFormResponseEdit }  
      sortOptions={[
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'Email' },
        { name: 'created_at', label: 'Date' },        
      ]}    
			emptyIcon="ListCheck"
			emptyTitle="No responses"
			emptyDescription="No forms have been submitted yet."
			slots={{
				toolbar: {
					url,
					formId,
				},
        show: {
          url,
					formId,
        },
        edit: {
					url,
					formId,
				},
			}}
		/>
	)
}

export default AdminFormResponsesList
