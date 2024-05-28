import React, { useState, useEffect } from 'react'
import { Button, Stack } from '@mui/material'
import { ActionType, DisplayFieldType, FormFieldType } from '../../../types'
import Article from './Article'
import Item from './Item'
import Person from './Person'
import Document from './Document'
import Details from '../details/Details'
import YouTubeVideo from './addons/YouTubeVideo'
import VimeoEmbed from './addons/VimeoVideo'
import { Drawer, Form, IconLoading } from '../..'
import { useDocuments, flattenDocument } from 'frontend-js'

export type CollectionShowItemProps = {
	handle?: string
	enableBorder?: boolean
	actions: ActionType[]
	fieldName?: string
	contentType?: string
	resource: any
	enableEdit?: boolean
	enableCreate?: boolean
	handleEdit?: () => void
}

type CollectionShowStyleTypes =
	| 'item'
	| 'article'
	| 'person'
	| 'document'
	| 'youtube'
	| 'vimeo'

export type CollectionShowProps = CollectionShowItemProps & {
	fields: FormFieldType[]
	displayFields: DisplayFieldType[]
	url: string
	style: CollectionShowStyleTypes
}

const CollectionShow: React.FC<CollectionShowProps> = (props) => {
	let { handle } = props
	if (handle == 'index') handle = undefined

	const {
		style = 'item',
		resource: _resource,
		fields,
		fieldName,
		displayFields,
		url,
		contentType,
		actions,
		enableBorder,
		enableCreate,
		enableEdit,
	} = props || {}

	const {
		delayedLoading: loading,
		errors,
		update,
		create,
		resource,
		setResource,
		removeAttachment,
		handleDataChange,
	} = useDocuments({
		collection: contentType,
	})

	const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const [openModal, setOpenModal] = useState(false)

	const handleEdit = () => {
		setOpenModal(true)
	}

	const handleSubmit = async () => {
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
			}
			if (resp?.id) {
				setOpenModal(false)
			}
		} catch (e) {
			console.error(e)
		}
	}

	const components = {
		item: Item,
		article: Article,
		person: Person,
		document: Document,
		youtube: YouTubeVideo,
		vimeo: VimeoEmbed,
	}

	const Component = components[style]

	useEffect(() => {
		if (_resource?.id) {
			setResource(_resource)
		}
	}, [_resource])

	return (
		<Stack direction="column" spacing={2} sx={sx.root}>
			{resource?.id && (
				<Component
					fieldName={fieldName}
					resource={resource}
					actions={actions}
					enableBorder={enableBorder}
					enableEdit={enableEdit}
					handleEdit={handleEdit}
				/>
			)}
			{displayFields?.length > 0 && (
				<Details
					url={url}
					fields={displayFields}
					resource={resource}
					enableBorder={enableBorder}
				/>
			)}
			<Drawer
				open={openModal}
				handleClose={() => setOpenModal(false)}
				title={resource?.id ? 'Edit' : 'Add'}
				actions={
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
						startIcon={<IconLoading loading={loading} />}
					>
						{resource?.id ? 'Update' : 'Save'}
					</Button>
				}
			>
				<Form
					loading={loading}
					errors={errors}
					fields={fields}
					resource={flattenDocument(resource)}
					handleChange={handleDataChange}
					handleRemove={handleRemove}
				/>
			</Drawer>
		</Stack>
	)
}

export default CollectionShow

const sx = {
	root: {
		width: '100%',
	},
	inlineForm: {
		border: '1px solid',
		borderColor: 'divider',
		p: 4,
		width: '100%',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
}
