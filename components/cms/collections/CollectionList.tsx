import React from 'react'
import {
	ActionType,	
	FormFieldType,
	DisplayFieldType,
} from '../../../types'
import {
	SortOptionType,
	SearchFilterOptionType,
} from '../../../types'
import { CollectionContainer } from '../../../components'

export type CollectionListProps = {
	variant: 'list' | 'grid'
	style: 'avatar' | 'card' | 'cover' | 'chip' | 'text' | 'image'
	layout?: 'drawer' | 'inline'
	editing?: boolean
	url: string
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
	href: any
	perPage?: number
	query?: any
	actions?: ActionType[]
	fields?: FormFieldType[]
	displayFields?: DisplayFieldType[]
	filterAnchor?: 'left' | 'top'
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	enableGoogleMaps?: boolean
	buttonText?: string
	handleClick?: (resource: any) => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
	enableFavorites?: boolean
  enableRatings?: boolean
	filterUser?: boolean
	filterTeam?: boolean
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const CollectionList: React.FC<CollectionListProps> = (props) => {

	const {
		url,
    ...rest
	} = props

	return (
    <CollectionContainer
      url={url} 
      searchUrl={url}
      { ...rest }
    />
	)
}

export default CollectionList
