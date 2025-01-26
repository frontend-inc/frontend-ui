'use client'

import React from 'react'
import { HTMLEditor } from '../../../components'
import { SyntheticEventType } from '../../../types'

export type RichTextProps = {
	html: string
	isEditing?: boolean
	handleChange: (event: SyntheticEventType) => void
}

const RichText: React.FC<RichTextProps> = (props) => {
	const { html, isEditing, handleChange } = props || {}

	return !isEditing ? (
		<div className="w-full prose text-left items-start justify-start">
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	) : (
		<HTMLEditor     
      name="html" 
      value={html} 
      handleChange={handleChange} 
    />
	)
}

export default RichText
