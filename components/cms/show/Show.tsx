'use client'

import React, { useEffect } from 'react'
import { ShowItem } from '../..'
import { ShowItemProps } from './ShowItem'
import { ResourceProvider, useResource } from 'frontend-js'

export type ShowProps = ShowItemProps & {
	documentId?: string
	url: string
	resource?: any
}

const Show: React.FC<ShowProps> = (props) => {
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
			<ShowItem {...props} url={url} />
		</ResourceProvider>
	)
}

export default Show
