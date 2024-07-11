import React, { useContext, useEffect, useState } from 'react'
import { CollectionListProps } from './CollectionList'
import { KanBan } from '../..'
import { CollectionShowModal } from '../..'
import { CollectionContext } from 'frontend-js'
import { useCollection, changeDocumentValue } from 'frontend-js'
import { useForms } from '../../../hooks'

export type CollectionKanBanListProps = CollectionListProps & {
	headers: {
		label: string
		value: string
	}[]
	enableCreate?: boolean
}

const CollectionKanBanList: React.FC<CollectionKanBanListProps> = (props) => {
	const {
		headers,
		displayFields = [],
		actions = [],
		enableEdit,
		enableDelete,
		enableCreate,
		enableComments,
		enableFavorites,
		enableLikes,
		enableRatings,
		enableSharing,
		enableUsers,
		enableGradient,
		enableOverlay,
		...rest
	} = props

	const fieldName = 'status' //Hard code the field as status

	const {
		loading,
		resource,
		resources,
		update,
		updatePositions,
		setResource,
		reloadMany,
	} = useCollection()

	const [open, setOpen] = useState(false)

	const handleClick = (resource) => {
		setResource(resource)
		setOpen(true)
	}

	const handleComment = (resource) => {
		setResource(resource)
		setOpen(true)
	}

	const { handleEdit, handleDeleteClick } = useForms()

	const { setOpenEdit } = useContext(CollectionContext) as any

	const handleAdd = (header) => {
		setResource({
			status: header,
		})
		setOpenEdit(true)
	}

	const handleDrop = async (movedItem, value, columns) => {
		setResource(null)
		let movedDocument = changeDocumentValue(movedItem, fieldName, value)
		await update(movedDocument)

		let columnItems = Object.keys(columns).map((key) => columns[key])
		columnItems = columnItems.reduce((acc, val) => acc.concat(val), [])
		columnItems = columnItems.map((item, index) => {
			return {
				...item,
				position: index,
			}
		})
		await updatePositions(columnItems)
		await reloadMany()
	}

	if (!headers || !fieldName) return null
	return (
		<>
			<KanBan
				loading={loading}
				actions={actions}
				resources={resources}
				activeResource={resource}
				headers={headers}
				fieldName={fieldName}
				displayFields={displayFields}
				enableOverlay={enableOverlay}
				enableGradient={enableGradient}
				handleClick={handleClick}
				handleDrop={handleDrop}
				enableEdit={enableEdit}
				enableDelete={enableEdit}
				enableCreate={enableCreate}
				handleEdit={handleEdit}
				handleDelete={handleDeleteClick}
				handleAdd={handleAdd}
				enableComments={enableComments}
				enableFavorites={enableFavorites}
				enableRatings={enableRatings}
				handleComment={handleComment}
			/>
			<CollectionShowModal
				open={open}
				handleClose={() => setOpen(false)}
				actions={actions}
				displayFields={displayFields}
				enableOverlay={enableOverlay}
				enableEdit={enableEdit}
				enableComments={enableComments}
				enableFavorites={enableFavorites}
				enableRatings={enableRatings}
				handleEdit={() => handleEdit(resource)}
			/>
		</>
	)
}

export default CollectionKanBanList
