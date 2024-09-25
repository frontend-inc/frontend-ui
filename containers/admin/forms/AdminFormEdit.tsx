import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { MediaInput } from '../documents'

const AdminFormEdit: React.FC<ResourceFormProps> = (props) => {

	let fields = [
		{ label: 'Image', name: 'image', variant: 'image' },
		{ label: 'Handle', name: 'handle', variant: 'string' },
		{ label: 'Title', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
	]

	return <ResourceForm {...props} fields={fields} />
}

export default AdminFormEdit
