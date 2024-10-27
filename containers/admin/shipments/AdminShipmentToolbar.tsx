'use client'

import React, { useState } from 'react'
import {
	FormModal,
	ResourceToolbarModal,
	Button,
} from '../../../components'
import { useOrders, useAdmin } from '../../../hooks'

const AdminShipmentToolbar = (props) => {
	const { open, handleClose, selectedIds, handleReload } = props || {}

	const [openModal, setOpenModal] = useState(false)

	const { loading, errors, order, handleChange, updateOrders } = useOrders()

	const handleUpdateClick = async () => {}

	const handleUpdate = async () => {
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
				handleSubmit={handleUpdate}
			/>
		</ResourceToolbarModal>
	)
}

export default AdminShipmentToolbar
