import React from 'react'
import { useApi, useResource } from 'frontend-js/hooks'

const usePublicApp = () => {
	const { api } = useApi()

	const {
		loading,
		loaded,
		errors,
		empty,
		resource: app,
		findOne: findApp,
		loadingWrapper,
	} = useResource({
		url: `/api/v1/apps`,
		name: 'app',
	})

	const authorize = async (appId: string) => {
		return await loadingWrapper(() =>
			api.post(`/api/v1/apps/${appId}/authorize`)
		)
	}

	return {
		loading,
		errors,
		loaded,
		empty,
		app,
		findApp,
		authorize,
	}
}

export default usePublicApp
