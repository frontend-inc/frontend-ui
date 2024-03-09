import React from 'react'
import { Hidden } from '@mui/material'
import {
	ProductImageThumbnails,
	SwipeableProductImages,
} from '../../../../components/shopify'
import { PDP_IMAGE_HEIGHT } from '../../../../constants/index'
import { Product, Image } from 'frontend-shopify'

type ProductImagesProps = {
	product: Product
	image: Image
	images: Image[]
	handleClick: (img: Image) => void
}

const ProductImages: React.FC<ProductImagesProps> = (props) => {
	const { product, image, images, handleClick } = props

	return (
		<>
			<Hidden smDown>
				<ProductImageThumbnails
					image={image}
					images={images}
					handleClick={handleClick}
				/>
			</Hidden>
			<Hidden smUp>
				<SwipeableProductImages
					objectFit="contain"
					height={PDP_IMAGE_HEIGHT}
					width={PDP_IMAGE_HEIGHT}
					product={product}
				/>
			</Hidden>
		</>
	)
}

export default ProductImages
