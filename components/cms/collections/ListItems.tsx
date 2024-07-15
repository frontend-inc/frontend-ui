import React, { useEffect, useContext } from 'react'
import { Stack } from '@mui/material'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import {
	ShowModal,
	ListCards,
	Placeholder,
} from '../..'
import { useForms } from '../../../hooks'
import { ActionType, DisplayFieldType } from '../../../types'

export type ListItemsProps = {
	url: string
	href?: string
	style: 'list' | 'avatar' | 'card' | 'cover' | 'text'
	actions: ActionType[]
	displayFields: DisplayFieldType[]
	handleClick?: (resource: any) => void
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
	enableSharing?: boolean
	enableUsers?: boolean
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const ListItems: React.FC<ListItemsProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

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
		actions = [],
		style = 'card',
		href,
		displayFields = [],
		enableGradient = false,
		enableOverlay = false,
		enableEdit = false,
		enableDelete = false,
		enableFavorites = false,
		enableLikes = false,
		enableUsers = false,
		enableRatings = false,
		enableComments = false,
		emptyIcon,
		emptyTitle = 'No results found',
		emptyDescription = 'Try changing your search or filters.',
		...rest
	} = props

	const handleNavigate = (resource) => {
		if (href) {
			if (clientUrl && href && resource?.handle) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
				router.push(`${clientUrl}${href}/${resource?.handle}`)
			}
		} else {
			setResource(resource)
			setOpenShow(true)
		}
	}

	const { handleClick = handleNavigate } = props

	const { handleEdit, handleDeleteClick } = useForms()

	return (
		<>
			<Stack direction="column" spacing={2}>
				<ListCards
					actions={actions}
					style={style}
					resources={resources}
					displayFields={displayFields}
					handleClick={handleClick}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
					enableEdit={enableEdit}
					enableDelete={enableDelete}
					enableUsers={enableUsers}
					enableFavorites={enableFavorites}
          enableLikes={enableLikes}
					enableRatings={enableRatings}
					enableComments={enableComments}
					handleEdit={handleEdit}
					handleDelete={handleDeleteClick}
					{...rest}
				/>
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
			<ShowModal
				open={openShow}
				handleClose={() => setOpenShow(false)}
				actions={actions}
				displayFields={displayFields}
				enableOverlay={enableOverlay}
				enableFavorites={enableFavorites}
				enableLikes={enableLikes}
				enableRatings={enableRatings}
				enableComments={enableComments}
				enableUsers={enableUsers}
				enableEdit={enableEdit}
				handleEdit={() => handleEdit(resource)}
			/>
		</>
	)
}

export default ListItems
