'use client'

import React from 'react'
import { Icon } from '../../../components'
import { IconButton, Typography } from '../../core'
import { Label } from '../../../components'
import { useCart } from 'frontend-shopify'
import { useLoaders } from '../../../hooks'
import { cn } from 'frontend-shadcn'

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
				<Label label={discountCode.code} />
				<IconButton onClick={handleDelete}>
					<Icon name="Trash" size="sm" />
				</IconButton>
			</div>
		</div>
	)
}
