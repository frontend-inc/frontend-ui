import React from 'react'
import { ProductReviewForm } from '../..'
import { DataList } from '../..'
import ProductReviewsList from './ProductReviewsList'

export type ProductReviewsProps = {
	handle: string
	url: string
}

const ProductReviews: React.FC<ProductReviewsProps> = (props) => {
	const { url, handle } = props

	return (
		<DataList
			url={`${url}/${handle}/reviews`}
			name="review"
			enableSearch
			enableSorting
			enableFilters
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
			enableCreate
			enableEdit
			enableDelete
			list={ProductReviewsList}
			edit={ProductReviewForm}
			create={ProductReviewForm}
			slots={{
				toolbar: {
					buttonText: 'Add Product Review',
				},
			}}
		/>
	)
}

export default ProductReviews

const sx = {
	root: {
		py: 2,
		pb: 1.5,
		borderColor: 'divider',
	},
	reviewHeader: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}