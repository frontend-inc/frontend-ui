import React from 'react'
import { Stack } from '@mui/material'
import { LoadMore, DataLayout } from '../..'
import { useResourceContext } from 'frontend-js'
import { ImageCard, Placeholder } from '../..'
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
		setResource,
		loading,
		resources,
		page,
		numPages,
		loadMore,
		setOpenShow,
	} = useResourceContext()

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

	const { handleDeleteClick } = useForms()

	return (
		<>
			<Stack direction="column" spacing={2}>
				<DataLayout grid>
					{resources?.map((resource) => (
						<ImageCard
							key={resource.id}
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
					))}
				</DataLayout>
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
		</>
	)
}

export default ImageListItems
