'use client'

import React, { useEffect } from 'react'
import { Cover, ShowButton, ProductCollectionShow } from '../..'
import { useProductCollections } from '../../../hooks'
import { ResourceProvider } from 'frontend-js'

export type ProductCollectionCoverProps = {
	height?: number
	alignItems?: 'items-center' | 'items-start' | 'items-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	productCollectionId: string | number
}

const ProductCollectionCover: React.FC<ProductCollectionCoverProps> = (
	props
) => {
  
	const {
		handleClick,
		height = 400,
		alt = 'image',
		enableGradient = false,
		enableOverlay = true,
		alignItems = 'items-center',
		productCollectionId,
	} = props

	const { productCollection, findProductCollection } = useProductCollections()

	useEffect(() => {
		if (productCollectionId) {
			findProductCollection(productCollectionId)
		}
	}, [productCollectionId])

	if (!productCollection) return null
	return (
		<ResourceProvider
			name="product_collection"
			url={`/shop/product_collections/${productCollectionId}`}
			resource={productCollection}
		>
			<Cover
				height={height}
				title={productCollection?.title}
				subtitle={productCollection?.description}
				image={productCollection?.image?.url}
				alt={alt}
				alignItems={alignItems}
				handleClick={handleClick}
				enableOverlay={enableOverlay}
				enableGradient={enableGradient}
				actions={<ShowButton>Browse</ShowButton>}
			/>
			<ProductCollectionShow />
		</ResourceProvider>
	)
}

export default ProductCollectionCover
