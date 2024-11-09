'use client'

import React from 'react'
import { ShowFields, Image } from '../../../components'
import { Typography } from '../../core'
import { MetafieldType } from '../../../types'

type ResourceDetailsProps = {
	hero?: React.ReactNode
	actions?: React.ReactNode
	resource: any
	primary?: string
	secondary?: string
	label?: string
	image: string
	fields: MetafieldType[]
	direction?: 'row' | 'column'
}

const ResourceDetails: React.FC<ResourceDetailsProps> = (props) => {
	const {
		resource,
		primary,
		secondary,
		actions,
		label,
		image,
		fields = [],
	} = props || {}

	const imageField = fields.find((field) => field.variant === 'image')

	return (
		<div className="w-full flex flex-col space-y-6">
			{imageField && (
				<div className="w-full h-[240px]">
					<Image alt={label} src={image} label={label} />
				</div>
			)}
			{actions && (
				<div className="flex flex-row items-center justify-center w-full">
					{actions}
				</div>
			)}
			{primary && (
				<Typography variant="h4" className="px-2">
					{primary}
				</Typography>
			)}
			{secondary && (
				<Typography
					variant="body1"
					className="px-2 text-lg italic text-muted-foreground"
				>
					{secondary}
				</Typography>
			)}
			<ShowFields fields={fields} resource={resource} />
		</div>
	)
}

export default ResourceDetails
