'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { MediaInput } from '../../../components/'

const AdminProductCollectionForm: React.FC<ResourceFormProps> = (props) => {
	
  let fields = [
		{ label: 'Media', name: 'image', variant: 'media' },
		{ label: 'Title', name: 'title', variant: 'string' },
    { label: 'Label', name: 'label', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
	]

	const inputOptions = {
		media: MediaInput,
	}

	return <ResourceForm {...props} fields={fields} inputOptions={inputOptions} />
}

export default AdminProductCollectionForm
