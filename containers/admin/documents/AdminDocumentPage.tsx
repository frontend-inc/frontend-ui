import React, { useState, useEffect } from 'react'
import { ViewScroll } from '../../../components'
import {
	AdminHeader,
	AdminLayoutCenter,
	AdminLayoutRight,
} from '../../../components'
import { PublishLabel } from '../../../components'
import { Box, IconButton } from '@mui/material'
import AdminDocumentForm from './AdminDocumentForm'
import AdminDocumentRightPanel from './AdminDocumentRightPanel'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/router'
import { useAdmin, useDocuments, useCollections } from '../../../hooks'
import { truncate } from '../../../helpers'

type DocumentEditProps = {
	appId: string | number
	collectionId: string | number
	documentId: string | number
	errors?: any
	enableUsers?: boolean
	enableTeams?: boolean
	enableShopify?: boolean
}

const DocumentEdit: React.FC<DocumentEditProps> = (props) => {
	const router = useRouter()

	const {
		appId,
		documentId,
		collectionId,
		enableUsers,
		enableTeams,
	} = props

	const [saveLoading, setSaveLoading] = useState(false)
	const [publishLoading, setPublishLoading] = useState(false)
	const [title, setTitle] = useState('')
	const [activeFields, setActiveFields] = useState([])
	const [documentIds, setDocumentIds] = useState()

	const { clientUrl } = useAdmin()
	const { collection, findCollection } = useCollections()

	const {
		loading,
		errors,
		document,
		setDocument,
		findDocument,
		updateDocument,
		createDocument,
		reloadDocument,
		addReferences,
		removeReferences,
		addAttachment,
		removeAttachment,
		updateDocuments,
		handleChange,
	} = useDocuments({
		collection: collectionId,
	})

	const handleSubmit = async () => {
		let resp
		setSaveLoading(true)
		if (documentIds) {
			resp = await updateDocuments(documentIds, document)
		} else if (document?.id) {
			resp = await updateDocument(document)
		} else {
			resp = await createDocument({
				...document,
				content_type: collectionId,
			})
			if (resp?.id) {
				router.push(
					`${clientUrl}/collections/${collectionId}/documents/${resp?.id}`
				)
			}
		}
		setSaveLoading(false)
		return resp
	}

	const handleTogglePublish = async () => {
		setPublishLoading(true)
		await updateDocument({
			...document,
			published: !document.published,
		})
		setPublishLoading(false)
	}

	const handleSortFields = (unsortedFields) => {
		let sortedFields = unsortedFields.filter((field) => field.editable == true)
		setActiveFields(sortedFields)
	}

	const handleAddReferences = async (documentIds) => {
		if (document?.id) {
			await addReferences(document?.id, documentIds)
			reloadDocument(document?.id)
		}
	}

	const handleRemoveReferences = async (documentIds) => {
		if (document?.id) {
			await removeReferences(document.id, documentIds)
			reloadDocument(document.id)
		}
	}

	const handleAddAttachment = async (field, documentId) => {
		if (document?.id) {
			await addAttachment(document?.id, field, documentId)
			reloadDocument(document?.id)
		}
	}

	const handleRemoveAttachment = async (field: string) => {
		if (document?.id) {
			await removeAttachment(document?.id, field)
			reloadDocument(document?.id)
		}
	}

	useEffect(() => {
		const { singular_name, plural_name } = collection || {}
		if (document?.id) {
			setTitle(truncate(document.title, 20))
		} else if (documentId && singular_name) {
			setTitle(`Edit ${singular_name}`)
		} else if (documentIds && plural_name) {
			setTitle(`Edit ${plural_name}`)
		} else if (!documentId && !documentIds && singular_name) {
			setTitle(`Add ${singular_name}`)
		}
	}, [document, documentId, documentIds, collection])

	useEffect(() => {
		if (collectionId) {
			findCollection(collectionId)
		}
	}, [collectionId])

	useEffect(() => {
		if (documentId) {
			findDocument(documentId)
		} else {
			setDocument({})
		}
	}, [documentId])

	useEffect(() => {
		if (router?.query) {
			//@ts-ignore
			setDocumentIds(router.query?.ids?.split(',') || [])
		}
	}, [router?.query])

	useEffect(() => {
		if (collection?.fields) {
			handleSortFields(collection?.fields)
		}
	}, [collection?.fields])

	const handleBackClick = () => {
		router.push(`${clientUrl}/collections/${collection?.name}`)
	}

	const { setOpenLayoutRight } = useAdmin()

	useEffect(() => {
		setOpenLayoutRight(true)
	}, [])

	return (
		<>
			<AdminLayoutCenter>
				<AdminHeader
					enableExpandRightPanel
					title={title}
					primaryActions={
						<IconButton size="small" onClick={handleBackClick}>
							<ChevronLeft />
						</IconButton>
					}
					buttons={<PublishLabel published={document?.published} />}
				/>
				<ViewScroll>
					<Box sx={sx.container}>
						<AdminDocumentForm
							errors={errors}
							document={document}
							fields={activeFields}
							collection={collection}
							//@ts-ignore
							handleChange={handleChange}
							handleAddReferences={handleAddReferences}
							handleRemoveReferences={handleRemoveReferences}
							handleAddAttachment={handleAddAttachment}
							handleRemoveAttachment={handleRemoveAttachment}
						/>
					</Box>
				</ViewScroll>
			</AdminLayoutCenter>
			<AdminLayoutRight>
				<AdminHeader title="Publish" />
				<AdminDocumentRightPanel
					appId={appId}
					loading={loading}
					publishLoading={publishLoading}
					errors={errors}
					title={title}
					document={document}
					setDocument={setDocument}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleTogglePublish={handleTogglePublish}
					enableUsers={enableUsers}
					enableTeams={enableTeams}
				/>
			</AdminLayoutRight>
		</>
	)
}

export default DocumentEdit

const sx = {
	root: {
		height: '100%',
		width: '100%',
	},
	container: {
		p: 2,
	},
	icon: {
		height: 28,
		width: 28,
	},
	progressLoader: {
		p: 0,
	},
	rightContent: {
		px: 2,
		py: 1,
		bgcolor: 'background.paper',
		height: '100%',
	},
	spacer: {
		height: '50px',
	},
	buttons: {
		height: '100%',
		alignItems: 'center',
	},
}
