'use client'

import React from 'react'
import { Drawer } from '../../../components'
import { ShopifyProductDetails } from '../../../components/shopify'

type ShopifyProductModalProps = {
	shopifyProduct: string 
	enableQuantity?: boolean
	open?: boolean
	buttonText?: string
	handleClose: () => void
}

const ShopifyProductModal: React.FC<ShopifyProductModalProps> = (props) => {
	const {
		open = false,
		shopifyProduct,
		enableQuantity,
		handleClose,
		buttonText,
	} = props

	return (
		<Drawer open={open} handleClose={handleClose} maxWidth="lg">
			<ShopifyProductDetails
        disableZoom
				shopifyProduct={shopifyProduct}
				enableQuantity={enableQuantity}
				buttonText={buttonText}
			/>
		</Drawer>
	)
}

export default ShopifyProductModal
