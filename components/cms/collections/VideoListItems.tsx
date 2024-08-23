import React from 'react'
import { Stack } from '@mui/material'
import { ButtonActions, LoadMore, DataLayout } from '../..'
import { useResourceContext } from 'frontend-js'
import { VideoCard } from '../..'
import { useForms } from '../../../hooks'
import { buildActions } from '../../../helpers'

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
	enableUsers?: boolean
}

const VideoListItems: React.FC<VideoListItemsProps> = (props) => {
	const { setResource, resources, page, numPages, loadMore, setOpenShow } =
		useResourceContext()

	const {
		enableEdit = false,
		enableDelete = false,
		enableFavorites = false,
		enableLikes = false,
		enableUsers = false,
		enableComments = false,
		enableGradient = false,
		enableOverlay = false,
		...rest
	} = props

	const handleClick = (resource) => {
		setResource(resource)
		setOpenShow(true)
	}

	const { handleEdit, handleDeleteClick } = useForms()

	return (
		<Stack direction="column" spacing={2}>
			<DataLayout grid>
				{resources?.map((resource) => (
					<VideoCard
						key={resource.id}
						image={resource?.image?.url}
						primary={resource?.title}
						secondaryAction={
							<ButtonActions
								numVisible={0}
								resource={resource}
								buttons={buildActions({
									enableEdit,
									enableDelete,
									handleEdit: () => handleEdit(resource),
									handleDelete: () => handleDeleteClick(resource),
								})}
							/>
						}
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
			<LoadMore 
        page={page} 
        numPages={numPages} 
        handlePaginate={loadMore} 
      />
		</Stack>
	)
}

export default VideoListItems
