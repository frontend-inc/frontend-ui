import React, { useState, useContext } from 'react'
import { useCart } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { useAlerts } from '../../../hooks'
import { Stack, Button } from '@mui/material'
import { IconLoading } from '../..'
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
	buttonVariant?: 'contained' | 'outlined' | 'text'
	label?: string
	enableQuantity?: boolean
	enableSubscription?: boolean
	enableFavorites?: boolean
	size?: 'small' | 'medium' | 'large'
}

const ShopifyAddToCartButton: React.FC<ShopifyAddToCartButtonProps> = (
	props
) => {
	const { showAlertError } = useAlerts()
	const { trackAddToCart } = useSegment()
	const { toggleCart } = useContext(ShopifyContext) as any
	const { loading, cartLineAdd } = useCart()

	const {
		size = 'large',
		label = 'Add to Cart',
		product,
		variant,
		buttonVariant = 'contained',
		enableQuantity = false,
		enableSubscription = false,
		enableFavorites = false,
	} = props

	const [quantity, setQuantity] = useState<number>(1)
	const [activeSellingPlanId, setActiveSellingPlanId] = useState<any>(null)

	const handleSellingPlanChange = (ev) => {
		const { value } = ev.target
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
			showAlertError('Please select all options')
			return
		}
		if (variant?.id) {
			if (variant?.availableForSale) {
				let line = {
					merchandiseId: variant?.id,
					quantity,
					sellingPlanId: activeSellingPlanId,
				}
				cartLineAdd(line)
				trackAddToCart({
					quantity: quantity,
					variant: variant,
					product: product,
				})
				setTimeout(() => toggleCart(), 500)
			} else {
				showAlertError('This product is not available for sale')
			}
		} else {
			showAlertError('Please select all options')
		}
	}

	if (!product) return null
	return (
		<Stack direction="column" spacing={1} sx={sx.fullWidth}>
			{enableSubscription && (
				<ShopifySubscriptionSelector
					product={product}
					activeSellingPlanId={activeSellingPlanId}
					handleChange={handleSellingPlanChange}
				/>
			)}
			<Stack direction="row" spacing={1} sx={sx.fullWidth}>
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
					sx={{
						...sx.addToCartButton,
						...(size == 'small' && sx.addToCartButtonSmall),
					}}
					color="primary"
					onClick={handleAddToCart}
					variant={buttonVariant}
					size={size}
					startIcon={
						loading && (
							<IconLoading
								color={
									buttonVariant == 'contained'
										? 'primary.contrastText'
										: 'primary.main'
								}
							/>
						)
					}
				>
					{label}
				</Button>
				{enableFavorites && <ShopifyProductFavoriteButton product={product} />}
			</Stack>
		</Stack>
	)
}

export default ShopifyAddToCartButton

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		gap: '10px',
	},
	addToCartButton: {
		minWidth: '60px',
	},
	addToCartButtonSmall: {
		height: '40px',
	},
	fullWidth: {
		width: '100%',
	},
}
