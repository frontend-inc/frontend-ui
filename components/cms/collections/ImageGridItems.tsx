import React from 'react'
import { Stack } from '@mui/material'
import { LoadMore, DataLayout } from '../..'
import { useResourceContext } from 'frontend-js'
import { ButtonActions, ImageCard, Placeholder } from '../..'
import { useForms } from '../../../hooks'
import { buildActions } from '../../../helpers'

export type ImageGridItemsProps = {
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

const ImageGridItems: React.FC<ImageGridItemsProps> = (props) => {
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

	const { handleEdit, handleDeleteClick } = useForms()

	return (
		<Stack direction="column" spacing={2}>
			<DataLayout grid>
				{resources?.map((resource) => (
					<ImageCard
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
			<LoadMore page={page} numPages={numPages} handlePaginate={loadMore} />
		</Stack>
	)
}

export default ImageGridItems
