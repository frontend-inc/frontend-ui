import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminFormResponseEdit: React.FC<ResourceFormProps> = (props) => {

	let fields = [
		{ label: 'Image', name: 'image', variant: 'image' },
		{ label: 'Name', name: 'Name', variant: 'string' },
		{ label: 'Email', name: 'email', variant: 'string' },		
	]

	return <ResourceForm {...props} fields={fields} />
}

export default AdminFormResponseEdit
