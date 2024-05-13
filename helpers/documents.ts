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

export const flattenDocuments = (resources) => {
	return resources.map((resource) => flattenDocument(resource))
}

export const flattenDocument = (resource) => {
	let { data, ...rest } = resource || {}
	return {
		...data,
		...rest,
	}
}

export const filterDocumentLinks = (document, contentType) => {
	if (
		!document?.document_links ||
		document?.document_links?.length == 0 ||
		!contentType
	)
		return null
	let documents = document?.document_links
		?.filter((docuLink) => docuLink?.target?.content_type == contentType)
		?.map((docuLink) => docuLink?.target)
	return documents
}
