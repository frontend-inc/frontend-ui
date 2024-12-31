'use client'

import React from 'react'
import { Modal } from '../..'
import { ShopifyProductCollection } from '..'
import { ShopifyCollectionType } from 'frontend-shopify'

type ShopifyProductCollectionModalProps = {
	collection: ShopifyCollectionType
	open?: boolean
	handleClose: () => void
	enableFilters?: boolean
	enableSort?: boolean
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
}

const ShopifyProductCollectionModal: React.FC<
	ShopifyProductCollectionModalProps
> = (props) => {
	const { collection, open = false, handleClose, ...rest } = props

	return (
		<Modal
			title={collection?.title}
			open={open}
			handleClose={handleClose}
			maxWidth="full"
		>
			<div className="w-full flex flex-col space-y-6">
				<div className="px-[40px] text-base text-muted-foreground">
					{collection?.description}
				</div>
				<ShopifyProductCollection
					{...rest}
					shopifyCollection={collection?.handle}
				/>
			</div>
		</Modal>
	)
}

export default ShopifyProductCollectionModal
