import React from 'react'
import { useResource } from 'frontend-js/hooks'

const useAppAccounts = (props) => {
	const { id, appId } = props

	const {
		resourceId: appAccountId,
		loading,
		loaded,
		empty,
		editing,
		isValid,
		resource: appAccount,
		resources: appAccounts,
		setResource: setAppAccount,
		findOne: findAppAccount,
		findMany: findAppAccounts,
		update: updateAppAccount,
		create: createAppAccount,
		save: saveAppAccount,
		destroy: deleteAppAccount,
		handleChange,
		handleChangePage,
		reload: reloadAppAccount,
		reloadMany: reloadAppAccounts,
		query,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
	} = useResource({
		id: id,
		url: `/api/v1/admin/apps/${appId}/app_accounts`,
		name: 'app_account',
	})

	return {
		appAccountId,
		loading,
		loaded,
		empty,
		editing,
		isValid,
		appAccount,
		appAccounts,
		setAppAccount,
		findAppAccount,
		findAppAccounts,
		saveAppAccount,
		updateAppAccount,
		createAppAccount,
		deleteAppAccount,
		handleChange,
		handleChangePage,
		query,
		page,
		numPages,
		perPage,
		totalCount,
		reloadAppAccount,
		reloadAppAccounts,
		sortBy,
		sortDirection,
		handleSort,
	}
}

export default useAppAccounts
