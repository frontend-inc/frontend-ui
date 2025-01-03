'use client'

import React from 'react'
import { ShopifyProductType } from 'frontend-shopify'
import { Swipeable } from '../../../../components'
import { useClickOrDrag } from '../../../../hooks'
import { Card, Image } from '@nextui-org/react'
import { AspectRatio } from 'frontend-shadcn'
import NextImage from 'next/image'

type SwipeableShopifyProductImagesProps = {
	product: ShopifyProductType
	height?: number
	width?: number
	handleClick?: () => void
	objectFit?: 'contain' | 'cover'
	responsiveHeight?: boolean
	disableBorderRadius?: boolean
}

export default function SwipeableShopifyProductImages(
	props: SwipeableShopifyProductImagesProps
) {
	const {
		product,
		height = 320,
		handleClick,
		disableBorderRadius = false,
	} = props || {}

	// @ts-ignore
	const images = product?.images?.edges?.map((edge) => edge?.node) || []

	const { onMouseDown, onMouseUp } = useClickOrDrag({
		onClick: handleClick,
	})

	return (
		<Swipeable enableDots>
			{images.map((image, index) => (
				<div
					className="relative"
					key={index}
					onMouseDown={onMouseDown}
					onMouseUp={onMouseUp}
				>
					<AspectRatio ratio={1.0}>
						<Image
							radius="none"
							removeWrapper
							key={index}
							src={image?.url}
							alt={product?.title}
							className="object-cover"
						/>
					</AspectRatio>
				</div>
			))}
		</Swipeable>
	)
}
