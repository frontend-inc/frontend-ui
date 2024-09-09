import React from 'react'
import { Modal } from '../../../components'
import { ShopifyProductDetails } from '../../../components/shopify'
import { ShopifyProductProvider, ShopifyProductType } from 'frontend-shopify'

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
		<Modal open={open} handleClose={handleClose} maxWidth={'md'}>
			<ShopifyProductProvider>
				<ShopifyProductDetails
					shopifyProduct={shopifyProduct}
					enableQuantity={enableQuantity}
					buttonText={buttonText}
				/>
			</ShopifyProductProvider>
		</Modal>
	)
}

export default ShopifyProductModal
