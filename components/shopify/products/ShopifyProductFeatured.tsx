'use client'

import React, { useEffect } from 'react'
import { ShopifyAddToCartButton, ShopifyQuickShopButton } from '..'
import { Typography } from '../../core'
import { truncate } from '../../../helpers'
import SwipeableShopifyProductImages from './images/SwipeableShopifyProductImages'
import { formatCurrency } from 'frontend-shopify'
import { useProducts } from 'frontend-shopify'
import { cn } from 'frontend-shadcn'

export type ShopifyProductFeaturedProps = {
	handle: string
	handleClick?: () => void
	buttonText?: string
	quickShopButtonText?: string
	height?: number
	width?: number
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
}

const ShopifyProductFeatured: React.FC<ShopifyProductFeaturedProps> = ({
	handle,
	height = 360,
	width = 360,
	buttonText = 'Add to Cart',
	quickShopButtonText = 'Quick Shop',
	handleClick,
	enableAddToCart = false,
	enableQuantity = false,
	enableQuickShop = false,
}) => {
	
  const { product, findProduct } = useProducts()

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		}
	}

	useEffect(() => {
		if (handle) {
			findProduct(handle)
		}
	}, [handle, findProduct])

	if (!product) return null
	return (
		<div className={cn('flex flex-row rounded overflow-hidden')}>
			<div className="flex flex-row space-x-3 w-full">
				<div className="px-1 flex justify-end items-center">
					<SwipeableShopifyProductImages
						product={product}
						height={height}
						width={width}
						handleClick={handleItemClick}
					/>
				</div>
				<div className="w-full flex flex-row justify-center items-start h-full">
					<div className="flex flex-col space-y-2">
						<Typography variant="h3">{product?.title}</Typography>
						<Typography
							variant="body2"
							className="text-muted-foreground max-w-[320px]"
						>
							{truncate(product?.description, 60)}
						</Typography>
						<Typography className="text-muted-foreground" variant="body2">
							{formatCurrency(product?.priceRange?.minVariantPrice?.amount)}
						</Typography>
					</div>
					<div className="flex flex-col space-y-3">
						{enableAddToCart && (
							<ShopifyAddToCartButton
								product={product}
								variant={product?.variants?.edges[0]?.node}
								enableQuantity={enableQuantity}
								label={buttonText}
							/>
						)}
						{enableQuickShop && (
							<ShopifyQuickShopButton
								size="lg"
								product={product}
								color={enableAddToCart ? 'secondary' : 'primary'}
								buttonText={buttonText}
								quickShopButtonText={quickShopButtonText}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShopifyProductFeatured
