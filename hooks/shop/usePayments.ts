import React from 'react'
import { useApi } from 'frontend-js'
import { useLoaders } from '..'

type UsePaymentsProps = {
	url: string
}

const usePayments = (props: UsePaymentsProps) => {
	const { url } = props
	const { api } = useApi()

	const { loading, loadingWrapper } = useLoaders()

	const purchase = async (itemId) => {
		return await loadingWrapper(() =>
			api.post(`/api/v1/payments/${itemId}/purchase`)
		)
	}

	return {
		loading,
		purchase,
	}
}

export default usePayments
