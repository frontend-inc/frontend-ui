import React from 'react'
import { Modal } from '../../../components'
import { ProductDetailPage } from '../../../components/shopify'
import { ProductProvider, ProductType } from 'frontend-shopify'

type ProductModalProps = {
	shopifyProduct: ProductType
	enableQuantity?: boolean
	open?: boolean
	buttonText?: string
	handleClose: () => void
}

const ProductModal: React.FC<ProductModalProps> = (props) => {
	const {
		shopifyProduct,
		enableQuantity,
		open = false,
		handleClose,
		buttonText,
	} = props

	return (
		<Modal open={open} handleClose={handleClose} maxWidth={'sm'}>
			<ProductProvider>
				<ProductDetailPage
					shopifyProduct={shopifyProduct}
					enableQuantity={enableQuantity}
					buttonText={buttonText}
				/>
			</ProductProvider>
		</Modal>
	)
}

export default ProductModal
