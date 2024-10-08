import React from 'react'
import { Stack } from '../../../tailwind'
import { LoadMore, DataLayout } from '../..'
import { useResourceContext } from 'frontend-js'
import { VideoCard } from '../..'

export type VideoListItemsProps = {
	url: string
	enableEdit?: boolean
	enableDelete?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
}

const VideoListItems: React.FC<VideoListItemsProps> = (props) => {
	const { setResource, resources, page, numPages, loadMore, setOpenShow } =
		useResourceContext()

	const {
		enableEdit = false,
		enableDelete = false,
		enableFavorites = false,
		enableLikes = false,
		enableComments = false,
		enableGradient = false,
		enableOverlay = false,
		...rest
	} = props

	const handleClick = (resource) => {
		setResource(resource)
		setOpenShow(true)
	}

	return (
		<Stack direction="column" spacing={2}>
			<DataLayout grid>
				{resources?.map((resource) => (
					<VideoCard
						key={resource.id}
						image={resource?.image?.url}
						primary={resource?.title}
						slots={{
							image: {
								enableGradient,
								enableOverlay,
							},
						}}
						handleClick={() => handleClick(resource)}
					/>
				))}
			</DataLayout>
			<LoadMore page={page} numPages={numPages} handlePaginate={loadMore} />
		</Stack>
	)
}

export default VideoListItems
