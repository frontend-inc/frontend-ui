'use client'

import React from 'react'
import { ProductCollectionList } from '../..'
import { ProductCollectionListProps } from './ProductCollectionList'
import ProductCollectionCoverCarouselListItems from './ProductCollectionCoverCarouselListItems'

export type ProductCollectionCoverCarouselListProps =
	ProductCollectionListProps & {
		enableArrows?: boolean
		enableAutoPlay?: boolean
		buttonText?: string
		height?: number
	}

const ProductCollectionCoverCarouselList: React.FC<
	ProductCollectionCoverCarouselListProps
> = (props) => {
	const { enableArrows, enableAutoPlay, height, buttonText } = props || {}

	const slots = {
		list: {
			enableArrows,
			enableAutoPlay,
			buttonText,
			height,
		},
	}

	return (
		<ProductCollectionList
			{...props}
			list={ProductCollectionCoverCarouselListItems}
			slots={slots}
		/>
	)
}

export default ProductCollectionCoverCarouselList
