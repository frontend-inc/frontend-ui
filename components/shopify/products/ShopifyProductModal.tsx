'use client'

import React from 'react'
import { Drawer } from '../../../components'
import { ShopifyProductDetails } from '../../../components/shopify'
import { BlurFade } from '../../../components'

type ShopifyProductModalProps = {
	shopifyProduct: string 
	enableQuantity?: boolean
	open?: boolean
	buttonText?: string
	handleClose: () => void
}

const ShopifyProductModal: React.FC<ShopifyProductModalProps> = (props) => {
	const {
		open = false,
		shopifyProduct,
		enableQuantity,
		handleClose,
		buttonText,
	} = props

	return (
		<Drawer open={open} handleClose={handleClose} maxWidth="lg">
      <BlurFade delay={0.25} inView>
        <ShopifyProductDetails
          disableZoom
          shopifyProduct={shopifyProduct}
          enableQuantity={enableQuantity}
          buttonText={buttonText}
        />
      </BlurFade>
		</Drawer>
	)
}

export default ShopifyProductModal
