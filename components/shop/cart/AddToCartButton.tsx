'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { useCart } from '../../../hooks'

type AddToCartButtonProps = {
	size?: 'sm' | 'default' | 'lg'
	productId: string | number
	fullWidth?: boolean
	buttonText?: string
	availableForSale?: boolean
	className?: string
}

const AddToCartButton = (props: AddToCartButtonProps) => {
	const {
		productId,
		buttonText = 'Add to Cart',
		size = 'default',
		fullWidth,
		availableForSale,
	} = props

	const { loading, setCartOpen, addToCart } = useCart()

	const handleClick = async () => {
		await addToCart(productId)
		setCartOpen(true)
	}

	return (
		<Button      
      variant="solid"
      color="primary"
			fullWidth={fullWidth}
			isLoading={loading}
			onPress={handleClick}
			disabled={!availableForSale}
			size={size}
			className={'w-full min-w-[160px]'}
		>
			{buttonText}
		</Button>
	)
}

export default AddToCartButton
