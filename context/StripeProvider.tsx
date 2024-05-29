import React from 'react'
import StripeContext from './StripeContext'

type StripeProviderProps = {
	publishableKey?: string
	children: React.ReactNode
}

const StripeProvider = (props: StripeProviderProps) => {
	const { children, publishableKey } = props || {}

	const value = {
    stripePublishableKey: publishableKey
	}

	return <StripeContext.Provider value={value}>{children}</StripeContext.Provider>
}

export default StripeProvider
