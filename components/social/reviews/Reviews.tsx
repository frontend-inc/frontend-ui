import React, { useState, useContext, useEffect } from 'react'
import {
	AlertModal,
	ReviewButton,
	Review,
	ReviewForm,
	LoadMore,
	Placeholder,
  FilterButton,
	SortButton,
	SearchInput,
} from '../../../components'
import { List, Box, Stack, Collapse, Typography } from '@mui/material'
import { useReviews } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { AppContext } from '../../../context'
import { useFilters } from '../../../hooks'
import { FilterOptionType } from '../../../types'
import { SearchFilterOptionType } from '../../../types'
import { SortOptionType } from '../../../types'


export type ReviewsProps = {
	handle: string
	url: string
}

const Reviews: React.FC<ReviewsProps> = (props) => {
	const { url, handle } = props
	const { currentUser } = useAuth()

	const [activeReview, setActiveReview] = useState(null)

	const [openReview, setOpenReview] = useState(false)
	const [openDelete, setOpenDelete] = useState(false)
	const [reply, setReply] = useState(false)

	const {
		loading,
		errors,
		query,
		review,
		reviews,
		setReview,
		findReviews,
		handleChange,
		createReview,
		deleteReview,
		totalCount,
		page,
		numPages,
		loadMore,
	} = useReviews({
		url,
		handle,
	})

  const perPage = 20
  const filterOptions: SearchFilterOptionType[] = [
    {
      label: 'Rating',
      field: 'rating',
      variant: 'ratings_scale',
    },    
  ]

  const sortOptions: SortOptionType[] = [
    {
      label: 'Date',
      field: 'created_at',
    },
    {
      label: 'Rating',
      field: 'rating',      
    }
  ]

	const { setAuthOpen } = useContext(AppContext)

	const handleToggleClick = () => {
		if (currentUser?.id) {
			setReview({})
			setReply(!reply)
			setOpenReview(!openReview)
		} else {
			setAuthOpen(true)
		}
	}

	const handleSubmit = async () => {
		await createReview(review)
		setOpenReview(false)
		findReviews({
			...query,
			page: 1,
		})
		setReply(false)
	}

	const handleDeleteReview = (review) => {
		setActiveReview(review)
		setOpenDelete(true)
	}

	const handleDelete = async () => {
		await deleteReview(activeReview?.id)
		setOpenDelete(false)
		findReviews({
			...query,
			page: 1,
		})
	}

	const [keywords, setKeywords] = useState('')

	const handleKeywordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = (keywords: string) => {
		findReviews({
			...query,
			keywords: keywords,
			page: 1,
			per_page: perPage,
		})
	}

	const handleSort = (field: any) => {
		findReviews({
			...query,
			sort_by: field.field,
		})
	}

	const handleSortDirection = (sortDirection: 'asc' | 'desc') => {
		findReviews({
			...query,
			sort_direction: sortDirection,
		})
	}

	const {
		activeFilters,
		setActiveFilters,
		handleAddFilter,
		buildQueryFilters,
	} = useFilters({
		query,
	})

  // Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
		findReviews({			
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

	useEffect(() => {
		if (activeFilters) {
			findReviews({
				...query,
				filters: buildQueryFilters(activeFilters),
			})
		}
	}, [activeFilters?.length])

	useEffect(() => {
		if (url && handle) {
			findReviews({
				per_page: 20,
			})
		}
	}, [url, handle])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack direction="row" sx={sx.reviewHeader}>
				<Typography color="text.primary" variant="subtitle1">
					Reviews ({totalCount})
				</Typography>
			</Stack>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					justifyContent="space-between"
					spacing={1}
				>
					<Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems='center'>
            <SearchInput
              value={keywords}
              handleChange={handleKeywordChange}
              handleSearch={handleSearch}
            />
            <Box>
              <FilterButton
                filters={activeFilters}
                handleFilter={handleFilter}
                handleClear={handleClearFilters}
                filterOptions={filterOptions}
              />
            </Box>
            <Box>
              <SortButton
                sortBy={query?.sort_by || 'id'}
                sortDirection={query?.sort_direction || 'desc'}
                sortOptions={sortOptions}
                handleSortBy={handleSort}
                handleSortDirection={handleSortDirection}
              />
            </Box>
					</Stack>   
          <Box>
            <ReviewButton handleClick={handleToggleClick} />          
          </Box>       
				</Stack>
			<Collapse in={openReview}>
				<ReviewForm					
					errors={errors}
					loading={loading}
					review={review}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</Collapse>
			<List dense disablePadding>
				{reviews?.map((review, i) => (
					<Review
						key={i}
						review={review}
						handleDelete={handleDeleteReview}
					/>
				))}
			</List>
			{!loading && !openReview && reviews?.length == 0 && (
				<Placeholder
					icon="Star"
					title="There are no reviews."
					description="Be the first to leave a review."
				/>
			)}
			<LoadMore 
        loadMore={loadMore} 
        page={page} 
        numPages={numPages} 
      />
			<AlertModal
				loading={loading}
				open={openDelete}
				handleClose={() => setOpenDelete(false)}
				handleConfirm={handleDelete}
			/>
		</Stack>
	)
}

export default Reviews

const sx = {
	root: {
		py: 2,
		pb: 1.5,
		borderColor: 'divider',
	},
	reviewHeader: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}
