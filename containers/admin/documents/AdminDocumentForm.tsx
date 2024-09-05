import React, { useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import AdminDocumentInput from './inputs/DocumentInput'
import { FieldType, SyntheticEventType } from '../../../types'
import { get } from 'lodash'

type AdminDocumentFormProps = {
	errors?: any
	fields: FieldType[]
	document: any
	collection: any
	handleChange: (e: SyntheticEventType) => void
	handleAddReferences: (items: any[]) => void
	handleRemoveReferences: (items: any[]) => void
	handleAddAttachment: (field: string, id: number) => void
	handleRemoveAttachment: (field: string) => void
}

const AdminDocumentForm: React.FC<AdminDocumentFormProps> = (props) => {
	const {
		errors,
		fields,
		document,
		collection,
		handleChange,
		handleAddReferences,
		handleRemoveReferences,
		handleAddAttachment,
		handleRemoveAttachment,
	} = props

	const [editableFields, setEditableFields] = useState<FieldType[]>([])

	useEffect(() => {
		if (fields) {
			let sortedFields = fields.sort((a, b) => a.position - b.position)
			setEditableFields(sortedFields)
		}
	}, [fields])

	if (!document) return null
	return (
		<Stack spacing={0}>
			{editableFields?.map((field, i) => (				
        <AdminDocumentInput
          key={i}
          errors={errors}
          field={field}
          value={get(document, field?.name)}
          placeholder={field.label?.toLowerCase()}
          handleChange={handleChange}
          document={document}

          collection={collection}
          handleAddReferences={handleAddReferences}
          handleRemoveReferences={handleRemoveReferences}
          handleAddAttachment={handleAddAttachment}
          handleRemoveAttachment={handleRemoveAttachment}
        />
			))}
		</Stack>
	)
}

export default AdminDocumentForm
