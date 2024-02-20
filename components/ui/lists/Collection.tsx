import React, { useContext, useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Stack, Box } from '@mui/material'
import {
	ListFilterButton,
	ListSortButton,
	SearchInput,
	StyledList,
	LoadMore,
} from '../../../components'
import { Typography } from '@mui/material'
import { AppContext } from '../../../context'
import { TITLE_SORT, PRICE_SORT } from '../../../constants/index'
import { FilterOption } from '../../../types'
import { useRouter } from 'next/router'

type CollectionProps = {
	title?: string
	url: string
	layout: 'list' | 'grid' | 'carousel'
	style: 'card' | 'avatar' | 'image' | 'cover'
	fields?: any
	editing?: boolean
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
	navigateUrl: any
	perPage?: number
	query?: any
	enableSearch?: boolean
	enableFilters?: boolean
	enableSortTitle?: boolean
	enableSortPrice?: boolean
	secondaryActions?: React.ReactNode
	buttonText?: string
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
}

const Collection: React.FC<CollectionProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)
	const {
		title,
		layout = 'grid',
		style = 'card',
		url,
		fields,
		query: defaultQuery = {},
		perPage = 20,
		editing,
		enableSearch = false,
		enableFilters = false,
		enableSortTitle = false,
		enableSortPrice = false,
		enableInfiniteLoad = false,
		enableLoadMore = true,
		navigateUrl,
		buttonText,
		autoPlay = false,
		arrows = false,
		showDots = true,
		enableBorder = false,
		enableGradient = false,
	} = props

	const { loading, query, findMany, resources, page, numPages, loadMore } =
		useResource({
			url,
		})

	const [keywords, setKeywords] = useState('')

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = (keywords: string) => {
		findMany({
			...defaultQuery,
			...query,
			keywords: keywords,
			page: 1,
			per_page: perPage,
		})
	}

	const handleSortBy = (sortBy: string) => {
		findMany({
			...query,
			sort_by: sortBy,
		})
	}

	const handleSortDirection = (sortDirection:'asc' | 'desc') => {
		findMany({
			...query,
			sort_direction: sortDirection,
		})
	}

	const handleClick = (item) => {
		if (clientUrl && navigateUrl && item?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${navigateUrl}/${item?.handle}`)
		}
	}

	const { activeFilters, setActiveFilters, handleAddFilter } = useFilters({
		query,
		handleSubmit: findMany,
	})

	// Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
		findMany({
			filters: {},
			keywords: '',
			page: 1,
			per_page: perPage,
		})
	}

	const handleFilter = (filter: FilterOption) => {
		handleAddFilter(filter)
	}

	useEffect(() => {
		if (url && defaultQuery && perPage) {
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url, defaultQuery, perPage])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack direction="row" justifyContent={'space-between'} spacing={1}>
				<Typography variant="h5" color="textPrimary">
					{title}
				</Typography>
				<Box>
					{enableFilters && (
						<ListFilterButton
							fields={fields}
							filters={activeFilters}
							handleFilter={handleFilter}
							handleClear={handleClearFilters}
						/>
					)}
					{(enableSortTitle || enableSortPrice) && (
						<ListSortButton
							sortBy={query?.sort_by}
							sortDirection={query?.sort_direction}
							fields={[
								...((enableSortTitle && [TITLE_SORT]) || []),
								...((enableSortPrice && [PRICE_SORT]) || []),
							]}
							handleSortBy={handleSortBy}
							handleSortDirection={handleSortDirection}
						/>
					)}
				</Box>
			</Stack>
			{enableSearch && (
				<SearchInput
					value={keywords}
					handleChange={handleChange}
					handleSearch={handleSearch}
				/>
			)}
			<StyledList
				resources={resources}
				layout={layout}
				style={style}
				editing={editing}
				loading={loading}
				buttonText={buttonText}
				handleClick={handleClick}
        //@ts-ignore
				autoPlay={autoPlay}
				arrows={arrows}
				showDots={showDots}
				enableBorder={enableBorder}
				enableGradient={enableGradient}
			/>
			{enableLoadMore && (
				<LoadMore
					page={page}
					numPages={numPages}
					loadMore={loadMore}
					enableInfiniteLoad={enableInfiniteLoad}
				/>
			)}
		</Stack>
	)
}

export default Collection

const sx = {
	root: {
		width: '100%',
	},
}
