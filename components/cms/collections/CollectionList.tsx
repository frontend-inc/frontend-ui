import React, { useContext, useState, useEffect } from 'react'
import { useSearch } from '../../../hooks'
import { useDocuments } from 'frontend-js'
import { Button, Box, Stack } from '@mui/material'
import {
	Form,
	Drawer,
	AlertModal,
	LoadMore,
	IconLoading,
	GoogleMap,
} from '../../../components'
import { AppContext } from '../../../context'
import {
	ActionType,
	FilterOptionType,
	FormFieldType,
	DisplayFieldType,
} from '../../../types'
import { useRouter } from 'next/router'
import {
	CollectionCards,
	Placeholder,
	CollectionToolbar,
	SearchFilters,
} from '../..'
import {
	SortOptionType,
	SearchFilterOptionType,
} from '../../../types'
import { useAuth } from 'frontend-js'
import CollectionContainer from './CollectionContainer'

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
	enableGoogleMap?: boolean
	buttonText?: string
	handleClick?: (resource: any) => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
	enableFavorites?: boolean
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
