'use client'

import React from 'react'
import { Button } from '../../../components'
import { useCart } from '../../../hooks'
import { cn } from 'frontend-shadcn'

type AddToCartButtonProps = {
	size?: 'sm' | 'default' | 'lg'
	productId: string | number
	fullWidth?: boolean
	buttonText?: string
	availableForSale?: boolean
	price?: string
	className?: string
}

const AddToCartButton = (props: AddToCartButtonProps) => {
	const {
		productId,
		buttonText = 'Add to Cart',
		size = 'default',
		fullWidth,
		availableForSale,
		price,
	} = props

	const { loading, setCartOpen, addToCart } = useCart()

	const handleClick = async () => {
		await addToCart(productId)
		setCartOpen(true)
	}

	return (
		<Button
			fullWidth={fullWidth}
			loading={loading}
			onClick={handleClick}
			disabled={!availableForSale}
			size={size}
			className={'w-full min-w-[160px]'}
		>
			{buttonText}
		</Button>
	)
}

export default AddToCartButton
