'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { FormFieldType } from '../../../types'

type AdminDocumentCreateFormProps = ResourceFormProps & {
	fields: FormFieldType[]
}

const AdminDocumentCreateForm: React.FC<AdminDocumentCreateFormProps> = (
	props
) => {
	const { fields = [] } = props || {}	

	return <ResourceForm {...props} fields={fields} />
}

export default AdminDocumentCreateForm
