'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import AdminReviewListItem from './AdminReviewListItem'
import AdminReviewShow from './AdminReviewShow'
import { useAdmin } from '../../../hooks'

const AdminReviewsList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			enableBorder={false}
			url={`${apiUrl}/reviews`}
			name="review"
			enableShow
			enableSearch
			enableDelete
			sortOptions={[
				{ name: 'created_at', label: 'Date' },
				{ name: 'rating', label: 'Rating' },
			]}
			filterOptions={[
				{
					label: 'Rating',
					name: 'rating',
					options: [
						{ label: '1 Star', value: 1 },
						{ label: '2 Stars', value: 2 },
						{ label: '3 Stars', value: 3 },
						{ label: '4 Stars', value: 4 },
						{ label: '5 Stars', value: 5 },
					],
				},
				{
					label: 'Flagged',
					name: 'flagged',
					options: [
						{ label: 'Flagged', value: true },
						{ label: 'Not flagged', value: false },
					],
				},
			]}
			displayFields={[
				{ name: 'rating', label: 'Rating', variant: 'rating' },
				{ name: 'body', label: 'Review', variant: 'text' },
			]}
			component={AdminReviewListItem}
			show={AdminReviewShow}
			emptyIcon="ri-star-fill"
			emptyTitle="No reviews found"
			emptyDescription="No reviews found for this app"
		/>
	)
}

export default AdminReviewsList
