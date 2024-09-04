import { useResource } from 'frontend-js'
import { useAdmin } from '../../hooks'


const useViews = () => {
	const { apiUrl } = useAdmin()
	const {
		loading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: view,
		resources: views,
		findOne: findView,
		findMany: findViews,
		update: updateView,
		create: createView,
		save: saveView,
		destroy: deleteView,
		handleChange,
		handleChangePage,
		reloadOne: reloadView,
		reloadMany: reloadViews,
		query,
		meta,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		updatePositions: updateViewPositions,
		setResource: setView,
		setResources: setViews,
	} = useResource({
		url: `${apiUrl}/views`,
		name: 'view',
	})

	return {
		loading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		view,
		views,
		findView,
		findViews,
		saveView,
		updateView,
		createView,
		deleteView,
		updateViewPositions,
		handleChange,
		handleChangePage,
		meta,
		query,
		page,
		numPages,
		perPage,
		totalCount,
		reloadView,
		reloadViews,
		sortBy,
		sortDirection,
		handleSort,
		setView,
		setViews,
	}
}

export default useViews
