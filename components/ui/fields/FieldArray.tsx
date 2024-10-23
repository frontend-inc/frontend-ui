'use client'

import React from 'react'
import { Badge } from 'frontend-shadcn'
import { FieldWrapper } from '../../../components'

type FieldArrayProps = {
	value?: any[]
	label?: string
	disableLabel?: boolean
	direction?: 'row' | 'column'
}

const FieldArray: React.FC<FieldArrayProps> = (props) => {
	const { value: values, disableLabel, label, direction } = props
	return (
		<FieldWrapper
			disableLabel={disableLabel}
			label={label}
			direction={direction}
		>
			<div className="flex flex-row gap-2">
				{Array.isArray(values) &&
					values?.map((value, index) => (
						<Badge variant="secondary" className="px-3 py-1 rounded-full" key={index}>
              { value }
            </Badge>
					))}
			</div>
		</FieldWrapper>
	)
}

export default FieldArray
