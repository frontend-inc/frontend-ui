'use client'

import React from 'react'
import {
	FieldArray,
	FieldBoolean,
	FieldDate,
	FieldFile,
	FieldHTML,
	FieldLocation,
	FieldImage,
	FieldMarkdown,
	FieldURL,
	FieldPrice,
	FieldRating,
	FieldString,
	FieldText,
	FieldVideo,
	FieldVimeo,
	FieldYouTube,
	FieldShopify,
} from '../..'
import { MetafieldType } from '../../../types'
import { get } from 'lodash'
import { cn } from '@nextui-org/react'

type DisplayFieldProps = {
	label?: string
	direction?: 'row' | 'column'
	placeholder?: string
	field: MetafieldType
	resource?: any
}

const DisplayField: React.FC<DisplayFieldProps> = (props) => {
	const { field, resource, ...rest } = props
	const { name, label, variant: fieldVariant, icon } = field
	let value = get(resource, name)
	if (!value || value?.length == 0) return null

	const components = {
		boolean: FieldBoolean,
		date: FieldDate,
		datetime: FieldDate,
		file: FieldFile,
		html: FieldHTML,
		location: FieldLocation,
		image: FieldImage,
		video: FieldVideo,
		url: FieldURL,
		rating: FieldRating,
		text: FieldText,
		markdown: FieldMarkdown,
		number: FieldText,
		array: FieldArray,
		string: FieldString,
		select: FieldString,
		price: FieldPrice,
		email: FieldString,
		phone: FieldString,
		shopify_product: FieldShopify,
		vimeo_video: FieldVimeo,
		youtube_video: FieldYouTube,
	}

	const variantProps = {
		array: {
			className: 'px-[40px] sm:px-[100px] py-1 text-sm font-medium',
		},
		email: {
			className: 'w-full text-center text-sm italic',
		},
		file: {
			className: 'w-full justify-center',
		},
		string: {
			className: 'w-full text-center text-md font-normal tracking-wide',
		},
		text: {
			className: 'px-[40px] sm:px-[100px] leading-relaxed text-lg',
		},
		html: {
			className: 'prose',
		},
		image: {
			label,
		},
		video: {
			height: 450,
			width: 800,
		},
		youtube_video: {
			height: 450,
			width: 800,
		},
		vimeo_video: {
			height: 450,
			width: 800,
		},
		location: {
			lat: resource?.lat,
			lng: resource?.lng,
			label: resource?.title,
			image: resource?.image?.url,
			zoom: 16,
			darkTheme: false,
		},
	}

	const Component = components[fieldVariant] || FieldString
	const componentProps = variantProps?.[fieldVariant] || {}

	if (!value || value == '') return null
	return (
		<div className="max-w-screen-lg w-full min-w-[280px] sm:min-w-[640px] md:min-w-[768px]">
			<div className="container justify-center items-center">
				<Component
					icon={icon}
					variant="caption"
					value={value}
					{...componentProps}
				/>
			</div>
		</div>
	)
}

export default DisplayField
