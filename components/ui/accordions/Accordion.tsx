import React, { useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Stack, Box } from '@mui/material'
import {
	AccordionItem,
	ListFilterButton,
	SearchInput,
	Placeholder,
	LoadMore,
} from '..'
import { Typography, useTheme } from '@mui/material'
import { FilterOption } from '../../../types'
import { Search } from 'lucide-react'

type AccordionProps = {
	title?: string
	url: string
	fields?: any
	editing?: boolean
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
	perPage?: number
	query?: any
	enableSearch?: boolean
	enableFilters?: boolean
}

const AccordionView: React.FC<AccordionProps> = (props) => {
	const theme = useTheme()
	const {
		title,
		url,
		fields,
		query: defaultQuery = {},
		perPage = 20,
		editing,
		enableSearch = false,
		enableFilters = false,
		enableInfiniteLoad = false,
		enableLoadMore = true,
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
				<Typography variant="h6" color="textPrimary">
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
				</Box>
			</Stack>
			{enableSearch && (
				<SearchInput
					value={keywords}
					handleChange={handleChange}
					handleSearch={handleSearch}
				/>
			)}
			{resources?.map((resource, i) => (
				<AccordionItem
					key={i}
					title={resource?.title}
					description={resource?.description}
					image={resource?.image}
				/>
			))}
			{!loading && resources?.length === 0 && (
				<Placeholder
					icon={<Search color={theme.palette.text.secondary} />}
					title="No results found"
					description="Try adjusting your search or filters"
				/>
			)}
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

export default AccordionView

const sx = {
	root: {
		width: '100%',
	},
	accordionSummary: {},
}
