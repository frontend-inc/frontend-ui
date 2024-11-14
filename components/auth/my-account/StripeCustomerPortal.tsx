'use client'

import React from 'react'
import { Placeholder, StripeCustomerPortalButton } from '../../../components'

const StripeCustomerPortal = () => {
	return (
		<Placeholder
			icon="ri-bank-card-2-fill"
			title="Stripe Customer Portal"
			description="Manage your subscription and order history."
			buttons={<StripeCustomerPortalButton />}
		/>
	)
}

export default StripeCustomerPortal
