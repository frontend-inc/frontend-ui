import React from 'react'
import { CollectionList } from '../..'
import {
	SortOptionType,
	SearchFilterOptionType,
	DisplayFieldType,
  ActionType,
} from '../../../types'

export type FavoritesProps = {
	variant: 'list' | 'grid'
	style: 'card' | 'avatar' | 'cover'
	field: any
  actions: ActionType[]
	displayFields: DisplayFieldType[]
	url: string
	handle: string
	href: any
	foreignUrl?: string
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	perPage?: number
	query?: any
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableFavorites?: boolean
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
}

const Favorites: React.FC<FavoritesProps> = (props) => {
	const { url, ...rest } = props

	return (
		<CollectionList
			enableFavorites
			url={`${url}/favorites`}
			// Todo: Component errors without a default value
			query={{}}
			{...rest}
		/>
	)
}

export default Favorites
