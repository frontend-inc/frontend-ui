'use client'

import React, { useEffect } from 'react'
import {
	AdminHeader,
	AdminLayoutLeft,
	AdminLayoutCenter,
} from '../../../components'
import { Placeholder } from '../../../components'
import { useTabs, useAdminCollections } from '../../../hooks'
import { useParams } from 'next/navigation'
import AdminCollectionMenu from './AdminCollectionMenu'
import { AdminDocumentsList } from '../documents'
import { ScrollArea } from 'frontend-shadcn'

const AdminCollectionPage: React.FC = () => {
	useTabs('collections')

	let { collection_id: collectionId } = useParams() as any
	if (collectionId == 'index') collectionId = undefined;

  const { collection, findCollection } = useAdminCollections()

	useEffect(() => {
		if (collectionId) {
			findCollection(collectionId)
		}
	}, [collectionId])

	return (
		<>
			<AdminLayoutLeft>
				<AdminCollectionMenu />
			</AdminLayoutLeft>
			<AdminLayoutCenter>
				<AdminHeader enableExpandLeftPanel />
        <ScrollArea>
        <div className="w-full p-4">
				{ collection ? (
					<AdminDocumentsList
            documentType={collection?.document_type}
            metafields={ collection?.fields }
						collectionId={collectionId}
					/>
				) : (
					<Placeholder
						icon="Database"
						title="No collection."
						description="Select or create a CMS collection."
					/>
				)}
        </div>
        </ScrollArea>
			</AdminLayoutCenter>
		</>
	)
}

export default AdminCollectionPage
