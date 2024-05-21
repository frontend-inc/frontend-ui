import React from 'react'
import { useApi, useResource } from 'frontend-js'
import { SubscriptionPlanType } from '../../types'

const useSubscriptions = () => {
	const { api } = useApi()

	const {
		loading,
		delayedLoading,
		errors,
		resource: subscriptionPlan,
		resources: subscriptionPlans,
		findOne: findSubscriptionPlan,
		findMany: findSubscriptionPlans,
		handleChange,
		handleChangePage,
		reloadMany: reloadSubscriptionPlans,
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
		name: 'subscription_plan',
		url: '/api/v1/subscription_plans',
	})

  // Pass the DB subscription_plan_id
	const subscribe = async (subscriptionPlanId) => {
		return (await loadingWrapper(() =>
			api.post(`/api/v1/subscription_plans/${subscriptionPlanId}/subscribe`)
		)) as unknown as SubscriptionPlanType
	}

  const unsubscribe = async (subscriptionPlanId) => {
		return (await loadingWrapper(() =>
			api.post(`/api/v1/subscription_plans/${subscriptionPlanId}/unsubscribe`)
		)) as unknown as SubscriptionPlanType
	}

	return {
		loading,
		delayedLoading,
		errors,
		subscriptionPlan,
		subscriptionPlans,
		findSubscriptionPlan,
		findSubscriptionPlans,

    subscribe,
		unsubscribe,

		handleChange,
		handleChangePage,
		reloadSubscriptionPlans,
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
		paginate
	}
}

export default useSubscriptions
