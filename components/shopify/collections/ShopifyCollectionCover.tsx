'use client'

import React from 'react'
import { Cover } from '../..'
import { ShopifyCollectionType } from 'frontend-shopify'

export type ShopifyCollectionCoverProps = {
	shopifyCollection: ShopifyCollectionType
	editing?: boolean
	alignItems?: 'flex-start' | 'center' | 'flex-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	overlayColor?: string
	buttonText?: string
}

const ShopifyCollectionCover: React.FC<ShopifyCollectionCoverProps> = (
	props
) => {
	const {
		shopifyCollection,
		handleClick,
		alt = 'image',
		enableGradient = false,
		enableOverlay = false,
		alignItems = 'center',
		buttonText,
	} = props

	if (!shopifyCollection) return null
	return (
		<Cover
			enableOverlay={enableOverlay}
			enableGradient={enableGradient}
			title={shopifyCollection?.title}
			// @ts-ignore
			image={shopifyCollection?.image?.url}
			alt={alt}
			alignItems={alignItems}
			handleClick={handleClick}
			buttonText={buttonText}
		/>
	)
}

export default ShopifyCollectionCover
