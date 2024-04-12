import React, { useState } from 'react'
import { useCart } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { Button } from '@mui/material'
import { IconLoading } from '../../../components'

type CheckoutButtonProps = {
	size?: 'small' | 'medium' | 'large'
}

const CheckoutButton: React.FC<CheckoutButtonProps> = (props) => {
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
			endIcon={<IconLoading loading={loading} />}
		>
			Checkout
		</Button>
	)
}

export default CheckoutButton
