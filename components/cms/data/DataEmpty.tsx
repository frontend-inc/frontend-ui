'use client'

import React from 'react'
import { Alert } from '../../../components'
import { useResourceContext } from 'frontend-js'

type DataEmptyProps = {
	icon?: any
	title?: string
	description?: string
}

const DataEmpty: React.FC<DataEmptyProps> = (props) => {
	const { resources } = useResourceContext()
	const { icon, title, description } = props || {}

	if (resources?.length > 0) return null
	return (
		<div className="flex justify-center items-center px-2">
			<Alert icon={icon} title={title} description={description} />
		</div>
	)
}

export default DataEmpty
