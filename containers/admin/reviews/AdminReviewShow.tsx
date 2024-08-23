import React from 'react'
import { ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'

const AdminReviewShow: React.FC<ResourceShowProps> = (props) => {

  const { resource: review } = props 

  return(
    <ResourceDetails 
      image={ review?.document?.image?.url }
      primary={ review?.user?.name }
      secondary={ `@${review?.user?.username}` }
      { ...props }
    />
  )
}

export default AdminReviewShow
