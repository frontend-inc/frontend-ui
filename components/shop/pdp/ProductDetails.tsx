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

export type ProductProps = ProductDetailsProps & {
	slots?: {
		image?: any
		content?: any
	}
}

const ProductDetails: React.FC<ProductProps> = (props) => {
	const {
    direction,
    product,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableRatings,
		enableGradient,
		enableOverlay,
		slots: defaultSlots = {
			image: {},
			content: {},
		},
	} = props || {}


	let slots = {
		image: {
			enableGradient,
			enableOverlay,
			...defaultSlots.image,
		},
		content: {
			...defaultSlots.content,
		},
	}

	if (!product?.id) return null
	return (
		<PDP
      direction={direction}
			image={product?.image?.url}
			primary={product?.title}
			price={product?.display_price}
			compareAtPrice={product?.display_compare_at_price}
			description={product?.description}
			secondary={
				<div className="w-full">
					{enableRatings == true && (
						<ProductRating resource={product} enableTotal />
					)}
				</div>
			}
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
        product.recurring ? 
        <SubscribeButton 
          availableForSale 
          size="lg" 
          productId={product?.id} 
          className="max-w-[360px]"
        /> :
				<AddToCartButton 
          availableForSale 
          size="lg" 
          productId={product?.id} 
          className="max-w-[360px]"
        />					
			}
			slots={slots}
		/>
	)
}

export default ProductDetails
