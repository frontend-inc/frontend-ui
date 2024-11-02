'use client'

import React from 'react'
import { DisplayField } from '../..'
import { ShowFieldType } from '../../../types'
import { cn } from 'frontend-shadcn'

type DisplayFieldsProps = {
	fields: ShowFieldType[]
	resource: any
	className?: string
}

const DisplayFields: React.FC<DisplayFieldsProps> = (props) => {
	const {
		className,
		fields,
		resource,
	} = props || {}

	return (
		<div
			className={cn(
				'w-full flex flex-col space-y-3 justify-center items-center',
				className
			)}
		>
			{fields?.map((field, index) => (
				<DisplayField
					key={index}
					field={field}
					resource={resource}
				/>
			))}
		</div>
	)
}

export default DisplayFields
