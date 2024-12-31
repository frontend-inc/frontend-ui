'use client'

import React from 'react'
import { Heading, Modal } from '../..'
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
			open={open}
			handleClose={handleClose}
			maxWidth="full"
		>
			<div className="w-full flex flex-col space-y-6">
        <Heading 
          size='sm'
          textAlign="center"
          title={collection?.title}
          subtitle={collection?.description}
        />        
				<ShopifyProductCollection
					{...rest}
					shopifyCollection={collection?.handle}
				/>
			</div>
		</Modal>
	)
}

export default ShopifyProductCollectionModal
