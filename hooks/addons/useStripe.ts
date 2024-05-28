import React, { useContext } from 'react'
import { ApiContext } from 'frontend-js'
import { useLoadingWrapper } from 'frontend-js'

const useStripe = () => {
	const { loading, loadingWrapper } = useLoadingWrapper()
	const { api } = useContext(ApiContext) as any

	const createCustomer = async (token) => {
		return await loadingWrapper(() =>
			api.post('/api/v1/app/stripe/create_customer', {
				stripe: {
					token,
				},
			})
		)
	}

	const deleteCustomer = async () => {
		return await loadingWrapper(() =>
			api.post('/api/v1/app/stripe/delete_customer')
		)
	}

	return {
		loading,
		createCustomer,
		deleteCustomer,
	}
}

export default useStripe
