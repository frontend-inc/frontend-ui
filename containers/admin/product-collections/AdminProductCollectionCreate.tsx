'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminProductForm: React.FC<ResourceFormProps> = (props) => {
	
  let fields = [
		{ label: 'Image', name: 'image', variant: 'image' },
		{ label: 'Title', name: 'title', variant: 'string' },
    { label: 'Label', name: 'label', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },    		
	]

	return <ResourceForm {...props} fields={fields} />
}

export default AdminProductForm
