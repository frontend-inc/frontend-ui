'use client'

import React from 'react'
import { Empty, RemixIcon } from '../../../components'
import { Button } from '@nextui-org/react'
import { useApp } from '../../../hooks'
import { toast } from 'sonner'

const ShopifyCustomerPortal = () => {
	const { app } = useApp()

	const handleClick = () => {
		if (app?.shopify_customer_portal_url) {
			window.open(app.shopify_customer_portal_url, '_blank')
		} else {
			toast.error('Shopify Customer Portal not enabled.')
		}
	}

	return (
		<Empty
			icon="ri-shopping-cart-2-fill"
			title="Shopify Customer Portal"
			description="Manage your order history and returns."
			buttons={
				<Button
					onPress={handleClick}
					endContent={<RemixIcon name="ri-external-link-line" />}
				>
					Open Customer Portal
				</Button>
			}
		/>
	)
}

export default ShopifyCustomerPortal
