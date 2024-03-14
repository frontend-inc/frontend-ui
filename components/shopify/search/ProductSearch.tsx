import React, { useState, useContext, useEffect } from 'react'
import { SearchFilterType, useProducts, useSearchFilters } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { useRouter } from 'next/router'
import { Box, Grid } from '@mui/material'
import { SearchInput, Placeholder } from '../..'
import { ProductGrid, ProductSearchFilters } from '..'
import LoadMore from './LoadMore'
import { AppContext } from '../../../context'

const PER_PAGE = 48

type ProductSearchProps = {
	title?: string
	editing?: boolean	
	handle: string | string[]
	options?: SearchFilterType[]
	inStockFilter?: boolean
	enableFilters?: boolean
  enableSort?: boolean
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
	enableOkendoStarRating?: boolean
}

const ProductSearch: React.FC<ProductSearchProps> = (props) => {

  const {
		title,
		handle,
		editing = false,
    options,		
    enableFilters = false,
		enableSort = false,
		enableBorder = false,
		enableAddToCart = false,
		enableQuickShop = false,
		enableQuantity = false,
		enableOkendoStarRating = false,
	} = props


	const router = useRouter()
	const { trackProductsSearched } = useSegment()

  let { page_id: pageId, handle: query } = router.query

	if (query == 'index' || query == undefined) query = ''

	const [keywords, setKeywords] = useState(String(query).toLowerCase())
	const first = PER_PAGE

	const { clientUrl } = useContext(AppContext) as any

	const {
		loading,
		errors,
		cursor,
		hasNextPage,
		products,
		findProducts,
		searchProducts,
	} = useProducts()

  const [sortKey, setSortKey] = useState('COLLECTION_DEFAULT')
  const [reverse, setReverse] = useState(false)

  const {
    filters,    
    handleFilter,
    handleFilterArray,
    buildFilterQuery,
  } = useSearchFilters()

	const handleChange = (ev) => {
		setKeywords(ev.target.value)
		if (keywords?.length == 0) {
			handleSearch('')
		}
	}

	const handleSearch = (keywords) => {
		if (keywords?.length > 0) {
			trackProductsSearched(keywords)
		}
		router.push(`${clientUrl}/${ pageId }/${keywords.split(' ').join('-')}`)
	}

	const handleLoadMore = (after) => {
		searchProducts({
			query: `${keywords} tag_not:hidden`,
			first: first,
			after,
		})	
  }

  const handleSortClick = (sortKey, reverse = false) => {
		setSortKey(sortKey)
		setReverse(reverse)
	}

	useEffect(() => {
		if (query?.length > 0 || filters?.length > 0) {
			let searchKeywords = decodeURI(String(query)).split('-')?.join(' ')
			let filterQuery = buildFilterQuery(filters)
			searchProducts({
				query: `${searchKeywords} ${filterQuery}`,
			})
		} else {
			findProducts({
				first: 20,
			})      
		}
	}, [query, filters])

	return (
		<Box sx={sx.root}>
      <Grid container spacing={2}>
      { enableFilters && (
        <Grid item xs={12} sm={12} md={3}>
          <ProductSearchFilters 
            filters={ filters }
            options={ options }            
            handleFilter={ handleFilter }
            handleFilterArray={ handleFilterArray }            
          />
        </Grid>
        )}
        <Grid item 
          xs={12} 
          sm={12 }
          md={enableFilters ? 9 : 12 }
        >
          <Box sx={sx.searchInput}>
            <SearchInput
              value={keywords}
              handleChange={handleChange}
              handleSearch={handleSearch}
              placeholder={'Search'}
            />
          </Box>

          {products?.length > 0 && (
            <ProductGrid 
              loading={loading} 
              products={products} 
              enableBorder={enableBorder}
              enableAddToCart={enableAddToCart}
              enableQuickShop={enableQuickShop}
              enableQuantity={enableQuantity}
              enableOkendoStarRating={enableOkendoStarRating}              
            />
          )}

          {!loading && (!products || products?.length == 0) && (
            <Placeholder
              title="No search results"
              description="Try another search term"
            />
          )}
          <LoadMore
            loading={loading}
            hasNextPage={hasNextPage}
            handleSearch={() => handleLoadMore(cursor)}
          />
        </Grid>
      </Grid>
		</Box>
	)
}

export default ProductSearch

const sx = {
	root: {
		pt: 2,
	},
	searchInput: {
		mb: 2,
	},
}
