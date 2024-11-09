'use client'

import React from 'react'
import { Hidden } from '../../../core'
import ShopifyProductImagesSlider from './ShopifyProductImagesSlider'
import SwipeableShopifyProductImages from './SwipeableShopifyProductImages'
import { PDP_IMAGE_HEIGHT } from '../../../../constants/index'
import { ShopifyProductType, ShopifyImageType } from 'frontend-shopify'

type ShopifyProductImagesProps = {
	product: ShopifyProductType
	image: ShopifyImageType
	images: ShopifyImageType[]
	handleClick: (img: ShopifyImageType) => void
	disableZoom?: boolean
}

const ShopifyProductImages: React.FC<ShopifyProductImagesProps> = (props) => {
	const { disableZoom, product, image, images, handleClick } = props

	return (
		<>
			<Hidden smDown>
				<ShopifyProductImagesSlider
					image={image}
					images={images}
					handleClick={handleClick}
					disableZoom={disableZoom}
				/>
			</Hidden>
			<Hidden smUp>
				<SwipeableShopifyProductImages
					objectFit="contain"
					height={PDP_IMAGE_HEIGHT}
					width={PDP_IMAGE_HEIGHT}
					product={product}
				/>
			</Hidden>
		</>
	)
}

export default ShopifyProductImages
