'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminCommentItem } from '../../../containers'
import AdminCommentShow from './AdminCommentShow'

const AdminCommentsList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			url={`${apiUrl}/comments`}
			name="comment"
			enableSearch
			enableDelete
			enableShow
			filterOptions={[
				{
					name: 'flagged',
					label: 'Flagged',
					options: [
						{ label: 'Flagged', value: true },
						{ label: 'Not Flagged', value: false },
					],
				},
			]}
			component={AdminCommentItem}
			show={AdminCommentShow}
			emptyIcon="ri-message-2-fill"
			emptyTitle="No comments"
			emptyDescription="No comments yet."
		/>
	)
}

export default AdminCommentsList
