import React, { useState } from 'react'
import { ProductModal } from '../../../components/shopify'
import { Button } from '@mui/material'

type QuickShopProps = {
	size?: 'small' | 'medium' | 'large'
	buttonVariant?: 'contained' | 'outlined' | 'text'
	buttonText?: string
	quickShopButtonText?: string
	product?: any
	enableQuantity?: boolean
}

const QuickShop: React.FC<QuickShopProps> = (props) => {
	const {
		size,
		product,
		buttonVariant = 'text',
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
				sx={{
					...(buttonVariant == 'text' && sx.buttonText),
				}}
				size={size}
				variant={buttonVariant}
				onClick={handleQuickShop}
			>
				{quickShopButtonText}
			</Button>
			<ProductModal
				open={open}
				handleClose={() => setOpen(false)}
				handle={product?.handle}
				enableQuantity={enableQuantity}
				buttonText={buttonText}
			/>
		</>
	)
}

export default QuickShop

const sx = {
	buttonText: {
		bgcolor: 'tertiary.main',
	},
}
