'use client'

import React, { useState, useEffect } from 'react'
import { Typography } from '../..'
import { truncate } from '../../../helpers'
import { useProducts } from 'frontend-shopify'
import { formatCurrency } from 'frontend-shopify'
import { useNavigate } from '../../../hooks'
import SwipeableShopifyProductImages from './images/SwipeableShopifyProductImages'
import { ShopifyProductModal, ShopifyAddToCartButton } from '..'
import { cn, Card, CardBody, CardFooter, Skeleton } from '@nextui-org/react'

type ShopifyProductCardProps = {
	shopifyProduct: string
	handleClick?: () => void
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
  enableModal?: boolean
  path?: string
  url?: string
	className?: string
}

export default function ShopifyProductCard(props: ShopifyProductCardProps) {
	const {
		shopifyProduct,
		enableBorder = false,
		enableAddToCart = false,
		enableQuantity = false,
    enableModal = false,
    path, 
    url,
		className,
	} = props || {}

	const [open, setOpen] = useState(false)

  const onClick = useNavigate({
    path, 
    url
  })

	const handleItemClick = () => {

		if (enableModal) {
			setOpen(true)
		} else {
			onClick()
		}
	}

  const { product, findProduct } = useProducts()
    useEffect(() => {
      if (shopifyProduct) {
        findProduct(shopifyProduct)
      }
    }, [shopifyProduct])
    
  if(!product) return <ShopifyProductCardSkeleton />;
	return (
		<>
			<Card 
        //@ts-ignore 
        isPressable
        onPress={ handleItemClick }
        className={cn('w-full h-full', className)          
      }>
				<CardBody className="p-0">
					<SwipeableShopifyProductImages
						product={product}
						disableBorderRadius={enableBorder}
					/>
				</CardBody>
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

export const ShopifyProductCardSkeleton = () => {

  return(
    <Card className="w-full space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-full w-full aspect-square rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-4 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>
  )
}
