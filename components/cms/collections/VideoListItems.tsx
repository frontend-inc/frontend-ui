import React from 'react'
import { Grid, Stack } from '@mui/material'
import { LoadMore, ListLayout } from '../..'
import { useResourceContext } from 'frontend-js'
import {
  VideoCard,
	ShowVideoModal,
	Placeholder,
} from '../..'
import { useForms } from '../../../hooks'

export type VideoListItemsProps = {
	url: string
	enableEdit?: boolean
	enableDelete?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableUsers?: boolean
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const VideoListItems: React.FC<VideoListItemsProps> = (props) => {

	const {
		resource,
		setResource,
		loading,
		resources,
		page,
		numPages,
		loadMore,
		openShow,
		setOpenShow,
	} = useResourceContext()

	const {
		enableEdit = false,
		enableDelete = false,
		enableFavorites = false,
		enableLikes = false,
		enableUsers = false,
		enableComments = false,
		emptyIcon,
		emptyTitle = 'No results found',
		emptyDescription = 'Try changing your search or filters.',
		...rest
	} = props

	const handleClick = (resource) => {
    setResource(resource)
    setOpenShow(true)		
	}

	const { handleEdit, handleDeleteClick } = useForms()

	return (
    <>
			<Stack direction="column" spacing={2}>
        <ListLayout grid>          
          { resources?.map(resource => (          
            <VideoCard 
              key={ resource.id }
              resource={resource}
              enableEdit={enableEdit}
              enableDelete={enableDelete}
              enableUsers={enableUsers}
              enableFavorites={enableFavorites}
              enableComments={enableComments}
              handleClick={() => handleClick(resource)}
              handleDelete={() => handleDeleteClick(resource)}
            />
          ))}	
        </ListLayout>		
				<LoadMore page={page} numPages={numPages} loadMore={loadMore} />
			</Stack>
			{!loading && resources?.length == 0 && (
				<Placeholder
					enableBorder
					icon={emptyIcon}
					title={emptyTitle}
					description={emptyDescription}
				/>
			)}
			<ShowVideoModal
				open={openShow}
				handleClose={() => setOpenShow(false)}
			/>
		</>
	)
}

export default VideoListItems
