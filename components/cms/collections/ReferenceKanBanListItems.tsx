import React, { useContext, useEffect, useState } from 'react'
import { CollectionListProps } from '../collections/CollectionList'
import { ReferenceCollectionKanBanCard, KanBanBoard } from '../../../components'
import { ResourceContext } from 'frontend-js'
import { useResourceContext, changeDocumentValue } from 'frontend-js'
import { useForms } from '../../../hooks'
import { groupResourcesByField } from '../../../helpers'

export type KanBanListItemsProps = CollectionListProps & {
	headers: {
		label: string
		value: string
	}[]
  component?: React.ReactNode
	enableSharing?: boolean
	enableCreate?: boolean
}

const ReferenceKanBanListItems: React.FC<KanBanListItemsProps> = (props) => {
	const {
		headers,
		displayFields = [],
		buttons = [],
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
    slots: defaultSlots = {
      item: {},
      list: {},
    },
		...rest
	} = props

	const fieldName = 'status' //Hard code the field as status

	const {
		loading,
		resources,
		update,
    updateMany,
		updatePositions,
		setResource,
		reloadMany,
		setOpenShow,
	} = useResourceContext()

	const handleClick = (reference) => {
    const resource = reference?.target
		setResource(resource)
		setOpenShow(true)
	}

	const { handleEdit, handleDeleteClick } = useForms()

	const { setOpenEdit } = useContext(ResourceContext) as any

	const handleAdd = (header) => {
		setResource({
			status: header,
		})
		setOpenEdit(true)
	}

	const handleDrop = async (movedItem, value, columns) => {
		setResource(null)
		let movedDocument = changeDocumentValue(movedItem, fieldName, value)
    await updateMany([movedDocument?.id], { [fieldName]: value } )

		let columnItems = Object.keys(columns).map((key) => columns[key])
		columnItems = columnItems.reduce((acc, val) => acc.concat(val), [])
		columnItems = columnItems.map((item, index) => {
			return {
				...item,
				position: index,
			}
		})
		updatePositions(columnItems)
	}

	const [columns, setColumns] = useState({})

	const handleGroupResources = (resources, fieldName) => {
		let sortedResources = resources.sort((a, b) => a.position - b.position)
		let allowedOptions = headers.map((header) => header.value)
		let grouped = groupResourcesByField(
			sortedResources,
			fieldName,
			allowedOptions
		)
		setColumns(grouped)
	}

	useEffect(() => {
		if (resources) {
			handleGroupResources(resources, fieldName)
		}
	}, [resources, fieldName, headers])

	const slots = {
		list: {
			enableOverlay,
			enableGradient,
			buttons,
			displayFields,
			enableComments,
			enableFavorites,
			enableLikes,
			enableRatings,
      ...defaultSlots.list,
		},
		item: {      
			enableOverlay,
			enableGradient,
			buttons,
			displayFields,
			enableComments,
			enableFavorites,
			enableLikes,
			enableRatings,
      ...defaultSlots.item,
		},
	}

	if (!headers || !fieldName || Object.keys(columns)?.length == 0) return null
	return (
		<KanBanBoard
			loading={loading}
			columns={columns}
			headers={headers}
			handleClick={handleClick}
			handleDrop={handleDrop}
			enableEdit={enableEdit}
			enableDelete={enableEdit}
			enableCreate={enableCreate}
			handleEdit={handleEdit}
			handleDelete={handleDeleteClick}
			handleAdd={handleAdd}			
			component={ ReferenceCollectionKanBanCard }
      slots={slots}
		/>
	)
}

export default ReferenceKanBanListItems
