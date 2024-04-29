import React, { useEffect } from 'react'
import { useResource } from 'frontend-js'
import { Stack } from '@mui/material'
import { CollectionList, Placeholder } from '../../../components'
import { Typography } from '@mui/material'

type VideosProps = {
	title?: string
	url: string
	variant: 'list' | 'grid'
	style: 'card' | 'avatar' | 'cover'
	editing?: boolean
	perPage?: number
	query?: any
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Videos: React.FC<VideosProps> = (props) => {
	const {
		title,
		variant = 'grid',
		style = 'cover',
		url,
		query: defaultQuery = {},
		perPage = 20,
		enableOverlay,
		enableGradient,
		enableBorder,
	} = props

	const { loading, findMany, resources } = useResource({
		url,
	})

	const handleClick = () => null

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
			<Typography variant="h5" color="text.primary">
				{title}
			</Typography>
			<CollectionList
				variant={variant}
				style={style}
				resources={resources}
				enableBorder={enableBorder}
				enableGradient={enableGradient}
				handleClick={handleClick}
			/>
			{!loading && resources?.length === 0 && (
				<Placeholder
					icon={'Video'}
					title="No videos found"
					description="Try adjusting your search or filters"
				/>
			)}
		</Stack>
	)
}

export default Videos

const sx = {
	root: {
		width: '100%',
	},
}
