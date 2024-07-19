import { SYSTEM_FIELDS } from '../constants/index'

export const handleDocumentChange = (ev, resource) => {
	const { name } = ev.target
	const value =
		ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
	let newResource = {
		...resource,
	}
	if (SYSTEM_FIELDS.includes(name)) {
		newResource[name] = value
	} else {
		newResource = {
			...newResource,
			data: {
				...newResource.data,
				[name]: value,
			},
		}
	}
	return newResource
}

export const filterReferences = (document, contentType) => {
	if (
		!document?.references ||
		document?.references?.length == 0 ||
		!contentType
	)
		return null
	let documents = document?.references
		?.filter((reference) => reference?.target?.content_type == contentType)
		?.map((reference) => reference?.target)
	return documents
}
