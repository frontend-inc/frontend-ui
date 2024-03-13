import React, { useContext, useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Box, Grid, Stack } from '@mui/material'
import {
	ListFilterButton,
	ListSortButton,
	SearchInput,
	Carousel,
	LoadMore,
  CardVert
} from '../..'
import { Typography } from '@mui/material'
import { AppContext } from '../../../context'
import { TITLE_SORT, PRICE_SORT } from '../../../constants/index'
import { FilterOptionType } from '../../../types'
import { useRouter } from 'next/router'
import CollectionCard from './CollectionCard'

type CollectionProps = {
	title?: string
	url: string
	layout: 'list' | 'grid' | 'carousel'
	style: 'card' | 'avatar' | 'image' | 'cover'
  renderItem: (resource: any, index: number) => React.ReactNode
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
    renderItem,
		url,
		fields,
		query: defaultQuery = {},
		perPage = 20,
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

	const handleSortDirection = (sortDirection: 'asc' | 'desc') => {
		findMany({
			...query,
			sort_direction: sortDirection,
		})
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

	const handleFilter = (filter: FilterOptionType) => {
		handleAddFilter(filter)
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
      <Box 
        sx={{ 
          ...sx.content,
          ...(layout == 'grid' ? sx.grid : sx.list )
        }}
      >
        { resources?.map((resource, i) => (
          <CollectionCard 
            layout={layout}
            style={style}
            key={index}
            title={resource?.title}
            image={resource?.image?.url}
            video={resource?.video?.url}
            description={resource?.description}
            buttonText={buttonText}
            handleClick={() => handleClick(resource) }
            enableBorder={enableBorder}
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
          />
        ))}
      </Box>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: {
      md: '1fr 1fr 1fr',
      xs: '1fr',
    },
    gap: '16px'
  },
  item: {
    p: 2
  }
}
