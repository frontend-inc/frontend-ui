'use client'

import React from 'react'
import { useApi, useLoadingWrapper } from 'frontend-js'
import { SubscriptionType } from '../../types'

const useSubscription = () => {
	const { api } = useApi()

  const { 
    errors, 
    loading, 
    delayedLoading,   
    loadingWrapper 
  } = useLoadingWrapper()

	const apiParams = {
		name: 'subscription',
		url: '/api/v1/shop/subscriptions',
	}

	type SubscriptionOptionsType = {
		success_url: string
		cancel_url: string
	}

	const subscribe = async (options: SubscriptionOptionsType) => {
		return await loadingWrapper(() =>
			api.subscribe(options, apiParams)
		)
	}

	const unsubscribe = async () => {
		return await loadingWrapper(() => api.unsubscribe(apiParams))
	}

	return {
		loading,
		delayedLoading,
		errors,
		subscribe,
		unsubscribe,
	}
}

export default useSubscription
