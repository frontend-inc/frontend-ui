'use client'

import React from 'react'
import { PDP } from '../..'
import {
	ProductRating,
	SocialButtons,
	SubscribeButton,
	AddToCartButton,
} from '../..'
import { ProductType } from '../../../types'

export type ProductDetailsProps = {
	handle?: string
	direction?: 'row' | 'column'
	product: ProductType
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	handleEdit?: (res: any) => void
}

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
	const {
		direction,
		product,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableRatings,
		enableGradient,
		enableOverlay,
	} = props || {}

	if (!product?.id) return null
	return (
		<PDP
			direction={direction}
			image={product?.image?.url}
			title={product?.title}
			price={product?.display_price}
			compareAtPrice={product?.display_compare_at_price}
			description={product?.description}
			enableGradient={enableGradient}
			enableOverlay={enableOverlay}
			enableRatings={enableRatings}
			rating={product?.average_rating}
			actions={
				<SocialButtons
					size="large"
					justifyContent={'center'}
					resource={product}
					product={product}
					enableProductLikes={enableLikes}
					enableProductFavorites={enableFavorites}
					enableSharing={enableSharing}
				/>
			}
			addToCart={
				product.recurring ? (
					<SubscribeButton
						availableForSale
						size="lg"
						productId={product?.id}
						className="max-w-[360px]"
					/>
				) : (
					<AddToCartButton
						availableForSale
						size="lg"
						productId={product?.id}
						className="max-w-[360px]"
					/>
				)
			}
		/>
	)
}

export default ProductDetails
