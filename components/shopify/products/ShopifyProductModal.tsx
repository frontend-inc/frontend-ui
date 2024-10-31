'use client'

import React from 'react'
import { Drawer } from '../../../components'
import { ShopifyProductCard } from '../../../components/shopify'
import { ShopifyProductType } from 'frontend-shopify'

type ShopifyProductModalProps = {
	shopifyProduct: ShopifyProductType
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
		<Drawer open={open} handleClose={handleClose}>
			<ShopifyProductCard
				product={shopifyProduct}
				enableQuantity={enableQuantity}
				buttonText={buttonText}
			/>
		</Drawer>
	)
}

export default ShopifyProductModal
