'use client'

import React from 'react'
import { DisplayField } from '../..'
import { MetafieldType } from '../../../types'
import { cn } from 'frontend-shadcn'

type DisplayFieldsProps = {
	fields: MetafieldType[]
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
				'w-full flex flex-col space-y-4 justify-center items-center',
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
