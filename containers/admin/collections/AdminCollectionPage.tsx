import React, { useState, useEffect } from 'react'
import { Stack, IconButton, Button } from '@mui/material'
import {
	AdminHeader,
	AdminLayoutLeft,
	AdminLayoutCenter,
} from '../../../components'
import { LayoutEmpty, Icon, AlertModal } from '../../../components'
import { useTabs, useAdmin, useCollections, useViews } from '../../../hooks'
import { useRouter } from 'next/router'
import AdminViewEdit from '../views/AdminViewEdit'
import { ApiQuery } from 'frontend-js/client'
import AdminCollectionTable from './AdminCollectionTable'
import CollectionSchemaToggle from './CollectionSchemaToggle'
import AdminCollectionMenu from './AdminCollectionMenu'
import { RouterParams } from '../../../types'


const AdminCollectionPage: React.FC = () => {
	useTabs('collections')

	const apiQuery = new ApiQuery()
	const router = useRouter()
	let { collection_id: collectionId, app_id: appId } =
		router?.query as RouterParams
	if (collectionId == 'index') collectionId = ''

  const { clientUrl } = useAdmin()

	const [openAiModal, setOpenAiModal] = useState(false)
	const [showViewModal, setShowViewModal] = useState(false)

	const {
		loading: viewLoading,
		errors: viewErrors,
		view,
		findViews,
		createView,
		handleChange: handleChangeView,
		setView,
	} = useViews()

	const { loading, collection, findCollection, aiGenerateMockData } =
		useCollections()

	const handleSaveView = async () => {
		const viewQuery = apiQuery.parseURL(router.query).query()
		setView({
			collection_id: collectionId,
			query: viewQuery,
		})
		setShowViewModal(true)
	}

	const handleSubmitView = async () => {
		try {
			let resp = await createView({
				...view,
				collection_id: collectionId,
			})
			if (resp?.id) {
				setShowViewModal(false)
				findViews()
				setView({})
				apiQuery.where(resp?.query)
				router.push(
					`${clientUrl}/collections/${
						resp?.collection?.name
					}?${apiQuery.url()}&view_id=${resp?.id}`
				)
			}
		} catch (e) {
			console.log(e)
		}
	}


	const handleAiGenerateMockData = async () => {
		await aiGenerateMockData(collectionId)
		setOpenAiModal(false)
		await findCollection(collectionId)
	}

	const handleAddClick = () => {
		router.push(`${clientUrl}/collections/${collectionId}/documents/new`)
	}

	useEffect(() => {
		if (collectionId?.length > 0) {
			findCollection(collectionId)
		}
	}, [collectionId])

	return (
		<>
			<AdminLayoutLeft>
				<AdminCollectionMenu />
			</AdminLayoutLeft>
			<AdminLayoutCenter>
				<AdminHeader
					enableExpandLeftPanel
					buttons={
						collectionId && (
							<Stack direction="row" spacing={1}>
								<Button
									variant="contained"
									color="primary"
									onClick={handleAddClick}
									startIcon={<Icon name="Plus" color="primary.contrastText" />}
								>
									Add
								</Button>
								<IconButton
									size="small"
									sx={sx.iconButton}
									onClick={() => setOpenAiModal(true)}
								>
									<Icon name="Sparkles" color="text.primary" />
								</IconButton>
							</Stack>
						)
					}
					secondaryActions={<CollectionSchemaToggle tab={0} />}
				/>
				{collectionId ? (
					<AdminCollectionTable
						collection={collection}
						handleSaveView={handleSaveView}
					/>
				) : (
					<LayoutEmpty
						icon={'Database'}
						title="No collection."
						description="Select or create a CMS collection."
					/>
				)}
			</AdminLayoutCenter>
			<AdminViewEdit
				loading={viewLoading}
				errors={viewErrors}
				open={showViewModal}
				handleClose={() => setShowViewModal(false)}
				view={view}
				handleSubmit={handleSubmitView}
				handleChange={handleChangeView}
			/>
			<AlertModal
				loading={loading}
				open={openAiModal}
				handleClose={() => setOpenAiModal(false)}
				icon="Sparkles"
				title="Generate data using AI"
				description="Are you sure? This may take a few minutes."
				handleConfirm={handleAiGenerateMockData}
			/>
		</>
	)
}

export default AdminCollectionPage

const sx = {
	iconButton: {
		width: 40,
		height: 40,
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
	},
}
