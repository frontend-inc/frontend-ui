'use client'

import React from 'react'
import { Button } from '../../core'
import { useCart } from '../../../hooks'

type AddToCartButtonProps = {
	size?: 'sm' | 'default' | 'lg'
	productId: string
	fullWidth?: boolean
  buttonText?: string
	availableForSale?: boolean
}

const AddToCartButton = (props: AddToCartButtonProps) => {
	
  const { 
    productId, 
    buttonText='Add to Cart', 
    size = 'default', 
    fullWidth, 
    availableForSale 
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
      className="min-w-[160px]"
		>
			{ buttonText }
		</Button>
	)
}

export default AddToCartButton
