import React from 'react'
import ReviewItem from './ReviewItem'
import { LoadMore, DataLayout } from '../../../components'
import { useResourceContext } from 'frontend-js'

const ReviewsList = (props) => {
  
  const { 
    loading, 
    resources,
    query,
    setQuery,
    page,
    numPages  
  } = useResourceContext()

  const handleLoadMore = () => {
		let perPage = (query?.per_page || 12) + 12
		setQuery({
			...query,
			per_page: perPage,
		})
	}

  return (
    <DataLayout loading={loading}>
      {!loading && resources?.map((resource, index) => (
        <ReviewItem
          key={index}
          resource={resource}
        />
      ))}
      <LoadMore 
        page={page} 
        numPages={numPages} 
        loadMore={handleLoadMore} 
      />        
    </DataLayout>    
  )
}

export default ReviewsList