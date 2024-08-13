
import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminCommentItem } from '../../../containers'

const AdminCommentsList: React.FC = () => {

  const { apiUrl } = useAdmin()

  return(
    <ResourceList
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