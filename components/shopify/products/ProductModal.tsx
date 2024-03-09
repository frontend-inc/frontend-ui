import React from 'react'
import { Modal } from '../../../components'
import { ProductDetailPage } from '../../../components/shopify'
import { ProductProvider } from 'frontend-shopify'

type ProductModalProps = {
	handle: string
	enableQuantity?: boolean
	open?: boolean
	buttonText?: string
	handleClose?: () => void
}

const ProductModal: React.FC<ProductModalProps> = (props) => {
	const {
		handle,
		enableQuantity,
		open = false,
		handleClose,
		buttonText,
	} = props

	return (
		<Modal open={open} handleClose={handleClose} maxWidth={'sm'}>
			<ProductProvider>
				<ProductDetailPage
					handle={handle}
					enableQuantity={enableQuantity}
					buttonText={buttonText}
				/>
			</ProductProvider>
		</Modal>
	)
}

export default ProductModal
