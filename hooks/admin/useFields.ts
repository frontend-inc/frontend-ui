import { useResource } from 'frontend-js'
import { useApi } from 'frontend-js'
import { useAdmin } from '..'

type UseFieldsParams = {
  componentId: string
}

const useFields = (props: UseFieldsParams) => {

  const { componentId } = props || {}
	const { apiUrl } = useAdmin()

	const {
		loading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		field,
		fields,
		findOne: findField,
		findMany: findFields,
		create: createField,
		destroy: deleteField,
		upload: uploadField,
		reloadOne: reloadField,
		reloadMany: reloadFields,
		query,
		page,
		numPages,
		meta,
		loadMore,
		setField,
		setFields,
		loadingWrapper,
	} = useResource({
		url: `${apiUrl}/components/${componentId}/fields`,
		name: 'field',
	})

	return {
		loading,
		loaded,
		empty,
		errors,
		editing,
		isValid,
		field,
		fields,
		findField,
		findFields,
		createField,
		deleteField,
		reloadField,
		reloadFields,
		loadMore,
		query,
		page,
		numPages,
		meta,
		setField,
		setFields,
	}
}

export default useFields
