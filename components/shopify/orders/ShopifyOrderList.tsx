import React from 'react'
import { List } from '@mui/material'
import { OrderType } from 'frontend-shopify'
import ShopifyOrderItem from './ShopifyOrderItem'

type ShopifyOrderListProps = {
	orders: OrderType[]
	handleClick: (id: string) => void
}

const ShopifyOrderList: React.FC<ShopifyOrderListProps> = (props) => {
	const { orders, handleClick } = props || {}

	return (
		<List disablePadding>
			{orders?.map((order) => (
				<ShopifyOrderItem key={order?.id} order={order} handleClick={handleClick} />
			))}
		</List>
	)
}

export default ShopifyOrderList
