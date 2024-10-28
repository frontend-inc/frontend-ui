'use client'

import React from 'react'
import { ResourceModal, ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'
import { DisplayFieldType } from '../../../types'

type AdminDocumentShowProps = ResourceShowProps & {
	fields?: DisplayFieldType[]
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
    (field) => !field?.name?.includes(["title","image","description"])
  )

	return (
		<ResourceModal
			loading={loading}
			open={open}
			handleClose={handleClose}
			enableEdit={enableEdit}
			enableDelete={enableDelete}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		>
			<ResourceDetails
				label={resource?.label}
				image={resource?.image?.url}
				primary={resource?.title}
				secondary={resource?.description}
				resource={resource}
				fields={filteredFields}
				direction="column"
			/>
		</ResourceModal>
	)
}

export default AdminDocumentShow
