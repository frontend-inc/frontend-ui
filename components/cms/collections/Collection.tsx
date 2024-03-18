import React, { useContext, useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Box, Stack } from '@mui/material'
import {
	CollectionFilterButton,
	ListSortButton,
	SearchInput,
	Heading,
	LoadMore,  
} from '../..'
import { AppContext } from '../../../context'
import { TITLE_SORT, PRICE_SORT } from '../../../constants/index'
import { FilterOptionType } from '../../../types'
import { useRouter } from 'next/router'
import { CollectionList } from '../../../components'
import { SearchFilterOptionType } from '../../../types'

type CollectionProps = {
	title?: string
	url: string
	layout: 'list' | 'grid' 
	style: 'avatar' | 'card' | 'cover'
	editing?: boolean
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
	navigateUrl: any
	perPage?: number
	query?: any
  filterOptions?: SearchFilterOptionType[]
  sortOptions?: string[]
	enableSearch?: boolean
	enableFilters?: boolean
  enableSort?: boolean
	secondaryActions?: React.ReactNode
	buttonText?: string
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
		filterOptions=[],
    sortOptions=[],
		query: defaultQuery = {},
		perPage = 20,
		enableSearch = false,
		enableFilters = false,
    enableSort = false,
		enableInfiniteLoad = false,
		enableLoadMore = true,
		navigateUrl,
		buttonText,
		enableBorder = false,
		enableGradient = false    
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

	const {     
    activeFilters, 
    setActiveFilters, 
    handleAddFilter,
    buildQueryFilters
  } = useFilters({
		query,
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

  useEffect(() => {
    findMany({
      ...query,
      filters: buildQueryFilters(activeFilters),
      page: 1,
      per_page: perPage,
    })
}, [activeFilters?.length])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack direction="column" spacing={1}>
        <Heading 
          title={title}
        />
				<Stack direction="column" spacing={1}>
					{enableFilters && (
            <Box>
              <CollectionFilterButton							
                filters={activeFilters}              
                handleFilter={handleFilter}
                handleClear={handleClearFilters}
                filterOptions={filterOptions}
              />
            </Box>
					)}
					{enableSort && (
						<ListSortButton
							sortBy={query?.sort_by}
							sortDirection={query?.sort_direction}							
              sortOptions={[
                TITLE_SORT,
                PRICE_SORT 
              ]}
							handleSortBy={handleSortBy}
							handleSortDirection={handleSortDirection}
						/>
					)}
				</Stack>
      </Stack>
			{enableSearch && (
				<SearchInput
					value={keywords}
					handleChange={handleChange}
					handleSearch={handleSearch}
				/>
			)}   
      <CollectionList 
        layout={ layout }
        style={ style }
        resources={ resources }
        handleClick={ handleClick }
        buttonText={ buttonText }
        enableBorder={ enableBorder }
        enableGradient={ enableGradient }
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
  content: {
    width: '100%'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
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
