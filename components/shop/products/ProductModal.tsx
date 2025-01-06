'use client'

import React, { useEffect } from 'react'
import { Modal, ProductDetails, ProductReviews } from '../..'
import { useProducts } from '../../../hooks'

export type ProductModalProps = {
	open: boolean
	handleClose: () => void
	productId: string | number
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Product: React.FC<ProductModalProps> = (props) => {
	const {} = props || {}

	const {
		open,
		handleClose,
		productId,
		enableRatings,
		enableLikes,
		enableFavorites,
		enableGradient,
		enableOverlay,
	} = props || {}

	const { loading, product, findProduct } = useProducts()

	useEffect(() => {
		if (productId) {
			findProduct(productId)
		}
	}, [productId])

	return (
		<Modal open={open} handleClose={handleClose} maxWidth="3xl">
			<div className="w-full flex flex-row justify-center p-10">
				<div className="md:max-w-screen-sm flex flex-col space-y-[20px]">
					<ProductDetails
						direction="column"
						product={product}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
						enableFavorites={enableFavorites}
						enableLikes={enableLikes}
						enableRatings={enableRatings}
					/>
					{enableRatings && <ProductReviews productId={productId} />}
				</div>
			</div>
		</Modal>
	)
}

export default Product
