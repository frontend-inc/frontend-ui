'use client'

import React, { useEffect, useState, useContext } from 'react'
import { ShopifyContext } from 'frontend-shopify'
import { useCart } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { RemixIcon, IconButton, Button } from '../../../components'
import Image from 'next/image'
import { Typography } from '../../../components'
import { formatCurrency } from 'frontend-shopify'
import { useRouter } from 'next/navigation'
import { CartLineType } from 'frontend-shopify'
import { cn } from 'frontend-shadcn'

type ShopifyCartQuantityInputProps = {
	quantity: number
	handleAddQuantity: (event: React.MouseEvent) => void
	handleRemoveQuantity: (event: React.MouseEvent) => void
}

const ShopifyCartQuantityInput: React.FC<ShopifyCartQuantityInputProps> = (props) => {

  const {
    quantity,
    handleAddQuantity,
    handleRemoveQuantity,
  } = props

	return (
		<div className="inline-flex rounded-md shadow-sm" role="group">
			<Button
				variant="ghost"
				size="sm"
				className="px-2 rounded-r-none"
				onClick={handleRemoveQuantity}
			>
				<RemixIcon name="ri-subtract-line" />
			</Button>
			<Button variant="ghost" size="sm" className="px-2 rounded-none">
				{quantity}
			</Button>
			<Button
				variant="ghost"
				size="sm"
				className="px-2 rounded-l-none"
				onClick={handleAddQuantity}
			>
				<RemixIcon name="ri-add-line" />
			</Button>
		</div>
	)
}

type ShopifyCartLineProps = {
	line: CartLineType
}

const ShopifyCartLine: React.FC<ShopifyCartLineProps> = ({ line }) => {
	const router = useRouter()
	const { trackRemoveFromCart } = useSegment()
	const { loading, cartLineRemove, cartLineUpdate } = useCart()
	const { shopUrl, setCartOpen } = useContext(ShopifyContext) as any

	const { id, quantity, merchandise, sellingPlanAllocation } = line || {}

	const [price, setPrice] = useState<number | null>(null)
	const [compareAtPrice, setCompareAtPrice] = useState<number | null>(null)

	const {
		product,
		// @ts-ignore
		price: { amount },
		// @ts-ignore
		compareAtPrice: compareAtAmount,
		// @ts-ignore
		image: { url },
	} = merchandise || {}

	const handleUpdateQuantity = async (newQuantity: number) => {
		await cartLineUpdate({ id, quantity: newQuantity })
	}

	const handleAddQuantity = () => {
		handleUpdateQuantity(quantity + 1)
	}

	const handleRemoveQuantity = (ev: React.MouseEvent) => {
		if (quantity === 1) {
			handleRemoveLineItem(ev)
		} else {
			handleUpdateQuantity(quantity - 1)
		}
	}

	const handleRemoveLineItem = async (event: React.MouseEvent) => {
		event.stopPropagation()
		await cartLineRemove(id)
		trackRemoveFromCart({
			quantity,
			variant: merchandise,
			product,
		})
	}

	const handleClick = () => {
		router.push(`${shopUrl}/products/${product?.handle}`)
		setCartOpen(false)
	}

	useEffect(() => {
		// @ts-ignore
		if (sellingPlanAllocation?.priceAdjustments?.length > 0) {
			// @ts-ignore
			setPrice(sellingPlanAllocation.priceAdjustments[0].price.amount)
			setCompareAtPrice(
				// @ts-ignore
				sellingPlanAllocation.priceAdjustments[0].compareAtPrice.amount
			)
		} else {
			setPrice(Number(amount))
			setCompareAtPrice(compareAtAmount?.amount)
		}
	}, [price, sellingPlanAllocation])

	return (
		<div
			className={cn('flex items-start space-x-4 py-4', loading && 'opacity-30')}
		>
			<div className="relative">
				<Image
					alt={line?.merchandise?.product?.title || ''}
					src={url}
					height={96}
					width={96}
					className="rounded-md min-h-[96px] min-w-[96px]"
					onClick={handleClick}
				/>
			</div>
			<div className="flex-grow">
				<Typography variant="body1">
					{line?.merchandise?.product?.title}
				</Typography>
				<Typography variant="body1" className="text-muted-foreground">
					{line?.merchandise?.selectedOptions
						?.filter((option) => option.name !== 'Title')
						?.map((option) => option.value)
						.join(' / ')}
				</Typography>
				{sellingPlanAllocation?.sellingPlan && (
					<p className="text-sm italic text-muted-foreground">
						{sellingPlanAllocation?.sellingPlan?.name}
					</p>
				)}
				<p className="text-sm font-medium mt-1">
					{price === 0 ? 'Free' : formatCurrency(price)}
				</p>
				<div className="mt-2">
					<ShopifyCartQuantityInput
						quantity={quantity}
						handleAddQuantity={handleAddQuantity}
						handleRemoveQuantity={handleRemoveQuantity}
					/>
				</div>
			</div>
			<IconButton								
				className="text-muted-foreground"
				onClick={handleRemoveLineItem}
			>
				<RemixIcon name='ri-close-fill' />
			</IconButton>
		</div>
	)
}

export default ShopifyCartLine
