'use client'

import React from 'react'
import { DisplayFields, Image } from '../..'
import { Typography } from '../../core'
import { MetafieldType } from '../../../types'
import { DOCUMENT_SHOW_FIELDS } from '../../../constants'

type CollectionHeroProps = {
  resource: any
  primary?: string
  secondary?: string
  hero?: React.ReactNode
  actions?: React.ReactNode
	label?: string
	image?: string
  metafields?: MetafieldType[]
}

const CollectionDetails: React.FC<CollectionHeroProps> = (props) => {
	
  const {		
    actions,
    resource,
		metafields = [],
	} = props || {}

  const fields = DOCUMENT_SHOW_FIELDS[resource?.documentType] 

  const filteredFields = fields.filter(
    (field) => !['image','label','title'].includes(field.name)
  )

  const imageField = fields.find((field) => field.name === 'image')  
  
	return (
		<div className="w-full flex flex-col space-y-6">
			{imageField && (
				<div className="w-full h-[240px]">
					<Image alt={resource?.label} src={resource?.image?.url} label={resource?.label} />
				</div>
			)}
      { actions && (
        <div className="flex flex-row items-center justify-center w-full">
          { actions }
        </div>
      )}
			<DisplayFields
				fields={[
          ...filteredFields,
          ...metafields
        ]}
				resource={resource}
			/>
		</div>
	)
}

export default CollectionDetails
