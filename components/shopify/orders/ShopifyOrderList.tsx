import React from 'react'
import { List } from '@mui/material'
import { ShopifyOrderType } from 'frontend-shopify'
import ShopifyOrderItem from './ShopifyOrderItem'

type ShopifyOrderListProps = {
	orders: ShopifyOrderType[]
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
