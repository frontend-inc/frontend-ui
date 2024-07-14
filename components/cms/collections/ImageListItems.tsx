import React from 'react'
import { Grid, Stack } from '@mui/material'
import { LoadMore } from '../..'
import { useList } from 'frontend-js'
import {
  ImageCard,
	ShowImageModal,
	Placeholder,
} from '../..'
import { useForms } from '../../../hooks'

export type ListItemsImageProps = {
	url: string
	enableGradient?: boolean
	enableOverlay?: boolean
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

const ImageListItems: React.FC<ListItemsImageProps> = (props) => {

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
	} = useList()

	const {
		enableGradient = false,
		enableOverlay = false,
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
        <Grid container spacing={1}>          
        { resources?.map(resource => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ImageCard 
              key={ resource.id }
              resource={resource}
              enableEdit={enableEdit}
              enableDelete={enableDelete}
              enableOverlay={enableOverlay}
              enableGradient={enableGradient}
              enableUsers={enableUsers}
              enableFavorites={enableFavorites}
              enableComments={enableComments}
              handleClick={() => handleClick(resource)}
              handleDelete={() => handleDeleteClick(resource)}
            />
          </Grid>
        ))}	
        </Grid>		
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
			<ShowImageModal
				open={openShow}
				handleClose={() => setOpenShow(false)}				
        enableGradient={enableGradient}
			/>
		</>
	)
}

export default ImageListItems
