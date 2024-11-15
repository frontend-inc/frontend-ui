'use client'

import React, { useEffect, useContext } from 'react'
import { useCart } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { ShopifyContext } from 'frontend-shopify'
import { Sheet, Alert } from '../..'
import {
	ShopifyCartDiscounts,
	ShopifyCartLines,
	ShopifyCartTotals,
	ShopifyCheckoutButton,
} from '..'

type ShopifyCartProps = {
	title?: string
}

const ShopifyCart: React.FC<ShopifyCartProps> = (props) => {
	const { title = 'Your Cart' } = props

	const { trackCartViewed } = useSegment()

	const { cartOpen, toggleCart } = useContext(ShopifyContext) as any
	const { cart } = useCart()

	useEffect(() => {
		if (cartOpen && cart) {
			trackCartViewed(cart)
		}
	}, [cartOpen, cart])

	return (
		<Sheet
			side="right"
			open={cartOpen}
			handleClose={toggleCart}
			title={title}
			buttons={<ShopifyCheckoutButton />}
		>
			{cart?.lines?.edges?.length > 0 ? (
				<div className="flex flex-col justify-between h-full">
					<div className="flex flex-col space-y-4">
						<ShopifyCartLines />
						<ShopifyCartDiscounts />
					</div>
					<ShopifyCartTotals />
				</div>
			) : (
				<div className="h-1/2 flex flex-col justify-center items-center">
					<Alert
						icon='ri-shopping-cart-2-fill'
						title="Your cart is empty"
						description="Continue shopping to add items to your cart"
					/>
				</div>
			)}
		</Sheet>
	)
}

export default ShopifyCart
