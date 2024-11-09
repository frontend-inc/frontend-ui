'use client'

import React, { useState } from 'react'
import { FormModal, ResourceToolbarModal, Button } from '../../../components'
import { useAdminOrders, useAdmin } from '../../../hooks'

const AdminOrderToolbar = (props) => {
	const { apiUrl } = useAdmin()

	const { open, handleClose, selectedIds, handleReload } = props || {}

	const [openModal, setOpenModal] = useState(false)

	const { loading, errors, order, handleChange, updateOrders } =
		useAdminOrders()

	const handleUpdateClick = async () => {
		setOpenModal(true)
	}

	const handleSubmit = async () => {
		await updateOrders(selectedIds, order)
		handleReload()
		handleClose()
	}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
			<div>
				<Button onClick={handleUpdateClick}>Update</Button>
			</div>
			<FormModal
				errors={errors}
				open={openModal}
				handleClose={() => setOpenModal(false)}
				title="Update Orders"
				fields={[
					{
						label: 'Status',
						name: 'status',
						variant: 'select',
						options: [
							{ label: 'Pending', value: 'pending' },
							{ label: 'Canceled', value: 'canceled' },
							{ label: 'Completed', value: 'completed' },
							{ label: 'Refunded', value: 'refunded' },
							{ label: 'Exchanged', value: 'exchanged' },
						],
					},
				]}
				resource={order}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</ResourceToolbarModal>
	)
}

export default AdminOrderToolbar
