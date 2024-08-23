import React from 'react'
import { ReviewForm } from '../../../components'
import { DataList } from '../../../components'
import ReviewsList from './ReviewsList'

export type ReviewsProps = {
	handle: string
	url: string
}

const Reviews: React.FC<ReviewsProps> = (props) => {
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
			list={ReviewsList}
			edit={ReviewForm}
			create={ReviewForm}
			slots={{
				toolbar: {
					buttonText: 'Add Review',
				},
			}}
		/>
	)
}

export default Reviews

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
