'use client'

import React from 'react'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { ProductListItem, DataLayout } from '../..'
import { ButtonType, MetafieldType } from '../../../types'
import { BlurFade } from '../../../components'

export type ProductListItemsProps = {
	style?: 'list' | 'card' | 'avatar' | 'cover' | 'text'
	buttons: ButtonType[]
	displayFields: MetafieldType[]
	handleClick: (resource: any) => void
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

const ProductListItems: React.FC<ProductListItemsProps> = (props) => {
	const {
		loading,
		setResource,
		resources,
		page,
		numPages,
		loadMore,
		setOpenShow,
	} = useResourceContext()

	const {
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

	const handleShowClick = (product: any) => {
		if (handleClick) {
			handleClick(product)
			return
		} else {
			setResource(product)
			setOpenShow(true)
		}
	}

	const handlePaginate = async () => {
		await loadMore()
	}

	return (
		<div className="flex flex-col space-y-2 w-full">
			<DataLayout {...slots.list} layout="grid" loading={loading}>
				{resources?.map((resource, idx) => (
					<BlurFade delay={0.25 + idx * 0.05} inView key={resource?.id}>
						<ProductListItem
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
					</BlurFade>
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

export default ProductListItems
