import React from 'react'
import { ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'

const AdminCommentShow: React.FC<ResourceShowProps> = (props) => {
	const { resource: comment } = props

	return (
		<ResourceDetails
			image={comment?.document?.image?.url}
			primary={comment?.user?.name}
			secondary={`@${comment?.user?.username}`}
			{...props}
      fields={[
        { name: 'body', label: 'Comment', variant: 'text' },        
      ]}
		/>
	)
}

export default AdminCommentShow
