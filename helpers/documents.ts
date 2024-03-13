import {
	ATTACHMENT_FIELDS,
	REFERENCE_FIELDS,
	SYSTEM_FIELDS,
} from '../constants/index'
import { get } from 'lodash'

export const getDocumentValue = (document, field) => {
	if (ATTACHMENT_FIELDS.includes(field?.variant)) {
		return get(document, field?.name)?.url
	} else if (REFERENCE_FIELDS.includes(field?.variant)) {
		let documents = document?.document_links
			?.filter((d) => d?.target?.content_type === field?.foreign_content_type)
			?.map((d) => d.target)
		return documents
	} else if (SYSTEM_FIELDS.includes(field?.name)) {
		return get(document, field?.name)
	} else {
		return get(document, `data.${field?.name}`)
	}
}

export const flattenDocument = (resource) => {
	let { data, ...rest } = resource || {}
	return {
		...rest,
		...data,
	}
}

export const filterDocumentLinks = (document, contentType) => {
		let documents = document?.document_links
			?.filter((d) => d?.target?.content_type === contentType)
			?.map((d) => d.target)
		return documents
}

