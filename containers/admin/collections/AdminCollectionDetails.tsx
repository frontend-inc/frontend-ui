'use client'

import React from 'react'
import { Typography } from '../../../components/core'
import { Icon, UserChip, Label, PrimaryButton } from '../../../components'
import { OrderType } from '../../../types'
import copy from 'copy-to-clipboard'
import { useAlerts } from '../../../hooks'
import { Button } from 'frontend-shadcn'

type AdminOrderDetailsProps = {
	loading?: boolean
	order: OrderType
	handleEdit: () => void
}

const AdminOrderDetails: React.FC<AdminOrderDetailsProps> = (props) => {
	const { order, handleEdit, loading } = props || {}

	const { showAlertSuccess, showAlertError } = useAlerts()

	const handleCopyEmail = () => {
		if (order.customer_email) {
			copy(order.customer_email)
			showAlertSuccess('Email copied to clipboard')
		} else {
			showAlertError('No email to copy')
		}
	}

	return (
		<div className={`grid grid-cols-2 gap-4 ${loading ? 'opacity-50' : ''}`}>
			<div className="flex flex-row space-x-2">
				<Typography variant="subtitle1" >
					Order {order.display_number}
				</Typography>
				<Label label={order?.status} />
			</div>
			<div className="flex justify-end items-start">
				<PrimaryButton onClick={handleEdit}>Edit</PrimaryButton>
			</div>
			<div className="bg-card p-4 rounded-lg shadow">
				<div className="flex flex-col">
					<div className="flex justify-start items-center pb-1 border-b border-border">
						<UserChip user={order?.user} size={44} enableUsername enableEmail />
					</div>
					<div>
						<Button
							variant="ghost"
							className="mt-1 p-0.5 text-foreground"
							onClick={handleCopyEmail}
						>
							<Icon name="Mail" size={20} className="mr-2" />
							{order.customer_name}
						</Button>
					</div>
					<Typography
						variant="overline"
						className="text-muted-foreground"
						className="whitespace-pre-line"
					>
						{order.shipping_address}
					</Typography>
				</div>
			</div>
			<div className="bg-card p-4 rounded-lg shadow">
				<div className="flex flex-col">
					<Typography variant="overline" className="text-muted-foreground">
						Subtotal: {order.display_subtotal}
					</Typography>
					<Typography variant="overline" className="text-muted-foreground">
						Taxes: {order.total_amount}
					</Typography>
					<Typography variant="overline" className="text-muted-foreground">
						Discounts: {order.discount_amount}
					</Typography>
					<Typography variant="overline" className="text-muted-foreground">
						Shipping: {order.shipping_amount}
					</Typography>
					<Typography variant="overline" className="text-muted-foreground">
						Total: {order.display_total}
					</Typography>
				</div>
			</div>
		</div>
	)
}

export default AdminOrderDetails
