import React, { useContext, useEffect, useState } from 'react'
import { AuthScreen, LayoutLoader } from '../../../components'
import { useOrders } from 'frontend-shopify'
import { OrderList } from '../../../components/shopify'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import { getShopifyIdFromGid } from 'frontend-shopify'

type ShopifyCustomerOrdersProps = {
	title?: string
	subtitle?: string
}

const ShopifyCustomerOrders: React.FC<ShopifyCustomerOrdersProps> = (props) => {
	const router = useRouter()

	const { clientUrl } = useContext(AppContext)

	const { title = 'Customer Orders', subtitle = 'Manage your orders' } =
		props || {}

	const { loading, orders, findCustomerOrders } = useOrders()

	const handleClick = (order) => {
		let orderId = getShopifyIdFromGid(order?.id)
		router.push(`${clientUrl}/shopify/orders/${orderId}`)
	}

	useEffect(() => {
		if (!orders) {
			findCustomerOrders({
				first: 20,
			})
		}
	}, [orders])

	return (
		<LayoutLoader loading={loading}>
			<AuthScreen title={title} subtitle={subtitle}>
				<OrderList orders={orders} handleClick={handleClick} />
			</AuthScreen>
		</LayoutLoader>
	)
}

export default ShopifyCustomerOrders
