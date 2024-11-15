'use client'

import React from 'react'
import { Alert, StripeCustomerPortalButton } from '../../../components'

const StripeCustomerPortal = () => {
	return (
		<Alert
			icon="ri-bank-card-2-fill"
			title="Stripe Customer Portal"
			description="Manage your subscription and order history."
			buttons={<StripeCustomerPortalButton />}
		/>
	)
}

export default StripeCustomerPortal
