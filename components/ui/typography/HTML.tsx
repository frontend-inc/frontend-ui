'use client'

import React from 'react'
import { HTMLEditor } from '../..'
import { SyntheticEventType } from '../../../types'

export type HTMLProps = {
	children: string
	isEditing?: boolean
	handleChange: (event: SyntheticEventType) => void
}

const HTML: React.FC<HTMLProps> = (props) => {
	const { children, isEditing, handleChange } = props || {}

	return !isEditing ? (
		<div className="w-full prose text-left items-start justify-start">
			<div dangerouslySetInnerHTML={{ __html: children }} />
		</div>
	) : (
		<HTMLEditor value={children} name="html" handleChange={handleChange} />
	)
}

export default HTML
