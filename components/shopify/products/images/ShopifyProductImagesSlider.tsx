'use client'

import React from 'react'
// @ts-ignore
import Zoom from 'react-medium-image-zoom'
import { ShopifyImageType } from 'frontend-shopify'
import Image from 'next/image'
import { cn } from '@nextui-org/react'

type ThumbnailProps = {
	image: ShopifyImageType
	active: boolean
	handleClick: (img: ShopifyImageType) => void
}

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
	const { image, active, handleClick } = props
	return (
		<button
			className={cn(
				'p-0 w-[96px] h-[96px] overflow-hidden rounded hover:bg-content2/20',
				active ? 'ring-2 ring-offset-2 ring-primary' : 'ring-2 ring-transparent'
			)}
			onClick={() => handleClick(image)}
		>
			<Image
				src={image.url}
				width={96}
				height={96}
				alt={image?.altText || ''}
				className="object-cover"
			/>
		</button>
	)
}

type ShopifyProductImageSliderProps = {
	disableZoom?: boolean
	image: ShopifyImageType
	images: ShopifyImageType[]
	handleClick: (img: ShopifyImageType) => void
}

const ShopifyProductImageSlider: React.FC<ShopifyProductImageSliderProps> = (
	props
) => {
	const { disableZoom = false, image, images, handleClick } = props

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex justify-center items-start">
				{image?.url &&
					(disableZoom ? (
						<img
							src={image?.url}
							alt={image?.altText || ''}
							className="h-full w-full object-contain rounded-lg"
						/>
					) : (
						<Zoom>
							<img
								src={image?.url}
								alt={image?.altText || ''}
								className="h-full w-full object-contain rounded-lg"
							/>
						</Zoom>
					))}
			</div>
      <div className="flex flex-row flex-wrap gap-2">			
				{images?.map((img) => (
					<Thumbnail
						key={img?.id}
						image={img}
						active={img?.id === image?.id}
						handleClick={handleClick}
					/>
				))}
			</div>
		</div>
	)
}

export default ShopifyProductImageSlider
