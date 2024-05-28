import React, { useEffect } from 'react'
import { Stack } from '@mui/material'
import { useCollections } from 'frontend-shopify'
import { ProductCarousel } from '../../../components/shopify'

export type ProductCollectionCarouselProps = {
	href: string
	handle: string
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
	enableOkendoStarRating?: boolean
}

const ProductCollectionCarousel: React.FC<ProductCollectionCarouselProps> = (
	props
) => {
	const {
		handle,
		href,
		enableAutoPlay = false,
		enableArrows = false,
		enableDots = false,
		enableBorder = false,
		enableAddToCart = false,
		enableQuickShop = false,
		enableQuantity = false,
		enableOkendoStarRating = false,
	} = props

	const { loading, products, findCollection } = useCollections()

	useEffect(() => {
		if (handle) {
			findCollection(handle)
		}
	}, [handle])

	return (
		<Stack spacing={2}>
			<ProductCarousel
				href={href}
				loading={loading}
				products={products}
				enableAutoPlay={enableAutoPlay}
				enableArrows={enableArrows}
				enableDots={enableDots}
				enableBorder={enableBorder}
				enableAddToCart={enableAddToCart}
				enableQuickShop={enableQuickShop}
				enableQuantity={enableQuantity}
				enableOkendoStarRating={enableOkendoStarRating}
			/>
		</Stack>
	)
}

export default ProductCollectionCarousel
