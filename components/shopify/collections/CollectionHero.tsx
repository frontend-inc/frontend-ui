import React, { useEffect } from 'react'
import { CoverImage } from '../../../components'
import { useCollections } from 'frontend-shopify'

type CollectionHeroProps = {
	handle: string
	editing?: boolean
	height?: number
	width?: number
	objectFit?: 'cover' | 'contain'
	alignItems?: 'flex-start' | 'center' | 'flex-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	opacity?: number
	overlayColor?: string
	href?: string
}

const CollectionHero: React.FC<CollectionHeroProps> = (props) => {
	const {
		handle,
		editing = false,
		handleClick,
		height = 400,
		objectFit = 'cover',
		alt = 'image',
		enableGradient = false,
		enableOverlay = false,
		opacity = 0.5,
		alignItems = 'center',
		overlayColor = '#000000',
		href,
	} = props

	const { collection, findCollection } = useCollections()

	useEffect(() => {
		if (handle) {
			findCollection(handle)
		}
	}, [handle])

	if (!collection) return null
	return (
		<CoverImage
			editing={editing}
			enableOverlay={enableOverlay}
			enableGradient={enableGradient}
			opacity={opacity}
			overlayColor={overlayColor}
			height={height}
			title={collection?.title}
			description={collection?.description}
			image={collection?.image?.url}
			objectFit={objectFit}
			alt={alt}
			alignItems={alignItems}
			href={href}
			handleClick={handleClick}
		/>
	)
}

export default CollectionHero
