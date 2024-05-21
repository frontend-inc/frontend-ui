import React from 'react'
import { useApi, useResource } from 'frontend-js'
import { CreditCardType } from '../../types'

const useCreditCards = () => {
	const { api } = useApi()

	const {
		loading,
		delayedLoading,
		errors,
		resource: creditCard,
		resources: creditCards,
		findOne: findCreditCard,
		findMany: findCreditCards,
		create: createCreditCard,
		destroy: deleteCreditCard,
		setResource: setCreditCard,
		handleChange,
		handleChangePage,
		reloadMany: reloadCreditCards,
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
		removeAttachment,
	} = useResource({
		name: 'credit_card',
		url: '/api/v1/credit_cards',
	})

	const selectCreditCard = async (creditCardId) => {
		return (await loadingWrapper(() =>
			api.post(`/api/v1/credit_cards/${creditCardId}/select_primary`)
		)) as unknown as CreditCardType
	}

	return {
		loading,
		delayedLoading,
		errors,
		creditCard,
		creditCards,
		findCreditCard,
		findCreditCards,
		createCreditCard,
		deleteCreditCard,
		selectCreditCard,
		setCreditCard,

		handleChange,
		handleChangePage,
		reloadCreditCards,
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
		removeAttachment,
	}
}

export default useCreditCards
