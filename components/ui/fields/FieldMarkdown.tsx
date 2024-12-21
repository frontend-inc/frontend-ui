'use client'

import React from 'react'
import { FieldWrapper } from '../..'
import { FieldElementProps } from './Field'
//@ts-ignore
import Markdown from 'react-markdown'
import { cn } from 'frontend-shadcn'

type FieldMarkdownProps = FieldElementProps & {
	maxChars?: number
	expandable?: boolean
}

const FieldMarkdown: React.FC<FieldMarkdownProps> = (props) => {
	
  const {
		value,
		label,
		className,
	} = props

	return (
		<FieldWrapper label={label}>
			<div className={ cn('prose', className) }>
        <Markdown>{ value }</Markdown>      
      </div>
		</FieldWrapper>
	)
}

export default FieldMarkdown
