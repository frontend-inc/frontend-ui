import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminAnswerEdit: React.FC<ResourceFormProps> = (props) => {

	let fields = [
		{ label: 'Image', name: 'image', variant: 'image' },
		{ label: 'Answer', name: 'title', variant: 'string' },
		{ label: 'Points', name: 'points', variant: 'number' },
	]

	return <ResourceForm {...props} fields={fields} />
}

export default AdminAnswerEdit
