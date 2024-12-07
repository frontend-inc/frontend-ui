'use client'

import React from 'react'
import { Badge } from 'frontend-shadcn'
import { FieldWrapper } from '../../../components'
import { cn } from 'frontend-shadcn'

type FieldArrayProps = {
	value?: any[]
	label?: string
	direction?: 'row' | 'column'
	className?: string
}

const FieldArray: React.FC<FieldArrayProps> = (props) => {
	const { value: values, label, className, direction } = props
	return (
		<FieldWrapper label={label} direction={direction}>
			<div
				className={cn(
					'flex flex-row gap-2 overflow-x-scroll flex-nowrap',
					className
				)}
			>
				{Array.isArray(values) &&
					values?.map((value, index) => (
						<Badge
							variant="secondary"
							className="px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap"
							key={index}
						>
							{value}
						</Badge>
					))}
			</div>
		</FieldWrapper>
	)
}

export default FieldArray
