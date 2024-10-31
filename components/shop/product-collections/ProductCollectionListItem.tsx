'use client'

import React from 'react'
import { ProductCollectionCard } from '../..'

type ProductCollectionListItemProps = {
	resource: any
	handleClick: () => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const ProductCollectionListItem: React.FC<ProductCollectionListItemProps> = (
	props
) => {
	const {
		resource,
		handleClick,
		enableGradient = false,
		enableOverlay = false,
	} = props

	return (
		<ProductCollectionCard
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
			handleClick={handleClick}
			slots={{
				image: {
					enableGradient,
					enableOverlay,
				},
			}}
		/>
	)
}

export default ProductCollectionListItem
