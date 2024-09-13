import React from 'react'
import { DocumentFormRemoteModal } from '../..'
import { useResourceContext } from 'frontend-js'
import { FormFieldType } from '../../../types'

export type ProductFormProps = {
	fields?: FormFieldType[]
	parentResource?: any
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
	const { fields = [], parentResource } = props || {}

	const { url, resource, setResource, reloadMany, openEdit, setOpenEdit } =
		useResourceContext()

	const handleSuccess = async (savedResource) => {
		if (savedResource?.id) {
			setResource(savedResource)
		}
		reloadMany()
		setOpenEdit(false)
	}

	return (
		<DocumentFormRemoteModal
			open={openEdit}
			handleClose={() => setOpenEdit(false)}
			url={url}
			resource={resource}
			parentResource={parentResource}
			handleSuccess={handleSuccess}
		/>
	)
}

export default ProductForm
