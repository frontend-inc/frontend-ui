
import React from 'react'
import { Resources } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminCommentItem } from '../../../containers'
import AdminCommentShow from './AdminCommentShow'

const AdminCommentsList: React.FC = () => {

  const { apiUrl } = useAdmin()

  return(
    <Resources      
      url={`${apiUrl}/comments`}
      name="comment"
      enableSearch
      enableDelete
      enableShow 
      filterOptions={[
        { field: 'flagged', label: 'Flagged', variant: 'boolean' },
      ]}      
      component={AdminCommentItem}
      show={ AdminCommentShow }
      displayFields={[
        { name: 'document.title', variant: 'string', label: 'Item' },
        { name: 'body', variant: 'text', label: 'Comment' },
      ]}
      emptyIcon="MessageSquare"
      emptyTitle="No comments"
      emptyDescription="No comments yet."
    />
  )
}

export default AdminCommentsList