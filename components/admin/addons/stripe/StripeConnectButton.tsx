'use client'

import React from 'react'
import { useStripeConnect } from '../../../../hooks'
import { Button } from '../../../core'

const StripeConnectButton: React.FC = () => {
	const { loading, stripeConnect } = useStripeConnect()

	const handleClick = async () => {
		let url = window.location.href
		let resp = await stripeConnect(url)
		if (resp?.data?.url) {
			window.open(resp?.data?.url, '_blank')
		}
	}

	return (
		<Button onClick={handleClick} className="bg-[#6772E5] hover:bg-[#6772E5]">
			{loading ? 'Connecting...' : 'Connect with Stripe'}
		</Button>
	)
}

export default StripeConnectButton
