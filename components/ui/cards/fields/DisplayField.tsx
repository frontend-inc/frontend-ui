import React from 'react'
import {
	FieldArray,
	FieldBoolean,
	FieldDate,
	FieldFile,
	FieldLocation,
	FieldImage,
	FieldJSON,
	FieldURL,
	FieldPrice,
	FieldRating,
	FieldString,
	FieldText,
	FieldVideo,
} from '../../..'
import { DisplayFieldType, TypographyVariantsType } from '../../../../types'
import { get } from 'lodash'
import { truncate } from '../../../../helpers'

export type FieldElementProps = {
	label?: string
	value: any
	color?: string
	direction?: 'row' | 'column'
	variant?: TypographyVariantsType
	placeholder?: string
	enableBorder?: boolean
	disablePadding?: boolean
}

type FieldProps = {
	label?: string
	color?: string
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
	variant?: TypographyVariantsType
	placeholder?: string
	enableBorder?: boolean
	disablePadding?: boolean
	field: DisplayFieldType
	resource?: any
}

const DisplayField: React.FC<FieldProps> = (props) => {
	const { field, resource, color = 'text.secondary', ...rest } = props
	const { variant: fieldVariant, icon } = field
	let value = get(resource, field?.name)
	if (!value) return null

	const components = {
		boolean: FieldBoolean,
		date: FieldDate,
		datetime: FieldDate,
		file: FieldFile,
		location: FieldLocation,
		image: FieldImage,
		video: FieldVideo,
		json: FieldJSON,
		url: FieldURL,
		rating: FieldRating,
		text: FieldText,
		number: FieldText,
		array: FieldArray,
		string: FieldString,
		select: FieldString,
		price: FieldPrice,
	}

	const variantProps = {
		string: {
			value: truncate(value),
		},
		text: {
			variant: 'body1',
			value: truncate(value, 80),
		},
		image: {
			height: 64,
			width: 64,
		},
	}

	const Component = components[fieldVariant]
	const componentProps = variantProps?.[fieldVariant] || {}

	return (
		<Component
			disablePadding
			icon={icon}
			variant="caption"
			color={color}
			direction="row-reverse"
			value={value}
			{...componentProps}
			{...rest}
		/>
	)
}

export default DisplayField
