'use client'

import React from 'react'
import CartLineItem from './CartLineItem'
import { Empty } from '../../../components'
import { useCart } from '../../../hooks'

const CartLineItems: React.FC = () => {
	const { cart } = useCart()

	if (!cart?.uid) return null
	if (cart?.line_items.length === 0) {
		return (
			<Empty
				icon="ri-shopping-bag-2-line"
				title="Your cart is empty"
				description="There are no products in the cart."
			/>
		)
	}
	return (
		<ul className="py-2">
			{cart?.line_items.map((lineItem) => (
				<CartLineItem key={lineItem.id} lineItem={lineItem} />
			))}
		</ul>
	)
}

export default CartLineItems
