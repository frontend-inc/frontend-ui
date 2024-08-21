
import React from 'react'
import { Resources } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminCommentItem } from '../../../containers'

const AdminCommentsList: React.FC = () => {

  const { apiUrl } = useAdmin()

  return(
    <Resources      
      url={`${apiUrl}/comments`}
      name="comment"
      enableSearch
      enableDelete
      filterOptions={[
        { field: 'flagged', label: 'Flagged', variant: 'boolean' },
      ]}      
      component={AdminCommentItem}
      emptyIcon="MessageSquare"
      emptyTitle="No comments"
      emptyDescription="No comments yet."
    />
  )
}

export default AdminCommentsList