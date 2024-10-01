import React from 'react'
import { PrimaryButton } from '../../../components'
import { useCart } from '../../../hooks'
import { Box } from '@mui/material'

type AddToCartButtonProps = {
  size?: 'small' | 'medium' | 'large'
	productId: string
	availableForSale?: boolean
}

const AddToCartButton = (props: AddToCartButtonProps) => {
	const { productId, size="medium", availableForSale } = props
	const { loading, setCartOpen, addToCart } = useCart()

	const handleClick = async () => {
		await addToCart(productId)
		setCartOpen(true)
	}

	return (
		<Box sx={sx.button}>
			<PrimaryButton
				loading={loading}
				onClick={handleClick}
				disabled={!availableForSale}
				size={size}
			>
				Add to Cart
			</PrimaryButton>
		</Box>
	)
}

export default AddToCartButton

const sx = {
	button: {
		maxWidth: '300px',
	},
}
