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
      <div className="w-full flex flex-col space-y-6">
        <div className='px-[40px] text-base text-muted-foreground'>
          { collection?.description }
        </div>
        <ShopifyProductCollection 
          { ...rest }
          shopifyCollection={ collection?.handle }
        />
      </div>
		</Drawer>
	)
}

export default ShopifyProductCollectionModal
