import React, { useEffect } from 'react'
import { useResource } from 'frontend-js'
import { Stack } from '@mui/material'
import { CollectionList, Placeholder } from '../../../components'
import VideoVert from './VideoVert'
import VideoHoriz from './VideoHoriz'
import VideoStory from './VideoStory'
import { Typography } from '@mui/material'

type VideosProps = {
	title?: string
	url: string
	layout: 'list' | 'grid' 
	style: 'cover' 
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
      <CollectionList 
        layout={layout}
        style={style}
        loading={loading}
        resources={resources}
        component={component}
        enableBorder={enableBorder}
        enableGradient={enableGradient}
        enableOverlay={enableOverlay}
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
