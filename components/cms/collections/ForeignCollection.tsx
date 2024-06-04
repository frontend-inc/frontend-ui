import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { useDocuments } from 'frontend-js'
import { useRouter } from 'next/router'
import {
	Drawer,
	LoadMore,
	CollectionCards,
	Form,
	IconLoading,
	AlertModal,
	Icon,
  Placeholder
} from '../../../components'
import { Stack, Button, Box } from '@mui/material'
import { FormFieldType } from '../../../types'
import { flattenDocument } from '../../../helpers'
import { useAuth } from 'frontend-js'

export type ForeignCollectionProps = {
	variant?: 'list' | 'grid'
	style?: 'card' | 'avatar' | 'cover'
	field: any
	fields: FormFieldType[]
	resource: any	
	handle: string
	url: string
  foreignUrl: string
	href?: any
	perPage?: number
	query?: any
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
  enableFavorites?: boolean
	enableLoadMore?: boolean
}

const ForeignCollection: React.FC<ForeignCollectionProps> = (props) => {
  const { setAuthOpen } = useContext(AppContext)
  const { currentUser } = useAuth()

	const {
		fields,
		resource: _resource,		
		variant = 'list',
		style = 'card',
		url,
    foreignUrl,
		href,
		perPage = 10,
		query: defaultQuery = null,
		enableBorder = false,
		enableGradient = false,
		enableLoadMore = true,
		enableCreate = false,
		enableEdit = false,
		enableDelete = false,
    enableFavorites = false
	} = props

	const router = useRouter()

	const [openModal, setOpenModal] = useState(false)
	const [openDeleteModal, setOpenDeleteModal] = useState(false)
	const { clientUrl } = useContext(AppContext)

	const { query, resources, page, numPages, loadMore, findLinks, addLinks } =
		useDocuments({
			url
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
		url: foreignUrl,
	})

	const handleClick = (item) => {
		if (clientUrl && href && item?.handle) {
			router.push(`${clientUrl}${href}/${item?.handle}`)
		}
	}

	const handleAdd = () => {
    if(!currentUser?.id) return setAuthOpen(true);
		setResource({})
		setOpenModal(!openModal)
	}

	const handleEdit = (item) => {
    if(!currentUser?.id) return setAuthOpen(true);
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
					await addLinks(_resource?.id, [resp.id])
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
    if(!currentUser?.id) return setAuthOpen(true);
		setResource(item)
		setOpenDeleteModal(true)
	}

	const handleDelete = async () => {
    if(!currentUser?.id) return setAuthOpen(true);
		if (resource?.id) {
			await destroy(resource?.id)
			setOpenDeleteModal(false)
			setOpenModal(false)
			handleFetchResources()
		}
	}

	const handleRemove = async (name) => {
    if(!currentUser?.id) return setAuthOpen(true);
		if (resource?.id) {
			await removeAttachment(resource?.id, name)
		}
	}

	const handleFetchResources = async () => {
		if (_resource?.id && foreignUrl) {
			findLinks(_resource.id, foreignUrl, {
				...query,
				...defaultQuery,
				per_page: perPage,
				page: 1,
			})
		}
	}

	useEffect(() => {
		if (_resource?.id && foreignUrl) {
			handleFetchResources()
		}
	}, [_resource?.id, foreignUrl, currentUser?.id])

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
			<CollectionCards
				actions={[]}
				variant={variant}
				style={style}
				resources={resources}
				handleClick={handleClick}
        enableFavorites={enableFavorites}
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
      {!loading && resources.length == 0 && (
        <Placeholder
          icon="Search"
          title="No results found"
          description="Try adjusting your search or filters"
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
