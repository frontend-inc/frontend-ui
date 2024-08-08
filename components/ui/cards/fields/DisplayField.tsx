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
	alignItems?: 'flex-start' | 'center' | 'flex-end'
}

const DisplayField: React.FC<FieldProps> = (props) => {
	const {
		field,
		resource,
		color = 'text.secondary',
		alignItems = 'flex-start',
		...rest
	} = props
	const { name, variant: fieldVariant, icon } = field
	let value = get(resource, name)
	if (!value || value?.length == 0) return null

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
		email: FieldString,
		phone: FieldString,
	}

	const variantProps = {
		string: {
			value: truncate(value),
		},
		text: {
			variant: 'body1',
		},
		image: {
			height: 64,
			width: 64,
		},
	}

	const Component = components[fieldVariant] || FieldString
	const componentProps = variantProps?.[fieldVariant] || {}

	if (!value || value == '') return null
	return (
		<Component
			disablePadding
			icon={icon}
			variant="caption"
			color={color}
			value={value}
			alignItems={alignItems}
			{...componentProps}
			{...rest}
		/>
	)
}

export default DisplayField
