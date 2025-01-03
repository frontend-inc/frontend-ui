'use client'

import React from 'react'
import { Button, ButtonGroup } from '@nextui-org/react'
import { Plus, Minus } from 'lucide-react'

type ShopifyQuantitySelectorProps = {
	size?: 'sm' | 'md' | 'lg'
	quantity: number
	handleAddQuantity: () => void
	handleRemoveQuantity: () => void
}

export default function ShopifyQuantitySelector(
	props: ShopifyQuantitySelectorProps
) {
	const {
		size = 'md',
		quantity,
		handleAddQuantity,
		handleRemoveQuantity,
	} = props || {}

	return (
		<ButtonGroup
			variant="light"
			className="border-1 border-divider rounded-xl"
			size={size}
		>
			<Button isIconOnly onPress={handleRemoveQuantity}>
				<Minus className="h-5 w-5" />
			</Button>
			<Button isIconOnly>{quantity}</Button>
			<Button isIconOnly onPress={handleAddQuantity}>
				<Plus className="h-5 w-5" />
			</Button>
		</ButtonGroup>
	)
}
