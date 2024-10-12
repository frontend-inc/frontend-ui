'use client'

import React from 'react'
import { Button } from '../../../../shadcn/ui/button'
import {
	Collapsible,
	CollapsibleContent,
} from '../../../../shadcn/ui/collapsible'
import { useProductCollections } from '../../../../hooks'
import { Plus } from 'lucide-react'

interface AdminProductToolbarProps {
	productCollectionId?: number
	handleSuccess: () => void
	handleClose: () => void
	selectedIds?: number[]
}

export default function AdminProductToolbar({
	productCollectionId,
	handleSuccess,
	handleClose,
	selectedIds = [],
}: AdminProductToolbarProps) {
	const { addProducts } = useProductCollections()

	const handleAddProducts = async () => {
		if (productCollectionId) {
			await addProducts(productCollectionId, selectedIds)
			handleSuccess()
			handleClose()
		}
	}

	return (
		<div className="sticky top-0 z-10 pb-2 shadow-md bg-background">
			<Collapsible open={selectedIds.length > 0}>
				<CollapsibleContent className="space-y-2">
					<div className="flex space-x-2">
						<Button className="w-full" onClick={handleAddProducts}>
							<Plus className="mr-2 h-4 w-4" />
							Add
						</Button>
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	)
}
