'use client'

import React from 'react'
import { ShowFields, Image } from '../../../components'
import { Typography } from '../../../components'
import { MetafieldType } from '../../../types'
import { cn } from 'frontend-shadcn'

type ResourceDetailsProps = {
	disableImage?: boolean
	actions?: React.ReactNode
	resource: any
	title?: string
	subtitle?: string
	label?: string
	image?: string
	height?: number
	fields: MetafieldType[]
	direction?: 'row' | 'column'
}

const ResourceDetails: React.FC<ResourceDetailsProps> = (props) => {
	const {
		disableImage,
		resource,
		title,
		subtitle,
		label,
		image,
		fields = [],
	} = props || {}

	return (
		<div className="w-full">
			<div className="w-full flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
				{!disableImage && (
					<div className="flex flex-col space-y-6 w-full sm:w-1/3">
						<div className="w-full h-full">
							<Image alt={label} src={image} label={label} />
						</div>
					</div>
				)}
				<div
					className={cn(
						'w-full flex flex-col space-y-6',
						!disableImage && 'sm:w-2/3'
					)}
				>
					{title && (
						<Typography variant="h4" className="px-2">
							{title}
						</Typography>
					)}
					{subtitle && (
						<Typography
							variant="body1"
							className="px-2 text-lg italic text-muted-foreground"
						>
							{subtitle}
						</Typography>
					)}
					<ShowFields fields={fields} resource={resource} />
				</div>
			</div>
		</div>
	)
}

export default ResourceDetails
