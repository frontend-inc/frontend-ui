'use client'

import React, { useEffect } from 'react'
import {
	ShopifyAddToCartButton,
	ShopifyProductDescription,
	ShopifyProductInfo,
	ShopifyProductImages,
	ShopifyVariantSelector,
	ShopifyTrackRecentlyViewed,
} from '..'
import { Skeleton } from '@nextui-org/react'
import { useProducts, useProductDetails } from 'frontend-shopify'
import { cn } from '@nextui-org/react'

export type ShopifyProductDetailsProps = {
	shopifyProduct: string
	buttonText?: string
	enableQuantity?: boolean
	enableFavorites?: boolean
	enableSubscription?: boolean
	disableZoom?: boolean
}

const ShopifyProductDetails: React.FC<ShopifyProductDetailsProps> = (props) => {
	const {
		shopifyProduct,
		buttonText,
		enableQuantity = true,
		enableSubscription = true,
		enableFavorites,
		disableZoom = false,
	} = props

	const { product, findProduct } = useProducts()

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

	useEffect(() => {
		if (shopifyProduct) {
			findProduct(shopifyProduct)
		}
	}, [shopifyProduct])

  if (!product) return <ShopifyProductDetailsSkeleton />
	return (
		<div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 w-full pb-[60px]">
			<div className={cn('w-full sm:w-1/2', 'p-0 sm:p-1')}>
				<ShopifyProductImages
					product={product}
					image={image}
					images={images}
					handleClick={handleImageClick}
					disableZoom={disableZoom}
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
						<ShopifyVariantSelector
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

export const ShopifyProductDetailsSkeleton = () => {
  return(
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 w-full pb-[60px]">
			<div className='w-full flex flex-col space-y-2 sm:w-1/2 p-0 sm:p-1'>
        <Skeleton className='h-full w-full aspect-square rounded-xl' />				
        <div className="flex flex-row md:justify-center flex-wrap gap-3">
          <Skeleton className='h-20 w-20 rounded-xl' />				
          <Skeleton className='h-20 w-20 rounded-xl' />				
          <Skeleton className='h-20 w-20 rounded-xl' />				
          <Skeleton className='h-20 w-20 rounded-xl' />				
        </div>
			</div>
			<div className={cn('w-full sm:w-1/2', 'p-0 sm:p-1')}>
				<div className="flex flex-col space-y-8">
					<div className="flex flex-col space-y-4">
            <Skeleton className='h-6 w-full rounded-lg' />				
            <Skeleton className='h-6 w-full md:w-2/3 rounded-lg'  />				
            <Skeleton className='h-6 w-full md:w-2/4 rounded-lg' />				            
					</div>
					<Skeleton className='h-10 py-6 w-full md:w-1/2 rounded-xl' />				
				</div>
			</div>
		</div>
  )
}
