'use client'

import React from 'react'
import { ResourceForm, TextInput } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { FormFieldType } from '../../../types'

type AdminDocumentCreateFormProps = ResourceFormProps & {
	fields: FormFieldType[]
}

const AdminDocumentCreateForm: React.FC<AdminDocumentCreateFormProps> = (
	props
) => {
	const { fields = [] } = props || {}

	const inputOptions = {
		youtube_video: TextInput,
		vimeo_video: TextInput,
		soundcloud_audio: TextInput,
		calendly_url: TextInput,
	}
	return <ResourceForm {...props} inputOptions={inputOptions} fields={fields} />
}

export default AdminDocumentCreateForm
