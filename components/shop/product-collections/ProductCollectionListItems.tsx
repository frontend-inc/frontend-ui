'use client'

import React from 'react'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { ProductCollectionListItem, DataLayout } from '../..'
import { ButtonType, MetafieldType } from '../../../types'

export type ProductCollectionListItemsProps = {
	layout?: 'list' | 'grid' | 'slider'
	style?: 'list' | 'card' | 'avatar' | 'cover' | 'text'
	buttons: ButtonType[]
	displayFields: MetafieldType[]
	handleClick?: (resource: any) => void
	enableGradient?: boolean
	enableOverlay?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
	enableSharing?: boolean
	slots?: {
		list?: any
		item?: any
	}
}

const ProductCollectionListItems: React.FC<ProductCollectionListItemsProps> = (
	props
) => {
	const {
		setResource,
		loading,
		resources,
		page,
		numPages,
		loadMore,
		setOpenShow,
	} = useResourceContext()

	const {
		layout = 'list',
		buttons = [],
		style = 'list',
		handleClick,
		displayFields = [],
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
		enableRatings = false,
		slots = {
			item: {},
		},
	} = props

	const handleShowClick = (resource) => {
		if (handleClick) {
			handleClick(resource)
		} else {
			setResource(resource)
			setOpenShow(true)
		}
	}

	const handlePaginate = async () => {
		await loadMore()
	}

	return (
		<div className="flex flex-col space-y-2 w-full">
			<DataLayout {...slots.list} layout={layout} loading={loading}>
				{resources?.map((resource) => (
					<ProductCollectionListItem
						key={resource?.id}
						style={style}
						resource={resource}
						displayFields={displayFields}
						handleClick={() => handleShowClick(resource)}
						buttons={buttons}
						enableFavorites={enableFavorites}
						enableLikes={enableLikes}
						enableRatings={enableRatings}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
						{...slots.item}
					/>
				))}
			</DataLayout>
			<LoadMore
				page={page}
				numPages={numPages}
				handlePaginate={handlePaginate}
			/>
		</div>
	)
}

export default ProductCollectionListItems
