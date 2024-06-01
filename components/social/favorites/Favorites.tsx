import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../../context'
import { useResource } from 'frontend-js'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'
import { CollectionList } from '../..'
import { useFilters } from '../../../hooks'
import { 
	LoadMore,
  Placeholder
} from '../../../components'
import { 
  Box,
  Stack,
  Grid
} from '@mui/material'
import { 
  SortOptionType, 
  SearchFilterOptionType, 
  FilterOptionType 
} from '../../../types'
import { SearchFilters } from '../../../components'
import { CollectionToolbar } from '../../../components'

export type FavoritesProps = {
	variant?: 'list' | 'grid'
	style?: 'card' | 'avatar' | 'cover'
	field: any
	url: string
	handle: string
	href?: any
	foreignUrl?: string
  filterAnchor?: 'left' | 'top'
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
	const { currentUser } = useAuth()

	const {
		variant = 'list',
		style = 'card',
		url,
		href,
    filterAnchor = 'left',
		filterOptions = [],
		sortOptions = [],
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
		enableInfiniteLoad = false,
		enableLoadMore = true,
		perPage = 5,
		query: defaultQuery = null,
		enableBorder = false,
		enableGradient = false,
	} = props

  const router = useRouter()

	const { clientUrl } = useContext(AppContext)

	const { 
    delayedLoading: loading,
    query, 
    resources, 
    findMany,
    page,
    numPages,
    loadMore, 
  } = useResource({
		url: `${url}/favorites`,
	})

  const [keywords, setKeywords] = useState('')

	const handleKeywordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = (keywords: string) => {
		findMany({
			...query,
			...defaultQuery,
			keywords: keywords,
			page: 1,
			per_page: perPage,
		})
	}

  const handleSortBy = (field: SortOptionType) => {
		findMany({
			...query,
			sort_by: field?.field,
		})
	}

	const handleSortDirection = (sortDirection: 'asc' | 'desc') => {
		findMany({
			...query,
			sort_direction: sortDirection,
		})
	}

  const handleClearFilters = () => {
		setActiveFilters([])
		findMany({
			filters: mergeAllFilters([
        defaultQuery?.filters,
      ]),
			sort_by: 'id',
			sort_direction: 'desc',
			keywords: '',
			page: 1,
			per_page: perPage,
		})
	}

	const handleFilter = (filter: FilterOptionType) => {
		handleAddFilter(filter)
	}

  const {
    queryFilters,
		activeFilters,
		setActiveFilters,
		handleAddFilter,
    mergeAllFilters,	
	} = useFilters({
		query,
	})

  const handleClick = (item) => {
		if (clientUrl && href && item?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${href}/${item?.handle}`)
		}
	}

  useEffect(() => {
		if (url && currentUser?.id) {                   
			findMany({
				...defaultQuery,
        filters: mergeAllFilters([
          defaultQuery?.filters,
          queryFilters
        ]),       
				per_page: perPage,
			})
		}
	}, [
    url, 
    perPage, 
    currentUser,
    queryFilters,
    defaultQuery,
  ])

	return (
    <Stack spacing={1} sx={sx.root}>      
      <CollectionToolbar
        query={query}
        activeFilters={activeFilters}
        enableFilters={enableFilters && filterAnchor == 'top'}
        enableSorting={enableSorting}
        enableSearch={enableSearch}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        handleFilter={handleFilter}
        handleClearFilters={handleClearFilters}
        handleSortBy={handleSortBy}
        handleSortDirection={handleSortDirection}
        keywords={keywords}
        handleKeywordChange={handleKeywordChange}
        handleSearch={handleSearch}
      />
    <Grid container spacing={0}>
      {enableFilters && filterAnchor == 'left' && (
        <Grid item xs={12} sm={4} lg={3}>
          <Box sx={sx.filtersContainer}>
            <SearchFilters
              filters={activeFilters}
              filterOptions={filterOptions}
              handleFilter={handleFilter}
            />
          </Box>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={enableFilters && filterAnchor == 'left' ? 8 : 12}
        lg={enableFilters && filterAnchor == 'left' ? 9 : 12}
      >
        <Box 
          sx={{ 
            ...(loading && (sx.loading || {})) 
          }}
        >					
          <CollectionList
            enableFavorites
            resources={resources}
            variant={variant}
            style={style}
            handleClick={handleClick}
            enableBorder={enableBorder}
            enableGradient={enableGradient}
          />
    			{!loading && resources.length == 0 && (
						<Placeholder
							icon="Heart"
							title="No favorites found"
							description="Try adjusting your search or filters"
						/>
					)}
          </Box>
				</Grid>
			</Grid>
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

export default Favorites

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
	},
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	filtersContainer: {
		mr: {
			sm: 2,
			xs: 0,
		},
		mb: {
			sm: 0,
			xs: 2,
		},
	},
	sortFilterActions: {
		justifyContent: 'flex-end',
	},
	loading: {
		opacity: 0.7,
	},
	circularProgress: {
		color: 'primary.main',
	},
}
