'use client'

import React from 'react'
import { ListField } from '../..'
import { MetafieldType } from '../../../types'
import { cn } from 'frontend-shadcn'

type ListFieldsProps = {
	fields: MetafieldType[]
	resource: any
	direction?: 'row' | 'column'
	className?: string
}

const ListFields: React.FC<ListFieldsProps> = (props) => {
	
  const {
		className,
		fields,
		resource,
	} = props || {}

	return (
		<div className={cn("flex flex-col space-y-2", className)}>
			{fields?.map((field, index) => (
				<ListField          
					key={index}
					field={field}
					resource={resource}					
				/>
			))}
		</div>
	)
}

export default ListFields
