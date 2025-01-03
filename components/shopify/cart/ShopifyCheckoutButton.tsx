'use client'

import React, { useState } from 'react'
import { useCart } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { Button } from '@nextui-org/react'

type ShopifyCheckoutButtonProps = {
	size?: 'small' | 'medium' | 'large'
}

const ShopifyCheckoutButton: React.FC<ShopifyCheckoutButtonProps> = (props) => {
	const [loading, setLoading] = useState(false)
	const { cart } = useCart()

	const { trackCheckoutStarted } = useSegment()

	const handleCheckoutClick = () => {
		setLoading(true)
		setTimeout(() => redirectToWebUrl(), 500)
	}

	const redirectToWebUrl = () => {
		trackCheckoutStarted(cart)
		if (window.parent === window) {
			window.location = cart?.checkoutUrl
		} else {
			parent.window.location = cart?.checkoutUrl
		}
		setLoading(false)
	}

	return (
		<Button
			fullWidth
			variant="solid"
			color="primary"
			onPress={handleCheckoutClick}
			size="lg"
			isLoading={loading}
		>
			Checkout
		</Button>
	)
}

export default ShopifyCheckoutButton
