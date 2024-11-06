'use client'

import React from 'react'
import { ProductCard } from '../..'
import { SocialButtons } from '../..'
import { SubscribeButton, AddToCartButton } from '../../../components'

type ProductListItemProps = {
	resource: any
	buttonText?: string
	handleClick: () => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
	disableBorder?: boolean
}

const ProductListItem: React.FC<ProductListItemProps> = (props) => {
	const {
		resource,
		handleClick,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
		enableRatings = false,
		disableBorder = false,
	} = props

	return (
		<ProductCard
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
			price={resource?.display_price}
			compareAtPrice={resource?.display_compare_at_price}
			handleClick={handleClick}
			actions={
				<div>
					<SocialButtons
						size="small"
						justifyContent="flex-start"
						resource={resource}
						product={resource}
						enableProductLikes={enableLikes}
						enableProductFavorites={enableFavorites}
					/>
				</div>
			}
			addToCart={
        resource?.recurring ? 
        <SubscribeButton 
          availableForSale
          fullWidth
          productId={resource?.id}
          size="lg"
          price={resource?.display_price}
        /> :        
				<AddToCartButton
					availableForSale
					fullWidth
					productId={resource?.id}
					size="lg"
          price={resource?.display_price}
				/>
			}
			disableBorder={disableBorder}
			slots={{
				image: {
					enableGradient,
					enableOverlay,
				},
			}}
		/>
	)
}

export default ProductListItem
