'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminQuestionListItem from './AdminQuestionListItem'
import AdminQuestionCreate from './AdminQuestionCreate'
import AdminQuestionEdit from './AdminQuestionEdit'
import AdminQuestionShow from './AdminQuestionShow'
import AdminQuestionToolbar from './AdminQuestionToolbar'

type AdminQuestionListProps = {
  formId: string
}

const AdminQuestionsList: React.FC<AdminQuestionListProps> = (props) => {

  const { formId } = props 
 
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			selectable
      sortable
			url={`${apiUrl}/forms/${formId}/questions`}
			name='question'
			enableSearch
			enableEdit
			enableDelete
			enableCreate
			enableShow			
      query={{
        sort_by: 'position',
        sort_direction: 'asc'
      }}
			create={AdminQuestionCreate}
			edit={AdminQuestionEdit}
			show={AdminQuestionShow}
			toolbar={AdminQuestionToolbar}
			component={AdminQuestionListItem}
			emptyIcon="Text"
			emptyTitle="No questions"
			emptyDescription="No questions added yet."
      slots={{
        toolbar: {
          formId
        }
      }}
		/>
	)
}

export default AdminQuestionsList
