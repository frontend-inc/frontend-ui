import React from 'react'
import { CoverImage } from '../..'
import { CollectionType } from 'frontend-shopify'

type CollectionCoverImageProps = {
	shopifyCollection: CollectionType
	editing?: boolean
	height?: number
	width?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	opacity?: number
	overlayColor?: string
	href?: string
}

const CollectionCoverImage: React.FC<CollectionCoverImageProps> = (props) => {
	const {
		shopifyCollection,
		editing = false,
		handleClick,
		height = 400,
		alt = 'image',
		enableGradient = false,
		enableOverlay = false,
		opacity = 0.5,
		alignItems = 'center',
		overlayColor = '#000000',
		href,
	} = props

	if (!shopifyCollection) return null
	return (
		<CoverImage
			editing={editing}
			enableOverlay={enableOverlay}
			enableGradient={enableGradient}
			opacity={opacity}
			overlayColor={overlayColor}
			height={height}
			title={shopifyCollection?.title}
			description={shopifyCollection?.description}
			image={shopifyCollection?.image?.url}
			alt={alt}
			alignItems={alignItems}
			href={href}
			handleClick={handleClick}
		/>
	)
}

export default CollectionCoverImage
