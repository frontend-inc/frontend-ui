'use client'

import React from 'react'
import { Empty, StripeCustomerPortalButton } from '../../../components'

const StripeCustomerPortal = () => {
	return (
		<Empty
			icon="ri-bank-card-2-fill"
			title="Stripe Customer Portal"
			description="Manage your subscription and order history."
			buttons={<StripeCustomerPortalButton />}
		/>
	)
}

export default StripeCustomerPortal
