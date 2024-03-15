import React from 'react'
import { List } from '@mui/material'
import { OrderType } from 'frontend-shopify'
import OrderItem from './OrderItem'

type OrderListProps = {
	orders: OrderType[]
	handleClick: (id: string) => void
}

const OrderList: React.FC<OrderListProps> = (props) => {
	const { orders, handleClick } = props || {}

	return (
		<List disablePadding>
			{orders?.map((order) => (
				<OrderItem key={order?.id} order={order} handleClick={handleClick} />
			))}
		</List>
	)
}

export default OrderList
