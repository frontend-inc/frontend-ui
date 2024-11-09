'use client'

import React, { useEffect, useState } from 'react'
import { MenuList, AlertModal } from '../../../components'
import { Button } from '../../../components/core'
import { MenuListItem, IconButton } from '../../../components'
import { useAdminCollections } from '../../../hooks'
import AdminCollectionEdit from './AdminCollectionEdit'
import { useRouter, useParams } from 'next/navigation'
import { Plus, Settings } from 'lucide-react'

const AdminCollectionMenu: React.FC = () => {
	const router = useRouter()
	const {
		app_id: appId,
		view_id: viewId,
		collection_id: collectionId,
	} = useParams() as any

	const [showDeleteModal, setShowDeleteModal] = useState(false)

	const {
		loading,
		errors,
		collection,
		collections,
		deleteCollection,
		findCollections,
		setCollection,
		setCollections,
		handleChange,
		updateCollection,
		createCollection,
		reloadCollections,
	} = useAdminCollections()

	useEffect(() => {
		if (collectionId == 'index' && collections.length > 0) {
			handleClick(collections[0])
		}
	}, [collectionId, collections])

	const [activeCollection, setActiveCollection] = useState(null)

	const [showModal, setShowModal] = useState(false)

	const handleClick = async (collection) => {
		router.push(`/dashboard/${appId}/collections/${collection?.name}`)
	}

	const handleSettingsClick = (collection) => {
		router.push(`/dashboard/${appId}/schema/${collection?.name}`)
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
			router.push(`/dashboard/${appId}/collections/${resp?.name}`)
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
			setCollection({})
			if (activeCollection) {
				//@ts-ignore
				await deleteCollection(activeCollection.id)
				//@ts-ignore
				setCollections(collections.filter((c) => c.id !== activeCollection.id))
				//@ts-ignore
				if (collectionId == activeCollection.name) {
					let nextCollection = collections.filter(
						//@ts-ignore
						(c) => c.name !== activeCollection.name
					)[0]
					router.push(`/dashboard/${appId}/collections/${nextCollection?.name}`)
				}
				setShowDeleteModal(false)
			}
		} catch (e) {
			console.log(e)
		}
	}

	const handleTemplateClick = (template) => {
		setCollection({
			...collection,
			name: collection.name || template.name,
			label: collection.label || template.label,
			document_type: template.document_type,
			template,
		})
	}

	useEffect(() => {
		if (appId) {
			findCollections()
		}
	}, [appId])

	return (
		<div className="flex flex-col">
			<MenuList label={'Collections'}>
				{collections.map((collection) => (
					<MenuListItem
						key={collection.id}
						title={collection?.label}
						selected={!viewId && collectionId == collection?.name}
						handleClick={() => handleClick(collection)}
						handleEdit={() => handleEditCollectionClick(collection)}
						handleDelete={() => handleDeleteCollectionClick(collection)}
						secondaryAction={
							<IconButton onClick={() => handleSettingsClick(collection)}>
								<Settings className="h-5 w-4" />
							</IconButton>
						}
					/>
				))}
			</MenuList>
			<div className="px-4">
				<Button
					color="secondary"
					onClick={handleCreateCollectionClick}
					className="group"
					startIcon={
						<div className="group-hover:rotate-180 transition-transform duration-300 ease-in-out">
							<Plus className="text-primary-foreground h-5 w-5" />
						</div>
					}
				>
					Collection
				</Button>
			</div>
			<AdminCollectionEdit
				errors={errors}
				loading={loading}
				open={showModal}
				collection={collection}
				handleClose={() => setShowModal(false)}
				handleChange={handleChange}
				handleSubmit={handleSubmitCollection}
				handleClick={handleTemplateClick}
			/>
			<AlertModal
				loading={loading}
				open={showDeleteModal}
				handleClose={() => setShowDeleteModal(false)}
				handleConfirm={handleDeleteCollection}
			/>
		</div>
	)
}

export default AdminCollectionMenu
