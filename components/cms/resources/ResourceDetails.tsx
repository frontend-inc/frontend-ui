'use client'

import React from 'react'
import { ShowFields, Image } from '../../../components'
import { Typography } from '../../../components'
import { MetafieldType } from '../../../types'
import { cn } from '@nextui-org/react'

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
		<div className="w-full py-4">
			<div className="w-full flex flex-col space-y-6">
				{!disableImage && (
					<div className="justify-center items-center flex flex-col space-y-6 w-full">
						<div className="min-w-[240px] min-h-[240px]">
							<Image
								alt={label}
								src={image}
								label={label}
								height={240}
								fullWidth
							/>
						</div>
					</div>
				)}
				<div className={cn('w-full flex flex-col space-y-6')}>
					{title && (
						<Typography variant="h4" className="px-2">
							{title}
						</Typography>
					)}
					{subtitle && (
						<Typography
							variant="body1"
							className="px-2 text-lg italic text-foreground/70"
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
