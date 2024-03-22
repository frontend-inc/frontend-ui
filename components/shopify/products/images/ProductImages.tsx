import React from 'react'
import { Hidden } from '@mui/material'
import {
	ProductImagesSlider,
	SwipeableProductImages,
} from '../../../../components/shopify'
import { PDP_IMAGE_HEIGHT } from '../../../../constants/index'
import { ProductType, ImageType } from 'frontend-shopify'

type ProductImagesProps = {
	product: ProductType
	image: ImageType
	images: ImageType[]
	handleClick: (img: ImageType) => void
}

const ProductImages: React.FC<ProductImagesProps> = (props) => {
	const { product, image, images, handleClick } = props

	return (
		<>
			<Hidden smDown>
				<ProductImagesSlider
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
