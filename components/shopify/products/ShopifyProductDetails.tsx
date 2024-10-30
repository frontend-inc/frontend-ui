'use client'

import React from 'react'
import {
	ShopifyAddToCartButton,
	ShopifyProductDescription,
	ShopifyProductInfo,
	ShopifyProductImages,
	ShopifyProductVariantSelector,
	ShopifyTrackRecentlyViewed,
} from '..'
import {
	useProductDetails,
	ShopifyProductType,
} from 'frontend-shopify'
import { cn } from 'frontend-shadcn'

export type ShopifyProductDetailsProps = {
	shopifyProduct: ShopifyProductType
	buttonText?: string
	enableQuantity?: boolean
	enableFavorites?: boolean
	enableSubscription?: boolean
}

const ShopifyProductDetails: React.FC<ShopifyProductDetailsProps> = ({
	shopifyProduct: product,
	buttonText,
	enableQuantity = true,
	enableSubscription = true,
	enableFavorites,
}) => {
	const {
		price,
		compareAtPrice,
		variant,
		selectedOptions,
		handleOptionChange,
		image,
		images,
		handleImageClick,
	} = useProductDetails({
		product,
	})

	return (
		<div className={cn('flex flex-col sm:flex-row', 'w-full')}>
			<div className={cn('w-full sm:w-1/2', 'p-0 sm:p-1')}>
				<ShopifyProductImages
					product={product}
					image={image}
					images={images}
					handleClick={handleImageClick}
				/>
			</div>
			<div className={cn('w-full sm:w-1/2', 'p-0 sm:p-1')}>
				<div className="flex flex-col space-y-8">
					<div className="flex flex-col space-y-4">
						<ShopifyProductInfo
							product={product}
							price={price}
							compareAtPrice={compareAtPrice}
						/>
						<ShopifyProductVariantSelector
							product={product}
							selectedOptions={selectedOptions}
							handleOptionChange={handleOptionChange}
						/>
						<ShopifyAddToCartButton
							product={product}
							variant={variant}
							enableQuantity={enableQuantity}
							enableSubscription={enableSubscription}
							enableFavorites={enableFavorites}
							label={buttonText}
						/>
					</div>
					<ShopifyProductDescription product={product} />
					<ShopifyTrackRecentlyViewed product={product} />
				</div>
			</div>
		</div>
	)
}

export default ShopifyProductDetails
