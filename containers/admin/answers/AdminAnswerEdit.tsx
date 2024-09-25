import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminAnswerEdit: React.FC<ResourceFormProps> = (props) => {

  const { resource } = props || {}

	let fields = [
    { label: 'Image', name: 'image', variant: 'media' },    
		{ label: 'Answer', name: 'title', variant: 'string' },
    { label: 'Value', name: 'value', variant: 'string' },
		{ label: 'Points', name: 'points', variant: 'number' },
	]

	return(
    <ResourceForm 
      {...props} 
      resource={resource}
      fields={fields} 
    />
  )
}

export default AdminAnswerEdit
