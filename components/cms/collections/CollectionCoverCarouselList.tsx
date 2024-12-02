'use client'

import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from './CollectionList'
import CollectionCoverCarouselListItems from './CollectionCoverCarouselListItems'

export type CollectionCoverCarouselListProps =
	CollectionListProps & {
		enableArrows?: boolean
		enableAutoPlay?: boolean
		buttonText?: string
		height?: number
	}

const CollectionCoverCarouselList: React.FC<
	CollectionCoverCarouselListProps
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
		<CollectionList
			{...props}
			list={CollectionCoverCarouselListItems}
			slots={slots}
		/>
	)
}

export default CollectionCoverCarouselList
