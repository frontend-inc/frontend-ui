import React from 'react'
import { CollectionForm, CollectionReferences } from '../..'
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
		<ResourceProvider name="document" resource={resource} url={url}>
			{children}
			<CollectionForm />
			{foreignUrl && <CollectionReferences url={foreignUrl} />}
		</ResourceProvider>
	)
}

export default ShowContainer
