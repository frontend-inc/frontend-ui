import React, { useState, useEffect } from 'react'
import { useDocuments } from '../../../../hooks'
import { SortableList } from '../../../../components'
import { Box, Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import DocumentList from './DocumentList'
import DocumentEdit from './DocumentEdit'
import ReferenceItem from './ReferenceItem'
import { filterReferences } from '../../../../helpers'

type ReferenceInputProps = {
	field: any
	document: any
	collection: any
	handleAddReferences: (resources: any[]) => void
	handleRemoveReferences: (resources: any[]) => void
	enableMultipleSelect?: boolean
}

const ReferenceInput: React.FC<ReferenceInputProps> = (props) => {
	const {
		field,
		document,
		collection,
		handleAddReferences,
		handleRemoveReferences,
		enableMultipleSelect = false,
	} = props

	const [resources, setResources] = useState()
	const [open, setOpen] = useState(false)
	const [openEdit, setOpenEdit] = useState(false)
	const [foreignDocument, setForeignDocument] = useState<any>({})

	const { updateReferencePositions } = useDocuments({
		collection: collection?.name,
	})

	const handleSubmit = async (resources) => {
		const resourceIds = resources.map((resource) => resource?.id)
		await handleAddReferences(resourceIds)
		setOpen(false)
	}

	const handleAddClick = () => {
		setForeignDocument({})
		setOpenEdit(true)
	}

	const handleEdit = (resource) => {
		setForeignDocument(resource)
		setOpenEdit(true)
	}

	const handleRemove = async (resource) => {
		await handleRemoveReferences([resource?.target_id])
		setOpen(false)
	}

	const handleDrop = async (sorted) => {
		let sortedReferences = sorted.map((reference, index) => ({
			...reference,
			position: index,
		}))
		updateReferencePositions(document?.id, sortedReferences)
	}

	useEffect(() => {
		if (field && document) {
			if (field?.variant == 'habtm') {
				let references = filterReferences(
					document,
					field?.foreign_collection?.class_name
				)
				setResources(references || [])
			}
		}
	}, [field, document])

	return (
		<Box>
			{resources && field && (
				<SortableList
					droppableId={'sortable-documents'}
					items={resources}
					handleDrop={handleDrop}
					renderItem={(item, idx) => (
						<ReferenceItem
							key={idx}
							item={item}
							handleEditItem={handleEdit}
							handleRemoveItem={handleRemove}
						/>
					)}
				/>
			)}
			<Box sx={sx.buttons}>
				<Button
					color="secondary"
					variant="contained"
					onClick={() => setOpen(true)}
					startIcon={<Search />}
				>
					Choose {field?.foreign_collection?.plural_name}
				</Button>
				<Button color="secondary" variant="contained" onClick={handleAddClick}>
					Add {field?.foreign_collection?.singular_name}
				</Button>
			</Box>
			<DocumentList
				enableMultipleSelect={enableMultipleSelect}
				open={open}
				field={field}
				handleSubmit={handleSubmit}
				handleClose={() => setOpen(false)}
			/>
			<DocumentEdit
				open={openEdit}
				handleClose={() => setOpenEdit(false)}
				handleSubmit={handleSubmit}
				documentId={foreignDocument?.id}
				collectionId={field?.foreign_collection?.name}
			/>
		</Box>
	)
}

export default ReferenceInput

const sx = {
	root: {
		height: '100%',
	},
	icon: {
		color: 'icon',
	},
	content: {
		overflow: 'hidden',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		gap: '5px',
	},
}
