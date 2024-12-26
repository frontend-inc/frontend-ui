'use client'

import React from 'react'
import { IconButton, Typography } from '../../../components'
import { Label } from '../../../components'
import { useCart } from 'frontend-shopify'
import { useLoaders } from '../../../hooks'
import { cn } from 'frontend-shadcn'
import { RiDeleteBin7Fill } from '@remixicon/react'

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
			<Typography variant="body1">Discounts</Typography>
			<div className="flex flex-row items-center space-x-2">
				<Label>{discountCode.code}</Label>
				<IconButton onClick={handleDelete}>
					<RiDeleteBin7Fill />
				</IconButton>
			</div>
		</div>
	)
}
