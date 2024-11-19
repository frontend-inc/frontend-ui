'use client'

import React from 'react'
import { FieldWrapper } from '../..'
import { FieldElementProps } from './Field'

const FieldHTML: React.FC<FieldElementProps> = (props) => {
	
  const {
		value,
		label,
	} = props

	return (
		<FieldWrapper label={label}>
      <div dangerouslySetInnerHTML={{ __html: value }} />			
		</FieldWrapper>
	)
}

export default FieldHTML
