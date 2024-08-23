import React from 'react'
import { CollectionForm } from '../..'
import { FormFieldType } from '../../../types'
import { ResourceProvider } from 'frontend-js'

export type ShowContainerProps = {
	url: string
	fields: FormFieldType[]
	children: React.ReactNode
	resource: any
}

const ShowContainer: React.FC<ShowContainerProps> = (props) => {
	const { url, fields, resource, children } = props || {}
	return (
		<ResourceProvider name="document" resource={resource} url={url}>
			{children}
			<CollectionForm fields={fields} />
		</ResourceProvider>
	)
}

export default ShowContainer
