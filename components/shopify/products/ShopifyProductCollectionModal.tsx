'use client'

import React from 'react'
import { Drawer } from '../..'
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
	enableQuickShop?: boolean
	enableQuantity?: boolean  
}

const ShopifyProductCollectionModal: React.FC<ShopifyProductCollectionModalProps> = (props) => {
	const {
    collection,
		open = false,		
		handleClose,
    ...rest		
	} = props

	return (
		<Drawer 
      title={ collection?.title }
      open={open} 
      handleClose={handleClose}
    >
			<ShopifyProductCollection 
				{ ...rest }
        shopifyCollection={ collection?.handle }
			/>
		</Drawer>
	)
}

export default ShopifyProductCollectionModal
