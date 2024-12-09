'use client'

import React from 'react'
import { ShopifyProductType } from 'frontend-shopify'
import { Swipeable, Image } from '../../../../components'
import { useClickOrDrag } from '../../../../hooks'

type SwipeableShopifyProductImagesProps = {
	product: ShopifyProductType
	height?: number
	width?: number
	handleClick?: () => void
	objectFit?: 'contain' | 'cover'
	responsiveHeight?: boolean
	disableBorderRadius?: boolean
}

export default function SwipeableShopifyProductImages({
	product,
	height = 320,
	handleClick,
	disableBorderRadius = false,
}: SwipeableShopifyProductImagesProps) {
	// @ts-ignore
	const images = product?.images?.edges?.map((edge) => edge?.node) || []

	const { onMouseDown, onMouseUp } = useClickOrDrag({
		onClick: handleClick,
	})

	return (
		<Swipeable enableDots>
			{images.map((image, index) => (
				<div
          key={index}
					className="w-full overflow-hidden"
					onMouseDown={onMouseDown}
					onMouseUp={onMouseUp}
				>
					<Image
						src={image?.url}
						alt={product?.title}
						height={height}
						disableBorderRadius={disableBorderRadius}
						aspectRatio={1.0}
					/>
				</div>
			))}
		</Swipeable>
	)
}
