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

type ShowFieldProps = {
	label?: string
	direction?: 'row' | 'column'
	placeholder?: string
	field: ShowFieldType
	resource?: any
}

const ShowField: React.FC<ShowFieldProps> = (props) => {
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
		location: FieldString,
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
		email: FieldURL,
		phone: FieldURL,
    calendly_url: FieldURL,
    soundcloud_audio: FieldURL,
    vimeo_video: FieldURL,
    youtube_video: FieldURL
	}

	const variantProps = {
    array: {
      className: '',
    },
    email: {
      className: 'italic text-sm',
    },
    string: {
      className: 'text-sm',
    },    
		text: {
			className: 'text-md',
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
    <div className='w-full p-3 rounded-lg bg-muted/40 hover:bg-muted/60'>
      <Component        
        icon={icon}
        variant="caption"				
        value={value}
        label={label}
        {...componentProps}
      />
    </div>
	)
}

export default ShowField
