import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { useResource } from 'frontend-js'
import { useRouter } from 'next/router'
import {
	Drawer,
	LoadMore,
	CollectionList,
	Form,
	IconLoading,
	AlertModal,
	Icon,
} from '../../../components'
import { Stack, Collapse, Button, Box } from '@mui/material'
import { SYSTEM_FIELDS } from '../../../constants'
import { FieldType } from '../../../types'
import { flattenDocument } from '../../../helpers'

export type ForeignCollectionProps = {
	variant?: 'list' | 'grid'
	style?: 'card' | 'avatar' | 'cover'
	field: any
	fields: FieldType[]
	resource: any
	url: string
	layout?: 'drawer' | 'inline'
	handle: string
	foreignContentType?: string
	navigateUrl?: any
	foreignUrl?: string
	perPage?: number
	query?: any
	buttonText?: string
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
	enableLoadMore?: boolean
}

const ForeignCollection: React.FC<ForeignCollectionProps> = (props) => {
	const {
		field,
		fields,
		resource,
		layout = 'drawer',
		variant = 'list',
		style = 'card',
		url,
		foreignUrl,
		foreignContentType,
		navigateUrl,
		perPage = 10,
		buttonText,
		query: defaultQuery = null,
		enableBorder = false,
		enableGradient = false,
		enableLoadMore = true,
		enableCreate = false,
		enableEdit = false,
		enableDelete = false,
	} = props

	const router = useRouter()

	const [openModal, setOpenModal] = useState(false)
	const [openDeleteModal, setOpenDeleteModal] = useState(false)
	const { clientUrl } = useContext(AppContext)

	const {
		query,
		resources,
		page,
		numPages,
		loadMore,
		reloadMany,
		findLinks,
		addLinks,
	} = useResource({
		name: 'document',
		url,
	})

	const {
		errors,
		loading,
		delayedLoading,
		resource: _resource,
		setResource,
		update,
		create,
		destroy,
		removeAttachment,
	} = useResource({
		name: 'document',
		url: foreignUrl,
	})

	const handleClick = (item) => {
		if (clientUrl && navigateUrl && item?.handle) {
			router.push(`${clientUrl}${navigateUrl}/${item?.handle}`)
		}
	}

	const handleDataChange = (ev) => {
		const { name } = ev.target
		const value =
			ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
		if (SYSTEM_FIELDS.includes(name)) {
			setResource((prev) => ({
				...prev,
				[name]: value,
			}))
		} else {
			setResource((prev) => ({
				...prev,
				data: {
					...prev.data,
					[name]: value,
				},
			}))
		}
	}

	const handleAdd = () => {
		setResource({})
		setOpenModal(!openModal)
	}

	const handleEdit = (item) => {
		setResource(item)
		setOpenModal(true)
	}

	const handleSubmit = async () => {
		try {
			let resp
			if (_resource?.id) {
				resp = await update(_resource)
			} else {
				resp = await create(_resource)
				if (resp?.id) {
					await addLinks(resource?.handle, [resp.id])
					handleFetchResources()
				}
			}
			if (resp?.id) {
				handleFetchResources()
				setResource({})
				setOpenModal(false)
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleDeleteClick = (item) => {
		setResource(item)
		setOpenDeleteModal(true)
	}

	const handleDelete = async () => {
		await destroy(_resource?.id)
		setOpenDeleteModal(false)
		setOpenModal(false)
		handleFetchResources()
	}

	const handleRemove = async (name) => {
		await removeAttachment(_resource?.id, name)
	}

	const handleFetchResources = async () => {
		findLinks(resource.id, foreignContentType, {
			...query,
			...defaultQuery,
			per_page: perPage,
			page: 1,
		})
	}

	useEffect(() => {
		if (resource?.id && foreignContentType) {
			handleFetchResources()
		}
	}, [resource, foreignContentType])

	return (
		<Stack direction="column" spacing={1} sx={sx.root}>
			{enableCreate && (
				<Box>
					<Button
						color="secondary"
						variant="contained"
						onClick={handleAdd}
						startIcon={<Icon name="Plus" size={20} />}
					>
						Add
					</Button>
				</Box>
			)}
			{layout == 'inline' && (
				<Collapse in={openModal}>
					<Stack direction="column" sx={sx.form} spacing={1}>
						<Form
							loading={loading}
							errors={errors}
							fields={fields}
							resource={flattenDocument(_resource)}
							handleChange={handleDataChange}
							handleRemove={handleRemove}
						/>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							onClick={handleSubmit}
							startIcon={<IconLoading loading={delayedLoading} />}
						>
							{_resource?.id ? 'Update' : 'Save'}
						</Button>
					</Stack>
				</Collapse>
			)}
			<CollectionList
				variant={variant}
				style={style}
				resources={resources}
				handleClick={handleClick}
				buttonText={buttonText}
				enableBorder={enableBorder}
				enableGradient={enableGradient}
				enableEdit={enableEdit}
				enableCreate={enableCreate}
				enableDelete={enableDelete}
				handleEdit={handleEdit}
				handleDelete={handleDeleteClick}
			/>
			{enableLoadMore && (
				<LoadMore page={page} numPages={numPages} loadMore={loadMore} />
			)}
			{layout == 'drawer' && (
				<Drawer
					open={openModal}
					handleClose={() => setOpenModal(false)}
					title={_resource?.id ? 'Edit' : 'Add'}
					actions={
						<Button
							fullWidth
							variant="contained"
							color="primary"
							onClick={handleSubmit}
							startIcon={<IconLoading loading={loading} />}
						>
							{_resource?.id ? 'Update' : 'Save'}
						</Button>
					}
				>
					<Form
						loading={loading}
						errors={errors}
						fields={fields}
						resource={flattenDocument(_resource)}
						handleChange={handleDataChange}
						handleRemove={handleRemove}
					/>
				</Drawer>
			)}

			<AlertModal
				open={openDeleteModal}
				handleClose={() => setOpenDeleteModal(false)}
				title="Are you sure you want to delete this item?"
				description="This action cannot be reversed."
				handleConfirm={handleDelete}
			/>
		</Stack>
	)
}

export default ForeignCollection

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},
	item: {
		p: 2,
	},
	form: {
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		p: 2,
		bgcolor: 'secondary.light',
	},
}
