import React, { useState, useEffect } from 'react'
import { ButtonType, DisplayFieldType } from '../../../types'
import { AuthGuard } from '../../../components'
import KanBanBoard from './KanBanBoard'
import { groupResourcesByField } from '../../../helpers/utils'

export type KanBanProps = {
	loading?: boolean
	resources: any
	activeResource: any
	fieldName: string
	headers: {
		label: string
		value: string
	}[]
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	handleDrop: (movedItem: any, overContainer: string, columns: any[]) => void
	handleClick: (resource: any) => void
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
	enableOverlay?: boolean
	enableGradient?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableCreate?: boolean
	handleEdit: (resource: any) => void
	handleDelete: (resource: any) => void
	handleAdd: (status: string) => void
}

const KanBan: React.FC<KanBanProps> = (props) => {
	const {
		loading,
		buttons,
		headers,
		fieldName,
		resources,
		activeResource,
		handleClick,
		handleDrop,
		displayFields = [],
		enableOverlay,
		enableGradient,
		enableComments,
		enableFavorites,
		enableLikes,
		enableRatings,
		enableEdit,
		enableDelete,
		enableCreate,
		handleEdit,
		handleDelete,
		handleAdd,
	} = props

	const [groupedResources, setGroupedResources] = useState({})

	const handleGroupResources = (resources, fieldName) => {
		let sortedResources = resources.sort((a, b) => a.position - b.position)
		let allowedOptions = headers.map((header) => header.value)
		let grouped = groupResourcesByField(
			sortedResources,
			fieldName,
			allowedOptions
		)
		setGroupedResources(grouped)
	}

	useEffect(() => {
		if (resources) {
			handleGroupResources(resources, fieldName)
		}
	}, [resources, fieldName, headers])

	if (Object.keys(groupedResources).length == 0) return null
	return (
		<AuthGuard requireAuth>
			<KanBanBoard
				loading={loading}
				buttons={buttons}
				headers={headers}
				columns={groupedResources}
				activeResource={activeResource}
				handleDrop={handleDrop}
				handleClick={handleClick}
				displayFields={displayFields}
				enableOverlay={enableOverlay}
				enableGradient={enableGradient}
				enableComments={enableComments}
				enableFavorites={enableFavorites}
				enableLikes={enableLikes}
				enableRatings={enableRatings}
				enableEdit={enableEdit}
				enableDelete={enableDelete}
				enableCreate={enableCreate}
				handleEdit={handleEdit}
				handleDelete={handleDelete}
				handleAdd={handleAdd}        
			/>
		</AuthGuard>
	)
}

export default KanBan
