export const filterReferences = (document, contentType) => {
	if (
		!document?.references ||
		document?.references?.length == 0 ||
		!contentType
	)
		return null
	let documents = document?.references
		?.filter((reference) => reference?.target?.content_type == contentType)
		?.sort((a, b) => a.position - b.position)
	return documents
}

export const filterReferenceTargets = (document, contentType) => {
	if (
		!document?.references ||
		document?.references?.length == 0 ||
		!contentType
	)
		return null
	let documents = document?.references
		?.filter((reference) => reference?.target?.content_type == contentType)
		?.map((reference) => reference?.target)
		?.sort((a, b) => a.position - b.position)
	return documents
}
