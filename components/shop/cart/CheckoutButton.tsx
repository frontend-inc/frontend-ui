'use client'

import React from 'react'
import { Button } from '../../../components'
import { useCart } from '../../../hooks'
import { toast } from 'sonner'

const CheckoutButton = () => {
	const { loading, cart, checkout } = useCart()

	const handleClick = async () => {
		let currentUrl = window.location.href
		const stripe = await checkout({
			success_url: currentUrl,
			cancel_url: currentUrl,
		})
		if (stripe?.errors) {
			toast.error(stripe.errors)
		} else {
			const url = stripe?.data?.url
			if (window.parent === window) {
				window.open(url, '_blank')
			} else {
				parent.window.open(url, '_blank')
			}
		}
	}

	const cartDisabled = cart?.total_items === 0 ? true : false

	return (
		<Button fullWidth loading={loading} onClick={handleClick} size="lg">
			Checkout {!cartDisabled && cart?.display_subtotal}
		</Button>
	)
}

export default CheckoutButton
