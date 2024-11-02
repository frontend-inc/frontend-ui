'use client'

import React from 'react'
import { ShowFields, Image } from '../../../components'
import { Typography } from '../../core'
import { ShowFieldType } from '../../../types'

type ResourceDetailsProps = {
	avatar?: React.ReactNode
	resource: any
	primary: string
	secondary?: string
	label?: string
	image?: string
	fields: ShowFieldType[]
	direction?: 'row' | 'column'
}

const ResourceDetails: React.FC<ResourceDetailsProps> = (props) => {
	
  const {
		avatar,
		resource,
		primary,
		secondary,
		label,
		image,
		fields = [],
	} = props || {}
  
	return (
		<div className="w-full flex flex-col space-y-6">
			{image && (
				<div className="w-full h-[240px]">
					<Image alt={label} src={image} label={label} />
				</div>
			)}
			{ primary && <Typography variant="h4" className="px-2">{primary}</Typography> }
			{secondary && (
				<Typography variant="body1" className="px-2 text-lg italic text-muted-foreground">
					{secondary}
				</Typography>
			)}
			<ShowFields
				fields={fields}
				resource={resource}
			/>
		</div>
	)
}

export default ResourceDetails
