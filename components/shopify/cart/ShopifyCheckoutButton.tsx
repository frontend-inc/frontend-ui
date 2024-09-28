import React, { useState } from 'react'
import { useCart } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { Button } from '@mui/material'
import { IconLoading } from '../../../components'

type ShopifyCheckoutButtonProps = {
	size?: 'small' | 'medium' | 'large'
}

const ShopifyCheckoutButton: React.FC<ShopifyCheckoutButtonProps> = (props) => {
	const { size = 'large' } = props
	const [loading, setLoading] = useState(false)
	const { cart } = useCart()

	const { trackCheckoutStarted } = useSegment()

	const handleCheckoutClick = () => {
		setLoading(true)
		setTimeout(() => redirectToWebUrl(), 500)
	}

	const redirectToWebUrl = () => {
		trackCheckoutStarted(cart)
		window.location = cart?.checkoutUrl
		setLoading(false)
	}

	return (
		<Button
			fullWidth
			color="primary"
			onClick={handleCheckoutClick}
			variant="contained"
			size={size}
			endIcon={loading && <IconLoading />}
		>
			Checkout
		</Button>
	)
}

export default ShopifyCheckoutButton
