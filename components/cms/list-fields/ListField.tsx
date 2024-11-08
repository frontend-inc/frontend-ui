'use client'

import React from 'react'
import {
	FieldArray,
	FieldBoolean,
	FieldDate,
	FieldFile,
	FieldURL,
	FieldPrice,
	FieldRating,
	FieldString,
	FieldText,
} from '../..'
import { MetafieldType } from '../../../types'
import { get } from 'lodash'
import { truncate } from '../../../helpers'
import { cn } from 'frontend-shadcn'

type FieldProps = {
	label?: string
	color?: string
	direction?: 'row' | 'column'
	placeholder?: string
	field: MetafieldType
	resource?: any
}

const ListField: React.FC<FieldProps> = (props) => {
	const {
		field,
		resource,
		color = 'text.secondary',
		...rest
	} = props
	const { name, label, variant: fieldVariant, icon } = field
	let value = get(resource, name)
	if (!value || value?.length == 0) return null

	const components = {
		boolean: FieldBoolean,
		date: FieldDate,
		datetime: FieldDate,
		file: FieldFile,
		location: FieldString,
		image: FieldURL,
		video: FieldURL,		
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
    youtube_video: FieldURL,
    vimeo_video: FieldURL,
    soundcloud_audio: FieldURL,
    shopify_product: FieldString,
	}

	const variantProps = {
		string: {
      variant: 'body2',
			value: truncate(value),
      className: 'text-sm text-muted-foreground'
		},
		text: {
      expandable: true,
			variant: 'body2',
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
      icon={icon}
      variant="caption"
      color={color}
      value={value}				
      {...componentProps}
      {...rest}
    />
	)
}

export default ListField
