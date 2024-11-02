'use client'

import React from 'react'
import ShowField from './ShowField'
import { ShowFieldType } from '../../../types'
import { cn } from 'frontend-shadcn'

type ShowFieldsProps = {
	fields: ShowFieldType[]
	resource: any
	className?: string
}

const ShowFields: React.FC<ShowFieldsProps> = (props) => {
	const {
		className,
		fields,
		resource,
	} = props || {}

	return (
		<div
			className={cn(
				'w-full flex flex-col space-y-4',
				className
			)}
		>
			{fields?.map((field, index) => (
				<ShowField
					key={index}
					field={field}
					resource={resource}
				/>
			))}
		</div>
	)
}

export default ShowFields
