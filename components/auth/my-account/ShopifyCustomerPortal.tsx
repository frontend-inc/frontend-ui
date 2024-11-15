'use client'

import React from 'react'
import { Alert, Button } from '../../../components'
import { useToast, useApp } from '../../../hooks'

const ShopifyCustomerPortal = () => {
	const { app } = useApp()
	const { showAlertError } = useToast()

	const handleClick = () => {
		if (app?.shopify_customer_portal_url) {
			window.open(app.shopify_customer_portal_url, '_blank')
		} else {
			showAlertError('Shopify Customer Portal not enabled.')
		}
	}

	return (
		<Alert
			icon="ri-shopping-cart-2-fill"
			title="Shopify Customer Portal"
			description="Manage your order history and returns."
			buttons={
				<Button onClick={handleClick} endIcon="ExternalLink">
					Open Customer Portal
				</Button>
			}
		/>
	)
}

export default ShopifyCustomerPortal
