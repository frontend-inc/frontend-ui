'use client'

import React from 'react'
import { Chip } from '@nextui-org/react'
import { FieldWrapper } from '../../../components'
import { cn } from '@nextui-org/react'

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
						<Chip className="whitespace-nowrap" key={index}>
							{value}
						</Chip>
					))}
			</div>
		</FieldWrapper>
	)
}

export default FieldArray
