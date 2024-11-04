'use client'

import React from 'react'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { CollectionListItem, DataLayout } from '../..'
import { ButtonType, MetafieldType } from '../../../types'
import { useShop } from '../../../hooks'

export type CollectionListItemsProps = {
	layout?: 'list' | 'grid' | 'slider'
	selectable?: boolean
	href?: string
	style?: 'list' | 'card' | 'avatar' | 'cover' | 'text'
	buttons: ButtonType[]
	metafields: MetafieldType[]
	handleClick?: (resource: any) => void
	enableGradient?: boolean
	enableOverlay?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	slots?: {
		list?: any
		item?: any
	}
}

const CollectionListItems: React.FC<CollectionListItemsProps> = (props) => {

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
		selectable,
		layout = 'list',
		buttons = [],
		style = 'list',
		handleClick,
		metafields = [],
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
		enableComments = false,
		slots = {
			item: {},
		},
	} = props

  const { setSubscribeOpen } = useShop()

	const handleShowClick = (resource) => {
    if (handleClick) {
			handleClick(resource)
    } else if (resource?.premium) {					
      setSubscribeOpen(true)
		} else {					
			setResource(resource)
			setOpenShow(true)
		}
	}

	const handlePaginate = async () => {
		await loadMore()
	}

	return (
		<div className="flex flex-col w-full space-y-2">
			<DataLayout {...slots.list} layout={layout} loading={loading}>
				{resources?.map((resource, index) => (
					<CollectionListItem
						key={index}
						style={style}
						selectable={selectable}
						resource={resource}
						metafields={metafields}
						handleClick={() => handleShowClick(resource)}
						buttons={buttons}
						enableComments={enableComments}
						enableFavorites={enableFavorites}
						enableLikes={enableLikes}
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

export default CollectionListItems
