import React from 'react'
import { CollectionForm } from '../..'
import { FormFieldType } from '../../../types'
import { ResourceProvider } from 'frontend-js'

export type ShowContainerProps = {
	url: string
	foreignUrl?: string
	fields: FormFieldType[]
	children: React.ReactNode
	resource: any
}

const ShowContainer: React.FC<ShowContainerProps> = (props) => {
	const { url, foreignUrl, resource, children } = props || {}
	return (
		<ResourceProvider
			name="document"
			resource={resource}
			url={url}
			foreignUrl={foreignUrl}
		>
			{children}
			<CollectionForm />
		</ResourceProvider>
	)
}

export default ShowContainer
