import React, { useState } from 'react'
import { ProductModal } from '../../../components/shopify'
import { Button } from '@mui/material'

type QuickShopButtonProps = {
	size?: 'small' | 'medium' | 'large'
	color?: 'primary' | 'secondary'
	buttonText?: string
	quickShopButtonText?: string
	product?: any
	enableQuantity?: boolean
}

const QuickShopButton: React.FC<QuickShopButtonProps> = (props) => {
	const {
		size,
		product,
		color = 'secondary',
		buttonText = 'Add to Cart',
		quickShopButtonText = 'Quick Shop',
		enableQuantity = false,
	} = props || {}

	const [open, setOpen] = useState(false)

	const handleQuickShop = () => {
		setOpen(true)
	}

	return (
		<>
			<Button
				size={size}
				color={color}
				variant="contained"
				onClick={handleQuickShop}
			>
				{quickShopButtonText}
			</Button>
			<ProductModal
				open={open}
				handleClose={() => setOpen(false)}
				shopifyProduct={product}
				enableQuantity={enableQuantity}
				buttonText={buttonText}
			/>
		</>
	)
}

export default QuickShopButton
