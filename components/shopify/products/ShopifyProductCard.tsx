'use client'

import React, { useState, useContext } from 'react'
import { Typography } from '../../../components'
import { truncate } from '../../../helpers'
import { ShopifyProductType } from 'frontend-shopify'
import { ShopifyContext } from 'frontend-shopify'
import { formatCurrency } from 'frontend-shopify'
import SwipeableShopifyProductImages from './images/SwipeableShopifyProductImages'
import { ShopifyProductModal, ShopifyAddToCartButton } from '..'
import { cn, Card, CardFooter } from '@nextui-org/react'
import { CardContent } from 'frontend-shadcn'

type ShopifyProductCardProps = {
	product: ShopifyProductType
	handleClick?: () => void
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	className?: string
}

export default function ShopifyProductCard(props: ShopifyProductCardProps) {
	const {
		product,
		handleClick,
		enableBorder = false,
		enableAddToCart = false,
		enableQuantity = false,
		className,
	} = props || {}

	const [open, setOpen] = useState(false)
	const { setSearchOpen } = useContext(ShopifyContext) as any

	const handleItemClick = () => {
		if (handleClick) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			setSearchOpen(false)
			handleClick()
		} else {
			setOpen(true)
		}
	}

	return (
		<>
			<Card shadow="sm" className={cn('bg-background', className)}>
				<CardContent className="p-0">
					<SwipeableShopifyProductImages
						product={product}
						handleClick={handleItemClick}
						disableBorderRadius={enableBorder}
					/>
				</CardContent>
				<CardFooter className="bg-content1 w-full">
					<div className="flex flex-col space-y-2 w-full">
						<div className="flex flex-col space-y-0 min-h-[50px]">
							<Typography variant="subtitle2">
								{truncate(product?.title)}
							</Typography>
							<Typography variant="body2">
								{formatCurrency(product?.priceRange?.minVariantPrice?.amount)}
							</Typography>
						</div>
						{enableAddToCart && (
							<ShopifyAddToCartButton
								product={product}
								/* @ts-ignore */
								variant={product?.variants?.edges[0]?.node}
								enableQuantity={enableQuantity}
								size="md"
							/>
						)}
					</div>
				</CardFooter>
			</Card>
			<ShopifyProductModal
				open={open}
				handleClose={() => setOpen(false)}
				shopifyProduct={product?.handle}
				enableQuantity={enableQuantity}
			/>
		</>
	)
}
