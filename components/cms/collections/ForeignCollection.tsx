import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { useResource, useDocuments } from 'frontend-js'
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
import { FormFieldType } from '../../../types'
import { flattenDocument } from '../../../helpers'

export type ForeignCollectionProps = {
	variant?: 'list' | 'grid'
	style?: 'card' | 'avatar' | 'cover'
	field: any
	fields: FormFieldType[]
	resource: any
	layout?: 'drawer' | 'inline'
	handle: string
	contentType: string
	foreignContentType?: string
	navigateUrl?: any
	perPage?: number
	query?: any
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
	enableLoadMore?: boolean
}

const ForeignCollection: React.FC<ForeignCollectionProps> = (props) => {
	const {
		fields,
		resource: __resource,
		layout = 'drawer',
		variant = 'list',
		style = 'card',
		contentType,
		foreignContentType,
		navigateUrl,
		perPage = 10,
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
		resource: _resource,
		resources: _resources,
		setResource: _setResource,
		page,
		numPages,
		loadMore,
		findLinks,
		addLinks,
	} = useDocuments({
		collection: contentType,
	})

  // Isolate the useDocuments hook to avoid conflicts
  // with resources 
  const {
		findMany,
	} = useDocuments({
		collection: contentType,
	})

	const {
		errors,
		loading,
		delayedLoading,
		resource,
		setResource,
		update,
		create,
		destroy,
		handleDataChange,
		removeAttachment,
	} = useDocuments({
		collection: foreignContentType,
	})

	const handleClick = (item) => {
		if (clientUrl && navigateUrl && item?.handle) {
			router.push(`${clientUrl}${navigateUrl}/${item?.handle}`)
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
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
				if (resp?.id) {
					await addLinks(_resource?.handle, [resp.id])
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
		if (resource?.id) {
			await destroy(resource?.id)
			setOpenDeleteModal(false)
			setOpenModal(false)
			handleFetchResources()
		}
	}

	const handleRemove = async (name) => {
		if (resource?.id) {
			await removeAttachment(resource?.id, name)
		}
	}

	const handleFetchResources = async () => {
    if(_resource?.id && foreignContentType) {
      console.log("ForeignCollection", _resource.id, foreignContentType)
      findLinks(_resource.id, foreignContentType, {
        ...query,
        ...defaultQuery,
        per_page: perPage,
        page: 1,
      })
    }
	}

	useEffect(() => {
		if (_resource?.id && foreignContentType) {
			handleFetchResources()
		}
	}, [_resource?.id, foreignContentType])

	const handleFetchResource = async () => {
		let searchQuery = {
			page: 1,
			per_page: 1,
		}
		let resp = await findMany(searchQuery)
		if (resp?.length > 0) {
			_setResource(resp[0])
		}
	}

	useEffect(() => {
		if (__resource?.id) {
			_setResource(__resource)
		} else {
			if (contentType) {
				handleFetchResource()
			}
		}
	}, [__resource, contentType])

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
							resource={flattenDocument(resource)}
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
							{resource?.id ? 'Update' : 'Save'}
						</Button>
					</Stack>
				</Collapse>
			)}
			<CollectionList
				actions={[]}
				variant={variant}
				style={style}
				resources={_resources}
				handleClick={handleClick}
				enableBorder={enableBorder}
				enableGradient={enableGradient}
				enableEdit={enableEdit}
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
