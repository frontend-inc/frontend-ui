import React, { useContext } from 'react'
import { ApiContext } from 'frontend-js'
import { useLoaders } from '..'

type UsePaymentsProps = {
	url: string
}

const usePayments = (props: UsePaymentsProps) => {
	const { url } = props
	const { api } = useContext(ApiContext) as any

	const { loading, loadingWrapper } = useLoaders()

	const purchase = async (itemId) => {
		return await loadingWrapper(() => api.post(`/api/v1/payments/${itemId}/purchase`))
	}

	return {
		loading,
		purchase,
	}
}

export default usePayments
