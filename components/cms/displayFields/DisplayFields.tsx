import React from 'react'
import { DisplayField } from '../..'
import { DisplayFieldType } from '../../../types'

type DisplayFieldsProps = {
	fields: DisplayFieldType[]
	resource: any
	enableTitle?: boolean
	enableRatings?: boolean
	alignItems?: 'flex-start' | 'center' | 'flex-end'
}

const DisplayFields: React.FC<DisplayFieldsProps> = (props) => {
	const { fields, resource, alignItems = 'flex-start' } = props || {}

	return (
		<div className="flex flex-row space-x-2">	
			{fields?.map((field, index) => (
				<DisplayField
					key={index}
					field={field}
					resource={resource}
					alignItems={alignItems}
				/>
			))}
		</div>
	)
}

export default DisplayFields
