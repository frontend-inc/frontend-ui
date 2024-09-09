import React from 'react'
import {
	ResourceToolbarModal,
	PrimaryButton,
	SecondaryButton,
} from '../../../../components'
import { Collapse, Stack } from '@mui/material'
import { useApi, useResource } from 'frontend-js'
import { useAdmin } from '../../../../hooks'

const AdminProductToolbar = (props) => {
	const { productCollectionId, url, handleSuccess } = props || {}

	const { handleClose, selectedIds } = props || {}

	const { addProducts } = useResource({
		url: url,
		name: 'products',
	})

	console.log('URL', url)

	const handleAddProducts = async () => {
		await addProducts(productCollectionId, selectedIds)
		handleSuccess()
		handleClose()
	}

	return (
		<Collapse in={selectedIds?.length > 0}>
			<Stack direction="row" spacing={1}>
				<PrimaryButton fullWidth onClick={handleAddProducts} icon="Plus">
					Add
				</PrimaryButton>
			</Stack>
		</Collapse>
	)
}

export default AdminProductToolbar
