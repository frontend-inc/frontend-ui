import React from 'react'
import {
	FieldArray,
	FieldBoolean,
	FieldDate,
	FieldFile,
	FieldImage,
	FieldLocation,
	FieldJSON,
	FieldURL,
	FieldPrice,
	FieldRating,
	FieldString,
	FieldText,
	FieldVideo,
} from '../../../components'
import { DisplayFieldType, TypographyVariantsType } from '../../../types'
import { get } from 'lodash'
import moment from 'moment'

export type FieldElementProps = {
	label?: string
	value: any
	color?: string
	direction?: 'row' | 'column'
	variant?: TypographyVariantsType
	alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
	placeholder?: string
	enableBorder?: boolean
	disablePadding?: boolean
	dateFormat?: string
}

type FieldProps = {
	field: DisplayFieldType
	resource?: any
	label?: string
	color?: string
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
	variant?: TypographyVariantsType
	placeholder?: string
	enableBorder?: boolean
	disablePadding?: boolean
	dateFormat?: string
}

const Field: React.FC<FieldProps> = (props) => {
	const { field, resource, dateFormat = 'MM/DD/YYYYY', ...rest } = props
	const { variant: fieldVariant, label } = field
	let value = get(resource, field?.name)
	if (!value) {
		switch (fieldVariant) {
			case 'array':
				value = []
			default:
				value = '-'
				break
		}
	}

	if (field?.variant == 'date' || field?.variant == 'datetime') {
		value = moment(value).format(dateFormat)
	}

	const components = {
		boolean: FieldBoolean,
		date: FieldDate,
		datetime: FieldDate,
		file: FieldFile,
		float: FieldString,
		image: FieldImage,
		video: FieldVideo,
		json: FieldJSON,
		url: FieldURL,
		rating: FieldRating,
		text: FieldText,
		location: FieldLocation,
		number: FieldString,
		array: FieldArray,
		string: FieldString,
		select: FieldString,
		price: FieldPrice,
	}

	const Component = components[fieldVariant]

	return <Component value={value} label={label} {...rest} />
}

export default Field
