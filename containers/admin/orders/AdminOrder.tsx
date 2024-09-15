import React, { useEffect, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import { useOrders } from '../../../hooks'
import {
	AdminOrderForm,
	AdminOrderDetails,
	AdminOrderLineItemList,
	AdminShipmentList,
} from '../../../containers'

type AdminOrderProps = {
	orderId: string
}

const AdminOrder: React.FC<AdminOrderProps> = (props) => {
	const [open, setOpen] = useState(false)

	const { orderId } = props || {}

	const {
		loading,
		errors,
		order,
		setOrder,
		handleChange,
		updateOrder,
		findOrder,
		reloadOrder,
	} = useOrders()

	const handleEdit = () => {
		setOpen(true)
	}

	const handleSubmit = async () => {
		await updateOrder(order)
		reloadOrder()
		setOpen(false)
	}

	useEffect(() => {
		if (orderId) {
			findOrder(orderId)
		}
	}, [orderId])

	return (
		<Stack direction="column" spacing={1}>
			<AdminOrderDetails order={order} handleEdit={handleEdit} />
			<Typography variant="subtitle1" color="text.primary">
				Order Items
			</Typography>
			<AdminOrderLineItemList orderId={order?.id} />
			<Typography variant="subtitle1" color="text.primary">
				Shipments
			</Typography>
			<AdminShipmentList orderId={order?.id} />
			<AdminOrderForm
				open={open}
				handleClose={() => setOpen(false)}
				loading={loading}
				errors={errors}
				resource={order}
				setResource={setOrder}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleReload={reloadOrder}
			/>
		</Stack>
	)
}

export default AdminOrder