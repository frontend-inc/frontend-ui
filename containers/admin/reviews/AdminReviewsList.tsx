
import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminReviewItem } from '../../../containers'

const AdminReviewsList: React.FC = () => {

  const { apiUrl } = useAdmin()

  return(
    <ResourceList
      enableBorder={false}
      url={`${apiUrl}/reviews`}
      name="review"
      enableSearch
      enableDelete
      filterOptions={[
        {
          field: 'rating',
          label: 'Rating',
          variant: 'ratings_scale',
        },
        {
          field: 'flagged',
          label: 'Flagged',
          variant: 'boolean',
        },
      ]}
      component={AdminReviewItem}
      emptyIcon="Star"
      emptyTitle="No reviews found"
      emptyDescription="No reviews found for this app"
    />
  )
}

export default AdminReviewsList