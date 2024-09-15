import React from 'react'
import { PrimaryButton } from '../../../../components'
import { Collapse, Stack } from '@mui/material'
import { useProductCollections } from '../../../../hooks'

const AdminProductToolbar = (props) => {
	const { productCollectionId, url, handleSuccess } = props || {}

	const { handleClose, selectedIds } = props || {}

	const { addProducts } = useProductCollections()

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
