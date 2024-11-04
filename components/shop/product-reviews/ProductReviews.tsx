'use client'

import React from 'react'
import { ProductReviewForm } from '../..'
import { DataList } from '../..'
import ProductReviewsList from './ProductReviewsList'

export type ProductReviewsProps = {
	productId: string | number 
  enableSearch?: boolean
  enableSorting?: boolean
  enableFilters?: boolean
  enableCreate?: boolean
}

const ProductReviews: React.FC<ProductReviewsProps> = (props) => {
	const { productId, enableSearch, enableFilters, enableSorting, enableCreate } = props

  if(!productId) return null
	return (
		<DataList
			url={`/api/v1/shop/products/${productId}/reviews`}
			name="review"
			enableSearch={enableSearch}
			enableSorting={enableSorting}
			enableFilters={enableFilters}
      enableCreate={enableCreate}
			fields={[]}
			sortOptions={[
				{
					label: 'Date',
					name: 'created_at',
				},
				{
					label: 'Rating',
					name: 'rating',
				},
			]}
			filterOptions={[
				{
					label: 'Rating',
					field: 'rating',
					variant: 'ratings_scale',
				},
			]}
			list={ProductReviewsList}
			edit={ProductReviewForm}
			create={ProductReviewForm}
			slots={{
				toolbar: {
					buttonText: 'Add Product Review',
				},
			}}
			emptyTitle="No reviews yet"
			emptyDescription="Be the first to leave a review"
		/>
	)
}

export default ProductReviews
