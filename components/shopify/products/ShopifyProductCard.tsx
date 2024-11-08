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
    className
  } = props || {}

	const [open, setOpen] = useState(false)
	const { setSearchOpen } = useContext(ShopifyContext) as any

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
				'w-full overflow-hidden bg-background',
        className
			)}
		>
      <div className="w-full h-full min-h-[300px]">
        <SwipeableShopifyProductImages
          product={product}
          height={300}
          handleClick={handleItemClick}
          disableBorderRadius={enableBorder}
        />
      </div>
			<CardContent className="p-3">
				<div className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-0 min-h-[80px]">
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
							size="default"
						/>
					)}
				</div>
			</CardContent>
			<ShopifyProductModal
				open={open}
				handleClose={() => setOpen(false)}
				shopifyProduct={product?.handle}
				enableQuantity={enableQuantity}
			/>
		</div>
	)
}
