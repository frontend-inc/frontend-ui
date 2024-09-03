import { useResource } from 'frontend-js'
import { useApi } from 'frontend-js'
import useAdmin from './useAdmin'

const useMedia = () => {
	const { api } = useApi()
  const { apiUrl } = useAdmin()

	const {
		loading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource,
		resources,
		findOne: findResource,
		findMany: findResources,
		create: createResource,
		destroy: deleteResource,
		upload: uploadResource,
		reloadOne: reloadResource,
		reloadMany: reloadResources,
		query,
		page,
		numPages,
		meta,
		loadMore,
		setResource,
		setResources,
		loadingWrapper,
	} = useResource({
		url: `${apiUrl}/storage`,
		name: 'storage',
	})

	const uploadFile = async (file) => {
		try {
			let resp = await uploadResource({
				io: file,
				filename: file.name,
			})
			return resp?.data
		} catch (e) {
			console.log(e)
		}
	}

	const uploadFromUrl = async (url, name = 'unsplash-photo') => {
		try {
			let resp = await loadingWrapper(() =>
				api.post(`${apiUrl}/storage/upload_from_url`, {
					storage: {
						url: url,
						filename: name,
					},
				})
			)
			return resp?.data
		} catch (e) {
			console.log(e)
		}
	}

	return {
		loading,
		loaded,
		empty,
		errors,
		editing,
		isValid,
		resource,
		resources,
		findResource,
		findResources,
		createResource,
		deleteResource,
		reloadResource,
		reloadResources,
		uploadFile,
		uploadFromUrl,
		loadMore,
		query,
		page,
		numPages,
		meta,
		setResource,
		setResources,
	}
}

export default useMedia
