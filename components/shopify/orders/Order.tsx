import React, { useContext, useEffect } from 'react'
import { AuthScreen, Loader } from '../../../components'
import { useOrders } from 'frontend-shopify'
import { OrderDetails } from '../../../components/shopify'
import { useRouter } from 'next/router'
import moment from 'moment'

type ShopifyCustomerOrderProps = {
	title?: string
	subtitle?: string
}

const ShopifyCustomerOrder: React.FC<ShopifyCustomerOrderProps> = (props) => {
	const router = useRouter()
	let { order_id: orderId } = router?.query
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
				<OrderDetails order={order} />
			</AuthScreen>
		</>
	)
}

export default ShopifyCustomerOrder
