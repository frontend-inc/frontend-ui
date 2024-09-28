import React from 'react'
import { ResourceToolbarModal, PrimaryButton } from '../../../../components'
import { Collapse, Stack } from '@mui/material'

type ProductToolbarProps = {
	open: boolean
	handleAddProducts: (productIds: number[]) => void
	handleClose: () => void
	selectedIds: number[]
	handleReload: () => void
}

const ProductToolbar: React.FC<ProductToolbarProps> = (props) => {
	const { open, handleAddProducts, handleClose, selectedIds, handleReload } =
		props || {}

	const handleAdd = async () => {
		await handleAddProducts(selectedIds)
		handleReload()
		handleClose()
	}

	return (
		<Collapse in={open}>
			<Stack direction="row" spacing={1} sx={sx.toolbar}>
				<PrimaryButton fullWidth onClick={handleAdd}>
					Add Products
				</PrimaryButton>
			</Stack>
		</Collapse>
	)
}

export default ProductToolbar

const sx = {
	toolbar: {
		width: '100%',
	},
}
