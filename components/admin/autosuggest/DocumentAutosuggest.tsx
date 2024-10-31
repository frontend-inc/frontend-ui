'use client'

import React, { useEffect } from 'react'
import { useAdminCollections } from '../../../hooks'
import { RemoteAutosuggest } from '../../../components'
import { useAdmin } from '../../../hooks'

type DocumentAutosuggestProps = {
	errors?: any
	value: any
	name?: string
	label?: string
	collectionId?: string
	handleChange: any
	query?: any
	placeholder?: string
	enableSearchRemote?: boolean
	valueParam?: string
	direction?: 'row' | 'column'
}

const DocumentAutosuggest: React.FC<DocumentAutosuggestProps> = (props) => {
	const {
		errors,
		value,
		name = 'document_id',
		collectionId,
		label,
		handleChange,
		valueParam = 'id',
		placeholder = 'Select',
		direction = 'column',
	} = props

	const { apiUrl } = useAdmin()

	const { collection, findCollection } = useAdminCollections()

	useEffect(() => {
		if (collectionId) {
			findCollection(collectionId)
		}
	}, [collectionId])

	if (!collection?.name || !apiUrl) return null;
	return (
		<RemoteAutosuggest
			enableClear
			direction={direction}
			errors={errors}
			name={name}
			label={label}
			value={value}
			displayField="title"
			valueParam={valueParam}
			url={`${apiUrl}/${collection?.name}`}
			placeholder={placeholder}
			handleChange={handleChange}
		/>
	)
}

export default DocumentAutosuggest
