import React from 'react'
import { useResource } from 'frontend-js'
import { useAdmin } from '../../hooks'

const useRoles = () => {
	const { apiUrl } = useAdmin()

	const {
		errors,
		loading,
		loaded,
		empty,
		editing,
		isValid,
		resource: role,
		resources: roles,
		setResource: setRole,
		findOne: findRole,
		findMany: findRoles,
		update: updateRole,
		create: createRole,
		save: saveRole,
		destroy: deleteRole,
		handleChange,
		handleChangePage,
		reloadOne: reloadRole,
		reloadMany: reloadRoles,
		query,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
	} = useResource({
		url: `${apiUrl}/roles`,
		name: 'role',
	})

	return {
		errors,
		loading,
		loaded,
		empty,
		editing,
		isValid,
		role,
		roles,
		setRole,
		findRole,
		findRoles,
		saveRole,
		updateRole,
		createRole,
		deleteRole,
		handleChange,
		handleChangePage,
		query,
		page,
		numPages,
		perPage,
		totalCount,
		reloadRole,
		reloadRoles,
		sortBy,
		sortDirection,
		handleSort,
	}
}

export default useRoles
