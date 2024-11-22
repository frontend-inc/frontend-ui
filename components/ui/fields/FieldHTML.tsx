'use client'

import React from 'react'
import { FieldWrapper } from '../..'
import { FieldElementProps } from './Field'
import { cn } from 'frontend-shadcn'

const FieldHTML: React.FC<FieldElementProps> = (props) => {
	const { value, label, className } = props

	return (
		<FieldWrapper label={label}>
			<div className={cn('prose w-full', className)}>
				<div dangerouslySetInnerHTML={{ __html: value }} />
			</div>
		</FieldWrapper>
	)
}

export default FieldHTML
