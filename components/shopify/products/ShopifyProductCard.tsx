'use client'

import React, { useState, useContext } from 'react'
import { Typography, Button } from '../../core'
import { truncate } from '../../../helpers'
import { ShopifyProductType } from 'frontend-shopify'
import { ShopifyContext } from 'frontend-shopify'
import { formatCurrency } from 'frontend-shopify'
import { CardContent } from 'frontend-shadcn'
import SwipeableShopifyProductImages from './images/SwipeableShopifyProductImages'
import { ShopifyProductModal, ShopifyAddToCartButton } from '..'
import { cn } from 'frontend-shadcn'

type ShopifyProductCardProps = {
	product: ShopifyProductType
	handleClick?: () => void
	buttonText?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
	disableBorder?: boolean
	buttonVariant?: 'default' | 'secondary' | 'ghost'
}

export default function ShopifyProductCard({
	product,
	handleClick,
	enableBorder = false,
	enableAddToCart = false,
	enableQuantity = false,
	enableQuickShop = false,
	buttonVariant = 'default',
	buttonText,
	disableBorder = false,
}: ShopifyProductCardProps) {
	const [open, setOpen] = useState(false)
	const { setSearchOpen } = useContext(ShopifyContext) as any

	const handleQuickShop = () => {
		setOpen(true)
	}

	const handleItemClick = () => {
		if (handleClick) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			setSearchOpen(false)
			handleClick()
		}else{
      setOpen(true)
    }
	}

	return (
		<div
			className={cn(
				!disableBorder && 'border border-border hover:shadow-md',
				'w-full overflow-hidden rounded-lg transition-shadow duration-300 bg-background'
			)}
		>
			<SwipeableShopifyProductImages
				product={product}
				height={320}
				handleClick={handleItemClick}
				disableBorderRadius={enableBorder}
			/>
			<CardContent>
				<div className="flex flex-col py-1">
					<Typography variant="subtitle2">
						{truncate(product?.title)}
					</Typography>
					<Typography className="text-muted-foreground" variant="body2">
						{formatCurrency(product?.priceRange?.minVariantPrice?.amount)}
					</Typography>
				</div>
				<div className="flex flex-col space-y-2">
					{enableAddToCart && (
						<ShopifyAddToCartButton
							product={product}
							/* @ts-ignore */
							variant={product?.variants?.edges[0]?.node}
							label={buttonText}
							enableQuantity={enableQuantity}
							buttonVariant={buttonVariant}
							size="small"
							enableFavorites
						/>
					)}
					{enableQuickShop && (
						<Button
							color="secondary"
							onClick={handleQuickShop}
							className="w-full"
						>
							Quick Shop
						</Button>
					)}
				</div>
			</CardContent>
			<ShopifyProductModal
				open={open}
				handleClose={() => setOpen(false)}
				shopifyProduct={product}
				enableQuantity={enableQuantity}
				buttonText={buttonText}
			/>
		</div>
	)
}
