'use client'

import React from 'react'
import { Typography } from '../../../components'
import { useCart } from 'frontend-shopify'
import { useLoaders } from '../../../hooks'
import { cn, Chip } from '@nextui-org/react'

type ShopifyCartDiscountCodeProps = {
	discountCode: {
		code: string
		applicable: boolean
	}
	handleDelete?: () => void
}

export default function ShopifyCartDiscountCode({
	discountCode,
}: ShopifyCartDiscountCodeProps) {
	const { cartRemoveDiscountCode } = useCart()
	const { loading, loadingWrapper } = useLoaders()

	const handleDelete = async () => {
		await loadingWrapper(() => cartRemoveDiscountCode(discountCode.code))
	}

	return (
		<div
			className={cn(
				'flex flex-row justify-between w-full',
				loading && 'opacity-50'
			)}
		>
			<Typography variant="body1" className="text-foreground/70">
				Discounts
			</Typography>
			<div className="flex flex-row items-center space-x-2">
				<Chip variant="bordered" onClose={handleDelete}>
					{discountCode.code}
				</Chip>
			</div>
		</div>
	)
}
