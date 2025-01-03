'use client'

import React, { useEffect, useState } from 'react'
import { Cover } from '../..'
import { useCollections } from 'frontend-shopify'
import { ShopifyProductCollectionModal } from '../../../components'

export type ShopifyCollectionCoverProps = {
	shopifyCollection: string
	alignItems?: 'items-center' | 'items-start' | 'items-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	overlayColor?: string
	buttonText?: string
	enableQuantity?: boolean
	enableAddToCart?: boolean
}

const ShopifyCollectionCover: React.FC<ShopifyCollectionCoverProps> = (
	props
) => {
	const {
		shopifyCollection,
		alt = 'image',
		handleClick,
		enableGradient = false,
		enableOverlay = false,
		alignItems = 'items-center',
		buttonText,
		enableQuantity,
		enableAddToCart,
	} = props

	const [open, setOpen] = useState(false)

	const { collection, findCollection } = useCollections()

	const handleShowClick = () => {
		if (handleClick) {
			handleClick()
		} else {
			setOpen(true)
		}
	}

	useEffect(() => {
		if (shopifyCollection) {
			findCollection(shopifyCollection)
		}
	}, [shopifyCollection])

	if (!shopifyCollection) return null
	return (
		<>
			<Cover
				enableOverlay={enableOverlay}
				enableGradient={enableGradient}
				title={collection?.title}
				// @ts-ignore
				image={collection?.image?.url}
				alt={alt}
				alignItems={alignItems}
				handleClick={handleShowClick}
				buttonText={buttonText}
			/>
			<ShopifyProductCollectionModal
				collection={collection}
				open={open}
				handleClose={() => setOpen(false)}
				enableQuantity={enableQuantity}
				enableAddToCart={enableAddToCart}
			/>
		</>
	)
}

export default ShopifyCollectionCover
