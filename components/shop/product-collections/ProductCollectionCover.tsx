import React from 'react'
import { Cover } from '../..'
import { ProductCollectionType } from '../../../types'

export type ProductCollectionCoverProps = {
	productCollection: ProductCollectionType
	editing?: boolean
	height?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	opacity?: number
	overlayColor?: string
	href?: string
}

const ProductCollectionCover: React.FC<ProductCollectionCoverProps> = (
	props
) => {
	const {
		productCollection,
		handleClick,
		height = 400,
		alt = 'image',
		enableGradient = false,
		enableOverlay = true,
		opacity = 0.5,
		alignItems = 'center',
		overlayColor = '#000000',
		href,
	} = props

	if (!productCollection) return null
	return (
		<Cover
			enableOverlay={enableOverlay}
			enableGradient={enableGradient}
			opacity={opacity}
			overlayColor={overlayColor}
			height={height}
			title={productCollection?.title}
			description={productCollection?.description}
			image={productCollection?.image?.url}
			alt={alt}
			alignItems={alignItems}
			href={href}
			handleClick={handleClick}
		/>
	)
}

export default ProductCollectionCover
