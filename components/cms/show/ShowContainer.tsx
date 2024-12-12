'use client'

import React, { useEffect } from 'react'
import { Show } from '../..'
import { ShowProps } from './Show'
import { ResourceProvider } from 'frontend-js'
import { useDocuments } from '../../../hooks'

export type ShowContainerProps = ShowProps & {
	documentId?: string
	url: string
	resource?: any
}

const ShowContainer: React.FC<ShowContainerProps> = (props) => {
	const { documentId, url } = props || {}

	const { loading, document, findDocument } = useDocuments()

	useEffect(() => {
		if (documentId) {
			findDocument(documentId)
		}
	}, [documentId])

  console.log('ShowContainer', props, document)

	return (
		<ResourceProvider name="document" url={url} resource={document}>
			<Show {...props} url={url} />
		</ResourceProvider>
	)
}

export default ShowContainer
