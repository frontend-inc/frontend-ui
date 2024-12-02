'use client'

import React from 'react'
import { DisplayFields, Image } from '../..'
import { MetafieldType } from '../../../types'
import { DOCUMENT_SHOW_FIELDS } from '../../../constants'

type DocumentHeroProps = {
	disableImage?: boolean
	resource: any
	actions?: React.ReactNode
	metafields?: MetafieldType[]
}

const DocumentDetails: React.FC<DocumentHeroProps> = (props) => {
	const { actions, resource, disableImage, metafields = [] } = props || {}

	const fields = DOCUMENT_SHOW_FIELDS[resource?.content_type || 'post'] 

	const filteredFields = fields.filter(
		(field) => !['image', 'label', 'title'].includes(field.name)
	)

	return (
		<div className="w-full flex flex-col space-y-6">
			{!disableImage && (
				<div className="w-full flex flex-row justify-center">
					<div className="w-full h-[320px] max-w-screen-sm">
						<Image
							alt={resource?.label}
							src={resource?.image?.url}
							label={resource?.label}
						/>
					</div>
				</div>
			)}
			{actions && (
				<div className="flex flex-row items-center justify-center w-full">
					{actions}
				</div>
			)}
			<DisplayFields
				fields={[...filteredFields, ...metafields]}
				resource={resource}
			/>
		</div>
	)
}

export default DocumentDetails
