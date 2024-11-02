'use client'

import React from 'react'
import { ResourceForm, TextInput } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { FormFieldType } from '../../../types'
import { MediaInput } from '../../../components'

type AdminDocumentEditFormProps = ResourceFormProps & {
	fields?: FormFieldType[]
}

const AdminDocumentEditForm: React.FC<AdminDocumentEditFormProps> = (props) => {
	const { fields = [] } = props || {}
	
	const inputOptions = {
		image: MediaInput,
    video: MediaInput,
    youtube_video: TextInput,
    vimeo_video: TextInput,
    soundcloud_audio: TextInput,
    calendly_url: TextInput,
	}

	return <ResourceForm {...props} fields={fields} inputOptions={inputOptions} />
}

export default AdminDocumentEditForm
