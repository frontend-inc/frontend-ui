'use client'

import React from 'react'
import { NoImage, FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

const FieldVideo: React.FC<FieldElementProps> = (props) => {
	const { value, label } = props
	return (
		<FieldWrapper label={label}>
			{value?.url ? 
        <video src={value?.url} controls muted autoPlay className='w-full' /> : 
        <NoImage height={240} />
      }
		</FieldWrapper>
	)
}

export default FieldVideo
