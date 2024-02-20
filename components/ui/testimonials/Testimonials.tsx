import React, { useEffect } from 'react'
import { useResource } from 'frontend-js'
import { Stack } from '@mui/material'
import {
	Icon,
	GridView,
	ListView,
	Placeholder,
	LoadMore,
	TestimonialCard,
} from '../../../components'
import { Typography } from '@mui/material'

type TestimonialsProps = {
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
	buttonText?: string
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	enableBorder?: boolean
}

const Testimonials: React.FC<TestimonialsProps> = (props) => {
	const {
		title,
		layout = 'grid',
		url,
		query: defaultQuery = {},
		perPage = 20,
		editing,
		enableInfiniteLoad = false,    
		enableLoadMore = true,
		enableBorder = false,
	} = props

	const { loading, findMany, resources, page, numPages, loadMore } =
		useResource({
			url,
		})

	useEffect(() => {
		if (url && perPage) {
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url, perPage])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack direction="row" justifyContent={'space-between'} spacing={1}>
				<Typography variant="h6" color="textPrimary">
					{title}
				</Typography>
			</Stack>
			{layout == 'grid' && (
				<GridView
					editing={editing}
					loading={loading}
					items={resources}
					component={TestimonialCard}
					enableBorder={enableBorder}
				/>
			)}
			{layout == 'carousel' && (
				<ListView
					flexDirection="row"
					spacing={4}
					editing={editing}
					items={resources}
					component={TestimonialCard}
					enableBorder={enableBorder}
				/>
			)}
			{!loading && resources?.length === 0 && (
				<Placeholder
					icon={<Icon name="Search" />}
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

export default Testimonials

const sx = {
	root: {
		width: '100%',
	},
}
