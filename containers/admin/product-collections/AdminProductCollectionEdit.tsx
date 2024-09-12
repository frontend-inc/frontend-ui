import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { FormFieldType } from '../../../types'
import { MediaInput } from '../../../containers'

// Todo: Type error if we use MetafieldType
type AdminProductCollectionFormProps = ResourceFormProps & {
	metafields?: FormFieldType[]
}

const AdminProductCollectionForm: React.FC<AdminProductCollectionFormProps> = (props) => {
	const { metafields = [] } = props || {}	

	let fields = [
    { label: 'Media', name: 'image', variant: 'media' },
		{ label: 'Handle', name: 'handle', variant: 'string' },
		{ label: 'Title', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
		{ label: 'Label', name: 'label', variant: 'string' },
		...metafields,
	]

  const inputOptions = {
    media: MediaInput
  }

	return (
    <ResourceForm 
      fields={ fields }
      inputOptions={ inputOptions }
      { ...props }
    />		
	)
}

export default AdminProductCollectionForm
