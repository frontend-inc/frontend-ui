import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { MenuList, AlertModal, SecondaryButton } from '../../../components'
import { MenuListItem } from '../../../components'
import { useCollections, useViews } from '../../../hooks'
import AdminCollectionEdit from './AdminCollectionEdit'
import AdminViewEdit from '../views/AdminViewEdit'
import { ApiQuery } from 'frontend-js'
import { RouterParams } from '../../../types'
import { useRouter } from 'next/router'

const AdminCollectionMenu: React.FC = () => {
	const router = useRouter()
	const {
		app_id: appId,
		view_id: viewId,
		collection_id: collectionId,
	} = router.query as RouterParams

	const apiQuery = new ApiQuery()

	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [showViewModal, setShowViewModal] = useState(false)
	const [showDeleteViewModal, setShowDeleteViewModal] = useState(false)

	const {
		loading,
		errors,
		collection,
		collections,
		deleteCollection,
		findCollections,
		setCollection,
		handleChange,
		updateCollection,
		createCollection,
		reloadCollections,
	} = useCollections()

	const {
		loading: viewLoading,
		errors: viewErrors,
		view,
		views,
		findViews,
		updateView,
		deleteView,
		handleChange: handleChangeView,
		setView,
	} = useViews()

	useEffect(() => {
		if (collectionId == 'index' && collections.length > 0) {
			handleClick(collections[0])
		}
	}, [collectionId, collections])

	const [activeCollection, setActiveCollection] = useState(null)

	const [showModal, setShowModal] = useState(false)

	const handleClick = async (collection) => {
		router.push(`/admin/${appId}/collections/${collection?.name}`)
	}

	const handleEditCollectionClick = (collection) => {
		setCollection(collection)
		setShowModal(true)
	}

	const handleCreateCollectionClick = () => {
		setCollection({})
		setShowModal(true)
	}

	const handleSubmitCollection = async () => {
		let resp
		if (collection?.id) {
			resp = await updateCollection(collection)
		} else {
			resp = await createCollection(collection)
		}
		if (resp?.id) {
			reloadCollections()
			router.push(`/admin/${appId}/collections/${resp?.name}`)
			setCollection({})
			setShowModal(false)
		}
	}

	const handleDeleteCollectionClick = (collection) => {
		setActiveCollection(collection)
		setShowDeleteModal(true)
	}

	const handleDeleteCollection = async () => {
		try {
			await deleteCollection(activeCollection.id)
			setShowDeleteModal(false)
			setCollection({})
			findCollections()
		} catch (e) {
			console.log(e)
		}
	}

	const handleTemplateClick = (template) => {
		setCollection({
			...collection,
			template,
		})
	}

	const handleViewClick = async (view) => {
		apiQuery.where(view?.query)
		router.push(
			`/admin/${appId}/collections/${
				view?.collection?.name
			}?${apiQuery.url()}&view_id=${view?.id}`
		)
	}

	const handleEditView = (view) => {
		setView(view)
		setShowViewModal(true)
	}

	const handleUpdateView = async () => {
		try {
			let resp = await updateView(view)
			if (resp?.id) {
				setShowViewModal(false)
				findViews()
				setView({})
			}
		} catch (e) {
			console.log(e)
		}
	}

	const handleDeleteViewClick = (view) => {
		setView(view)
		setShowDeleteViewModal(true)
	}

	const handleDeleteView = async () => {
		try {
			await deleteView(view.id)
			setShowDeleteViewModal(false)
			setView({})
			findViews()
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (appId) {
			findCollections()
			findViews()
		}
	}, [appId])

	useEffect(() => {
		// Reload views after creating a new view
		if (viewId) {
			findViews()
		}
	}, [viewId])

	useEffect(() => {
		if (!collection?.collection_type) {
			setCollection({
				...collection,
				collection_type: 'post',
			})
		}
	}, [collection])

	return (
		<Box sx={sx.root}>
			<MenuList label={'Collections'}>
				{collections.map((collection) => (
					<MenuListItem
						key={collection.id}
						title={collection?.label}
						icon="Database"
						selected={!viewId && collectionId == collection?.name}
						handleClick={() => handleClick(collection)}
						handleEdit={() => handleEditCollectionClick(collection)}
						handleDelete={() => handleDeleteCollectionClick(collection)}
					/>
				))}
			</MenuList>
			<Box sx={sx.buttonContainer}>
				<SecondaryButton
					onClick={handleCreateCollectionClick}
					color="secondary"
					variant="contained"
          icon="Plus"					
				>
					Collection
				</SecondaryButton>
			</Box>
			{views.length > 0 && (
				<MenuList label="Views" enableBorder>
					{views?.map((view) => (
						<MenuListItem
							key={view.id}
							title={view?.name}
							selected={viewId == view?.id}
							icon="Search"
							handleClick={() => handleViewClick(view)}
							handleDelete={() => handleDeleteViewClick(view)}
							handleEdit={() => handleEditView(view)}
						/>
					))}
				</MenuList>
			)}
			<AdminCollectionEdit
				errors={errors}
				loading={loading}
				open={showModal}
				collection={collection}
				handleClose={() => setShowModal(false)}
				handleChange={handleChange}
				handleSubmit={handleSubmitCollection}
				handleTemplateClick={handleTemplateClick}
			/>
			<AdminViewEdit
				loading={viewLoading}
				errors={viewErrors}
				open={showViewModal}
				handleClose={() => setShowViewModal(false)}
				view={view}
				handleSubmit={handleUpdateView}
				handleChange={handleChangeView}
			/>
			<AlertModal
				loading={viewLoading}
				open={showDeleteViewModal}
				title="Delete view"
				description="Are you sure you want to delete this view?"
				handleClose={() => setShowDeleteViewModal(false)}
				handleConfirm={handleDeleteView}
			/>
			<AlertModal
				loading={loading}
				open={showDeleteModal}
				handleClose={() => setShowDeleteModal(false)}
				handleConfirm={handleDeleteCollection}
			/>
		</Box>
	)
}

export default AdminCollectionMenu

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	buttonContainer: {
		mt: 0,
		mx: 2,
		mb: 2,
	},
}
