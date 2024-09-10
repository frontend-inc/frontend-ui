import React from 'react'
import { useApi, useResource } from 'frontend-js'
import { SubscriptionType } from '../../types'

const useSubscriptions = () => {
	const { api } = useApi()

	const {
		loading,
		delayedLoading,
		errors,
		resource: subscription,
		resources: subscriptions,
		findOne: findSubscription,
		findMany: findSubscriptions,
		handleChange,
		handleChangePage,
		reloadMany: reloadSubscriptions,
		query,
		setQuery,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		loadMore,
		loadingWrapper,
		paginate,
	} = useResource({
		name: 'subscription',
		url: '/api/v1/shop/subscriptions',
	})


	return {
		loading,
		delayedLoading,
		errors,
		subscription,
		subscriptions,
		findSubscription,
		findSubscriptions,

		handleChange,
		handleChangePage,
		reloadSubscriptions,
		query,
		setQuery,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		loadMore,
		loadingWrapper,
		paginate,
	}
}

export default useSubscriptions
