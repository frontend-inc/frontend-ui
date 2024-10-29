'use client'

import React from 'react'
import { TouchableOpacity } from '../../..'
import { useProductContext } from 'frontend-shopify'
import Image from 'next/image'
import { AspectRatio } from 'frontend-shadcn'

const ShopifyProductImageCarousel: React.FC = () => {
	const { images, handleImageClick } = useProductContext()
	return (
		<div>
			{images?.map((image) => (
				<div className="w-full h-full pb-1" key={image.id}>
					<TouchableOpacity handleClick={() => handleImageClick(image)}>
						<AspectRatio ratio={4 / 3}>
							<Image
								src={image?.url?.url}
								height={1200}
								width={1200}
								alt={image?.altText}
							/>
						</AspectRatio>
					</TouchableOpacity>
				</div>
			))}
		</div>
	)
}

export default ShopifyProductImageCarousel
