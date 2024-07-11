import React from 'react'
import { CollectionFormModal } from '../../../components'
import { FormFieldType } from '../../../types'
import { CollectionProvider } from 'frontend-js'

export type HeroContainerProps = {
	url: string
	fields: FormFieldType[]
	children: React.ReactNode
	resource: any
}

const HeroContainer: React.FC<HeroContainerProps> = (props) => {
	const { url, fields, resource, children } = props || {}
	return (
		<CollectionProvider 
      resource={resource} 
      url={url}
    >
			{children}
			<CollectionFormModal 
        fields={fields} 
      />
		</CollectionProvider>
	)
}

export default HeroContainer
