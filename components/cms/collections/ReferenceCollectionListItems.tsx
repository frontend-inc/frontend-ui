import React, { useContext } from 'react'
import { Stack } from '@mui/material'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { useApp } from '../../../hooks'
import { useRouter } from 'next/router'
import { CollectionListItem, DataLayout } from '../..'
import { useForms } from '../../../hooks'
import { ButtonType, DisplayFieldType } from '../../../types'

export type ReferenceCollectionListItemsProps = {
	href?: string
	grid?: boolean
	style?: 'list' | 'avatar' | 'cover' | 'table' | 'text'
	buttons: ButtonType[]
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
	slots?: {
		list?: any
		item?: any
	}
}

const ReferenceCollectionListItems: React.FC<
	ReferenceCollectionListItemsProps
> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		loading,
		setResource,
		resources: references,
		page,
		numPages,
		loadMore,
		setOpenShow,
	} = useResourceContext()

	const {
		grid = false,
		buttons = [],
		style = 'card',
		href,
		handleClick,
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
		slots = {
			list: {},
			item: {},
		},
	} = props

	const handleShowClick = (target) => {
		if (handleClick) {
			handleClick(target)
		} else if (href) {
			if (clientUrl && href && target?.handle) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
				router.push(`${clientUrl}${href}/${target?.handle}`)
			}
		} else {
			setResource(target)
			setOpenShow(true)
		}
	}

	const { handleEdit, handleDeleteClick } = useForms()

	const handlePaginate = async () => {
		await loadMore()
	}

	return (
		<Stack direction="column" spacing={2}>
			<DataLayout {...slots.list} grid={grid}>
				{references?.map((reference, index) => {
					const target = reference?.target
					return (
						<CollectionListItem
							key={index}
							style={style}
							resource={target}
							displayFields={displayFields}
							handleClick={() => handleShowClick(target)}
							enableEdit={enableEdit}
							enableDelete={enableDelete}
							handleEdit={() => handleEdit(target)}
							handleDelete={() => handleDeleteClick(target)}
							buttons={buttons}
							enableUsers={enableUsers}
							enableComments={enableComments}
							enableFavorites={enableFavorites}
							enableLikes={enableLikes}
							enableRatings={enableRatings}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							{...slots.item}
						/>
					)
				})}
			</DataLayout>
			<LoadMore
				page={page}
				numPages={numPages}
				handlePaginate={handlePaginate}
			/>
		</Stack>
	)
}

export default ReferenceCollectionListItems
