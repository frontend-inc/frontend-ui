import React, { useContext, useEffect } from 'react'
import { AuthScreen, Loader } from '../..'
import { useOrders } from 'frontend-shopify'
import { ShopifyOrderDetails } from '..'
import { useRouter } from 'next/router'
import moment from 'moment'

type ShopifyOrderRouterParams = {
	order_id: string | null
}

type ShopifyCustomerOrderProps = {
	title?: string
	subtitle?: string
}

const ShopifyCustomerOrder: React.FC<ShopifyCustomerOrderProps> = (props) => {
	const router = useRouter()
	let { order_id: orderId } = router?.query as ShopifyOrderRouterParams

	if (orderId == 'new') {
		orderId = null
	}

	const { loading, order, findCustomerOrder } = useOrders()

	useEffect(() => {
		if (orderId) {
			findCustomerOrder(orderId)
		}
	}, [orderId])

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen
				title={`Order ${order.name}`}
				subtitle={moment(order?.processedAt).format('MMMM Do, YYYY')}
			>
				<ShopifyOrderDetails order={order} />
			</AuthScreen>
		</>
	)
}

export default ShopifyCustomerOrder
