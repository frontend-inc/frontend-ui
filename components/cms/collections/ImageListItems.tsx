import React from 'react'
import { Stack } from '@mui/material'
import { LoadMore, DataLayout } from '../..'
import { useResourceContext } from 'frontend-js'
import {  ImageCard } from '../..'
import { useForms } from '../../../hooks'

export type ImageListItemsProps = {
	url: string
	enableGradient?: boolean
	enableOverlay?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const ImageListItems: React.FC<ImageListItemsProps> = (props) => {
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
		enableFavorites = false,
		enableLikes = false,
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
		<Stack direction="column" spacing={2}>
			<DataLayout grid>
				{resources?.map((resource) => (
					<ImageCard
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

export default ImageListItems
