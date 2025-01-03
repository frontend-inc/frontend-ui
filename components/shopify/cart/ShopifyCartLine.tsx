'use client'

import React, { useEffect, useState, useContext } from 'react'
import { ShopifyContext } from 'frontend-shopify'
import { useCart } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { RemixIcon } from '../../../components'
import { Image, ButtonGroup, Button } from '@nextui-org/react'
import { Typography } from '../../../components'
import { formatCurrency } from 'frontend-shopify'
import { useRouter } from 'next/navigation'
import { CartLineType } from 'frontend-shopify'
import { cn } from '@nextui-org/react'

type ShopifyCartQuantityInputProps = {
	quantity: number
	handleAddQuantity: (event: any) => void
	handleRemoveQuantity: (event: any) => void
}

const ShopifyCartQuantityInput: React.FC<ShopifyCartQuantityInputProps> = (props) => {

  const {
    quantity,
    handleAddQuantity,
    handleRemoveQuantity,
  } = props

	return (
		<ButtonGroup variant="light" className="border-1 border-divider rounded-xl" size='sm'>
			<Button
        isIconOnly
				className="min-w-8"
				onPress={handleRemoveQuantity}
			>
				<RemixIcon name="ri-subtract-line" />
			</Button>
			<Button 
        isIconOnly
        className="min-w-8"
      >
				{quantity}
			</Button>
			<Button
        isIconOnly
				onPress={handleAddQuantity}
        className="min-w-8"
			>
				<RemixIcon name="ri-add-line" />
			</Button>
		</ButtonGroup>
	)
}

type ShopifyCartLineProps = {
	line: CartLineType
}

const ShopifyCartLine: React.FC<ShopifyCartLineProps> = ({ line }) => {
	const router = useRouter()
	const { trackRemoveFromCart } = useSegment()
	const { loading, cartLineRemove, cartLineUpdate } = useCart()

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

	const handleRemoveQuantity = () => {
		if (quantity === 1) {
			handleRemoveLineItem()
		} else {
			handleUpdateQuantity(quantity - 1)
		}
	}

	const handleRemoveLineItem = async () => {		
		await cartLineRemove(id)
		trackRemoveFromCart({
			quantity,
			variant: merchandise,
			product,
		})
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
					className="min-h-[96px] min-w-[96px]"
				/>
			</div>
			<div className="flex-grow">
				<Typography variant="body1">
					{line?.merchandise?.product?.title}
				</Typography>
				<Typography variant="body1" className="text-foreground/70">
					{line?.merchandise?.selectedOptions
						?.filter((option) => option.name !== 'Title')
						?.map((option) => option.value)
						.join(' / ')}
				</Typography>
				{sellingPlanAllocation?.sellingPlan && (
					<p className="text-sm italic text-foreground/70">
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
			<Button								
        isIconOnly
        variant="light"
        radius="full"
				className="min-w-8"
				onPress={handleRemoveLineItem}
			>
				<RemixIcon name='ri-close-fill' />
			</Button>
		</div>
	)
}

export default ShopifyCartLine
