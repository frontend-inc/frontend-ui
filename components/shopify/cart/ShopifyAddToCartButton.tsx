'use client'

import React, { useState, useContext } from 'react'
import { useCart } from 'frontend-shopify'
import { toast } from 'sonner'
import { useSegment } from '../../../hooks/addons'
import { Button } from '@nextui-org/react'
import {
	ShopifyProductFavoriteButton,
	ShopifyQuantitySelector,
	ShopifySubscriptionSelector,
} from '..'
import { ShopifyContext } from 'frontend-shopify'
import { ShopifyProductType, ProductVariantType } from 'frontend-shopify'

type ShopifyAddToCartButtonProps = {
	product: ShopifyProductType
	variant: ProductVariantType
	buttonVariant?: 'default' | 'secondary' | 'ghost'
	label?: string
	enableQuantity?: boolean
	enableSubscription?: boolean
	enableFavorites?: boolean
	size?: 'sm' | 'md' | 'lg'
}

const ShopifyAddToCartButton: React.FC<ShopifyAddToCartButtonProps> = (
	props
) => {
	const { trackAddToCart } = useSegment()
	const { toggleCart } = useContext(ShopifyContext) as any
	const { loading, cartLineAdd } = useCart()

	const {
		label = 'Add to Cart',
		product,
		variant,
		enableQuantity = false,
		enableSubscription = false,
		enableFavorites = false,
		size = 'md',
	} = props

	const [quantity, setQuantity] = useState<number>(1)
	const [activeSellingPlanId, setActiveSellingPlanId] = useState<any>(null)

	const handleSellingPlanChange = (value) => {
		setActiveSellingPlanId(value)
	}

	const handleAddQuantity = () => {
		setQuantity(quantity + 1)
	}

	const handleRemoveQuantity = () => {
		if (quantity <= 1) return
		setQuantity(quantity - 1)
	}

	const handleAddToCart = async () => {
		if (!product?.availableForSale) {
			toast.error('This product is not available for sale')
			return
		}
		if (variant?.id) {
			if (variant?.availableForSale) {
				let line = {
					merchandiseId: variant?.id,
					quantity,
					sellingPlanId: activeSellingPlanId,
				}
				const resp = await cartLineAdd(line)
				trackAddToCart({
					quantity: quantity,
					variant: variant,
					product: product,
				})
				if (resp?.id) {
					setActiveSellingPlanId(null)
					toggleCart()
				} else {
					toast.error('Oops! There was an error adding to cart')
				}
			} else {
				toast.error('This product is not available for sale')
			}
		} else {
			toast.error('Please select all options')
		}
	}

	const handleClose = () => {
		toast.error('')
	}

	if (!product) return null
	return (
		<div className="flex flex-col space-y-2 w-full">
			{enableSubscription && (
				<ShopifySubscriptionSelector
					product={product}
					activeSellingPlanId={activeSellingPlanId}
					handleChange={handleSellingPlanChange}
				/>
			)}
			<div className="flex w-full flex-row space-x-2 justify-content items-center">
				{enableQuantity == true && (
					<ShopifyQuantitySelector
						size={size}
						quantity={quantity}
						handleAddQuantity={handleAddQuantity}
						handleRemoveQuantity={handleRemoveQuantity}
					/>
				)}
				<Button
					fullWidth
					onPress={handleAddToCart}
					variant="solid"
					color="primary"
					isLoading={loading}
					size={size}
				>
					{label}
				</Button>
				{enableFavorites && <ShopifyProductFavoriteButton product={product} />}
			</div>
		</div>
	)
}

export default ShopifyAddToCartButton
