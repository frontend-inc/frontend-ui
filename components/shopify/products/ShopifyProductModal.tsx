'use client'

import React from 'react'
import { Drawer, Modal } from '../../../components'
import { ShopifyProductDetails } from '../../../components/shopify'
import { BlurFade } from '../../../components'

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
		<Modal open={open} handleClose={handleClose} maxWidth="5xl">
			<BlurFade delay={0.25} inView>
				<ShopifyProductDetails
					disableZoom
					shopifyProduct={shopifyProduct}
					enableQuantity={enableQuantity}
					buttonText={buttonText}
				/>
			</BlurFade>
		</Modal>
	)
}

export default ShopifyProductModal
