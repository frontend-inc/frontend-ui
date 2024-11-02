'use client'

import React from 'react'
import {
	FieldArray,
	FieldBoolean,
	FieldDate,
	FieldFile,
	FieldLocation,
	FieldImage,
	FieldURL,
	FieldPrice,
	FieldRating,
	FieldString,
	FieldText,
	FieldVideo,
  FieldVimeo,
  FieldYouTube
} from '../..'
import { ShowFieldType } from '../../../types'
import { get } from 'lodash'
import { cn } from 'frontend-shadcn'

type DisplayFieldProps = {
	label?: string
	direction?: 'row' | 'column'
	placeholder?: string
	field: ShowFieldType
	resource?: any
}

const DisplayField: React.FC<DisplayFieldProps> = (props) => {
	const {
		field,
		resource,		
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
		location: FieldLocation,
		image: FieldImage,
		video: FieldVideo,
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
    vimeo_video: FieldVimeo,
    youtube_video: FieldYouTube
	}

	const variantProps = {
    array: {
      className: 'px-[40px] sm:px-[100px] py-1 text-sm font-medium',
    },
    email: {
      className: 'w-full italic text-center text-xs',
    },
    string: {
      className: 'uppercase w-full text-center text-xs font-medium tracking-widest',
    },    
		text: {
			className: 'px-[40px] sm:px-[100px] py-[40px] text-md',
		},	
    image: {      
      label,
      height: 400,
      className: "py-6",
    },
    video: {
      height: 450,
      width: 800
    },
    youtube_video: {
      height: 450,
      width: 800
    },
    vimeo_video: {
      height: 450,
      width: 800
    },
    location: {
      lat: resource?.lat,
      lng: resource?.lng,
      label: resource?.title,
      image: resource?.image?.url,
      zoom: 16,
      darkTheme: false 
    }	
	}

	const Component = components[fieldVariant] || FieldString
	const componentProps = variantProps?.[fieldVariant] || {}

	if (!value || value == '') return null
	return (
    <div className='max-w-screen-lg w-full min-w-[280px] sm:min-w-[640px] md:min-w-[768px]'>
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