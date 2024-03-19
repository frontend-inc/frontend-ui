import React, { useEffect } from 'react'
import { useResource } from 'frontend-js'
import { Stack } from '@mui/material'
import { Icon, GridView, ListView, Placeholder } from '../..'
import VideoVert from './VideoVert'
import VideoHoriz from './VideoHoriz'
import VideoStory from './VideoStory'
import { Typography } from '@mui/material'

type VideosProps = {
	title?: string
	url: string
	layout: 'list' | 'grid' | 'carousel'
	style: 'cover' | 'story'
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
		layout = 'grid',
		style = 'vert',
		url,
		query: defaultQuery = {},
		perPage = 20,
		editing,
		enableOverlay,
		enableGradient,
		enableBorder,
	} = props

	const { loading, findMany, resources } = useResource({
		url,
	})

	const handleClick = () => null

	const COMPONENTS = {
		grid: {
			cover: VideoVert,
			story: VideoStory,
		},
		carousel: {
			cover: VideoVert,
			story: VideoStory,
		},
		list: {
			cover: VideoHoriz,
			story: VideoStory,
		},
	}

	let component = COMPONENTS[layout][style] || VideoVert

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
			{layout == 'grid' && (
				<GridView
					editing={editing}
					loading={loading}
					items={resources}
					component={component}
					enableBorder={enableBorder}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
					handleClick={handleClick}
				/>
			)}
			{layout == 'list' && (
				<ListView
					spacing={2}
					editing={editing}
					items={resources}
					component={component}
					enableBorder={enableBorder}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
					handleClick={handleClick}
				/>
			)}
			{layout == 'carousel' && (
				<ListView
					flexDirection="row"
					justifyContent="center"
					spacing={4}
					editing={editing}
					items={resources}
					component={component}
					enableBorder={enableBorder}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
					handleClick={handleClick}
				/>
			)}
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
