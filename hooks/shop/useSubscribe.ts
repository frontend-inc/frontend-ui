'use client'

import React from 'react'
import { useApi, useLoadingWrapper } from 'frontend-js'

const useSubscription = () => {
	const { api } = useApi()

	const { errors, loading, delayedLoading, loadingWrapper } =
		useLoadingWrapper()

	const apiParams = {
		name: 'subscription',
		url: '/api/v1/shop/subscriptions',
	}

	type SubscriptionOptionsType = {
		success_url: string
		cancel_url: string
	}

	const subscribe = async (
		productId,
		stripeOptions: SubscriptionOptionsType
	) => {
		return await loadingWrapper(() =>
			api.subscribe(productId, stripeOptions, apiParams)
		)
	}

	return {
		loading,
		delayedLoading,
		errors,
		subscribe,
	}
}

export default useSubscription
