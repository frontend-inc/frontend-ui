'use client'

import React from 'react'
import { ResourceModal, ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'
import { MetafieldType } from '../../../types'

type AdminDocumentShowProps = ResourceShowProps & {
	fields?: MetafieldType[]
}

const AdminDocumentShow: React.FC<AdminDocumentShowProps> = (props) => {
	const {
		resource,
		loading,
		open,
		handleClose,
		fields = [],
		enableEdit,
		enableDelete,
		handleDelete,
		handleEdit,
	} = props || {}

	const filteredFields = fields.filter(
		(f) => !['label', 'title', 'image'].includes(f.name)
	)

	return (
		<ResourceModal
			loading={loading}
			open={open}
			title={resource?.title}
			handleClose={handleClose}
			enableEdit={enableEdit}
			enableDelete={enableDelete}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		>
			<ResourceDetails
				label={resource?.label}
				image={resource?.image?.url}
				resource={resource}
				fields={filteredFields}
				direction="column"
			/>
		</ResourceModal>
	)
}

export default AdminDocumentShow
