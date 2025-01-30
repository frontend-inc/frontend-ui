'use client'

import React from 'react'
import { HTMLEditor } from '../../../components'
import { SyntheticEventType } from '../../../types'
import { BlockEditor } from '@block-editor/components/BlockEditor'
import { useCollaboration } from '@block-editor/hooks/useCollaboration'

export type RichTextProps = {
	html: string
	isEditing?: boolean
	handleChange: (event: SyntheticEventType) => void
}

const RichText: React.FC<RichTextProps> = (props) => {
	const { html, isEditing, handleChange } = props || {}

  const providerState = useCollaboration({
    docId: 'tiptap',
    enabled: false 
  })


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
