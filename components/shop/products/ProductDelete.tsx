import React from 'react'
import { AlertModal } from '../..'
import { useForms } from '../../../hooks'
import { useResourceContext } from 'frontend-js'

const ProductDelete: React.FC = () => {
	const { openDelete, setOpenDelete } = useResourceContext()

	const { handleDelete } = useForms()

	return (
		<AlertModal
			open={openDelete}
			handleClose={() => setOpenDelete(false)}
			title="Are you sure you want to delete this product?"
			description="This action cannot be reversed."
			handleConfirm={handleDelete}
		/>
	)
}

export default ProductDelete
