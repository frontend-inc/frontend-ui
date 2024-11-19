'use client'

import React, { useEffect } from 'react'
import { Show } from '../..'
import { ShowProps } from './Show'
import { ResourceProvider, useResource } from 'frontend-js'

export type ShowContainerProps = ShowProps & {
	documentId?: string
	url: string
	resource?: any
}

const ShowContainer: React.FC<ShowContainerProps> = (props) => {
	const { documentId, url } = props || {}

	const { loading, resource, findOne } = useResource({
		url,
		name: 'document',
	})

	useEffect(() => {
		if (documentId) {
			findOne(documentId)
		}
	}, [documentId])

	return (
		<ResourceProvider name="document" url={url} resource={resource}>
			<Show {...props} url={url} />
		</ResourceProvider>
	)
}

export default ShowContainer
