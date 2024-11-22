'use client'

import React from 'react'
import { Empty } from '../..'
import { useResourceContext } from 'frontend-js'

type ProductEmptyProps = {
	icon?: any
	title?: string
	description?: string
}

const ProductEmpty: React.FC<ProductEmptyProps> = (props) => {
	const { resources } = useResourceContext()
	const {
		icon = 'Search',
		title = 'No products',
		description = 'No products available.',
	} = props || {}

	if (resources?.length > 0) return null
	return <Empty icon={icon} title={title} description={description} />
}

export default ProductEmpty
