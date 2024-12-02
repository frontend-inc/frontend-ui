'use client'

import React from 'react'
import { Empty } from '../..'
import { useResourceContext } from 'frontend-js'

type DocumentEmptyProps = {
	icon?: any
	title?: string
	description?: string
}

const DocumentEmpty: React.FC<DocumentEmptyProps> = (props) => {
	const { resources } = useResourceContext()
	const { icon, title, description } = props || {}

	if (resources?.length > 0) return null
	return (
		<div className="p-2 w-full flex justify-center items-center">
			<Empty icon={icon} title={title} description={description} />
		</div>
	)
}

export default DocumentEmpty
